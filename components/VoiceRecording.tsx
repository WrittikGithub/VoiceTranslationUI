'use client';

import { useState, useRef, useEffect } from 'react';
import SearchableDropdown from './SearchableDropdown';

export default function VoiceRecording() {
  const [isRecording, setIsRecording] = useState(false);
  const [asrText, setAsrText] = useState(''); // ASR result - what user is saying
  const [translatedText, setTranslatedText] = useState(''); // Translated text
  const [isProcessing, setIsProcessing] = useState(false);
  const [audioLevels, setAudioLevels] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);
  const [copiedAsr, setCopiedAsr] = useState(false);
  const [fromLanguage, setFromLanguage] = useState('auto');
  const [toLanguage, setToLanguage] = useState('en');
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const animationFrameRef = useRef<number>();
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Set up audio analysis for visual feedback
      const audioContext = new AudioContext();
      const analyser = audioContext.createAnalyser();
      const microphone = audioContext.createMediaStreamSource(stream);
      analyser.fftSize = 256;
      microphone.connect(analyser);
      
      audioContextRef.current = audioContext;
      analyserRef.current = analyser;

      // Create MediaRecorder
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        await sendAudioForTranslation(audioBlob);
        
        // Stop all tracks
        stream.getTracks().forEach(track => track.stop());
        if (audioContextRef.current) {
          audioContextRef.current.close();
        }
      };

      mediaRecorder.start();
      setIsRecording(true);
      setAsrText('');
      setTranslatedText('');

      // Animate audio levels
      const updateAudioLevels = () => {
        if (analyser && isRecording) {
          const dataArray = new Uint8Array(analyser.frequencyBinCount);
          analyser.getByteFrequencyData(dataArray);
          
          // Get average levels for visualization
          const levels = Array.from({ length: 8 }, (_, i) => {
            const index = Math.floor((i / 8) * dataArray.length);
            return (dataArray[index] / 255) * 100;
          });
          
          setAudioLevels(levels);
          animationFrameRef.current = requestAnimationFrame(updateAudioLevels);
        }
      };
      updateAudioLevels();
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Please allow microphone access to record audio.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsProcessing(true);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      setAudioLevels([]);
    }
  };

  const sendAudioForTranslation = async (audioBlob: Blob) => {
    try {
      const formData = new FormData();
      formData.append('audio', audioBlob, 'recording.webm');
      if (fromLanguage !== 'auto') {
        formData.append('source_language', fromLanguage);
      }
      formData.append('target_language', toLanguage);

      const response = await fetch('/api/translate-voice', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Translation failed');
      }

      const data = await response.json();
      
      // Update ASR result (what user said)
      if (data.asrText || data.asr || data.originalText || data.sourceText) {
        setAsrText(data.asrText || data.asr || data.originalText || data.sourceText);
      }
      
      // Update translated text
      if (data.translatedText || data.text || data.targetText) {
        setTranslatedText(data.translatedText || data.text || data.targetText);
      }
    } catch (error) {
      console.error('Translation error:', error);
      setAsrText('Error: Could not process audio.');
      setTranslatedText('Error: Could not translate audio. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const copyToClipboard = async (text: string, type: 'translated' | 'asr') => {
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      if (type === 'translated') {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        setCopiedAsr(true);
        setTimeout(() => setCopiedAsr(false), 2000);
      }
    } catch (error) {
      console.error('Failed to copy text:', error);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        if (type === 'translated') {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } else {
          setCopiedAsr(true);
          setTimeout(() => setCopiedAsr(false), 2000);
        }
      } catch (err) {
        console.error('Fallback copy failed:', err);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
          Record Your Voice
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
          Speak naturally and watch your words transform into translated text in real-time
        </p>
      </div>

      <div className="glass-card rounded-2xl p-8 md:p-12 transition-all duration-300">
        {/* Recording Button */}
        <div className="flex flex-col items-center mb-8">
          <button
            onClick={isRecording ? stopRecording : startRecording}
            disabled={isProcessing}
            className={`relative w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 ${
              isRecording
                ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                : isProcessing
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600'
            } shadow-lg hover:shadow-xl transform hover:scale-105`}
          >
            {isProcessing ? (
              <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <svg
                className={`w-12 h-12 text-white ${isRecording ? 'hidden' : ''}`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
              </svg>
            )}
            {isRecording && (
              <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75" />
            )}
          </button>
          
          <p className="mt-6 text-gray-700 dark:text-gray-300 font-medium transition-colors">
            {isRecording ? (
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                Recording... Click to stop
              </span>
            ) : isProcessing ? (
              'Processing your audio...'
            ) : (
              'Click to start recording'
            )}
          </p>
        </div>

        {/* Audio Visualization */}
        {isRecording && audioLevels.length > 0 && (
          <div className="flex items-end justify-center gap-2 mb-8 h-24">
            {audioLevels.map((level, index) => (
              <div
                key={index}
                className="w-3 bg-gradient-to-t from-purple-500 via-pink-500 to-blue-500 rounded-full transition-all duration-100"
                style={{
                  height: `${Math.max(level, 10)}%`,
                  minHeight: '8px',
                }}
              />
            ))}
          </div>
        )}

        {/* ASR and Translated Text Display - Side by Side */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* ASR Result - What User is Saying */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                What You Said (ASR):
              </label>
              {asrText && (
                <button
                  onClick={() => copyToClipboard(asrText, 'asr')}
                  className="flex items-center gap-2 px-4 py-2 glass-button-secondary rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Copy ASR text to clipboard"
                >
                  {copiedAsr ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>Copy</span>
                    </>
                  )}
                </button>
              )}
            </div>
            <div className={`glass-element rounded-xl p-6 min-h-[200px] transition-all relative border-l-4 ${
              isProcessing 
                ? 'border-purple-500 animate-pulse-slow' 
                : 'border-purple-500'
            } ${isProcessing ? 'overflow-hidden' : ''}`}>
              {/* Processing Animation Overlay */}
              {isProcessing && (
                <>
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-shimmer -z-0"></div>
                  
                  {/* Pulsing Border Glow */}
                  <div className="absolute inset-0 rounded-xl border-2 border-purple-500/50 animate-pulse-slow -z-0"></div>
                  
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5 animate-pulse-slow -z-0"></div>
                </>
              )}
              
              <div className="relative z-10">
                {isRecording ? (
                  <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                    <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                    <p className="text-sm font-medium">Listening...</p>
                  </div>
                ) : asrText ? (
                  <p className="text-gray-900 dark:text-gray-100 text-lg leading-relaxed whitespace-pre-wrap transition-colors">
                    {asrText}
                  </p>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8">
                    {isProcessing ? (
                      <>
                        {/* Animated Loading Dots */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce-slow"></div>
                          <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce-slow" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce-slow" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                        
                        {/* Processing Text with Animation */}
                        <p className="text-purple-600 dark:text-purple-400 font-medium animate-pulse-slow">
                          Processing your speech...
                        </p>
                        
                        {/* Animated Waveform */}
                        <div className="flex items-end justify-center gap-1 mt-4 h-8">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className="w-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full animate-pulse-slow"
                              style={{
                                height: `${20 + (i * 15)}%`,
                                animationDelay: `${i * 0.1}s`,
                                animationDuration: '1s',
                              }}
                            ></div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <p className="text-gray-400 dark:text-gray-500 italic text-center transition-colors">
                        Your speech transcription will appear here
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Translated Text Display */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Translated Text:
              </label>
              {translatedText && (
                <button
                  onClick={() => copyToClipboard(translatedText, 'translated')}
                  className="flex items-center gap-2 px-4 py-2 glass-button-secondary rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Copy translated text to clipboard"
                >
                  {copied ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>Copy</span>
                    </>
                  )}
                </button>
              )}
            </div>
            <div className={`glass-element rounded-xl p-6 min-h-[200px] transition-all relative border-l-4 ${
              isProcessing 
                ? 'border-pink-500 animate-pulse-slow' 
                : 'border-pink-500'
            } ${isProcessing ? 'overflow-hidden' : ''}`}>
              {/* Processing Animation Overlay */}
              {isProcessing && (
                <>
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/10 to-transparent animate-shimmer -z-0"></div>
                  
                  {/* Pulsing Border Glow */}
                  <div className="absolute inset-0 rounded-xl border-2 border-pink-500/50 animate-pulse-slow -z-0"></div>
                  
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-blue-500/5 to-purple-500/5 animate-pulse-slow -z-0"></div>
                </>
              )}
              
              <div className="relative z-10">
                {translatedText ? (
                  <p className="text-gray-900 dark:text-gray-100 text-lg leading-relaxed whitespace-pre-wrap transition-colors">
                    {translatedText}
                  </p>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8">
                    {isProcessing ? (
                      <>
                        {/* Animated Loading Spinner */}
                        <div className="relative w-12 h-12 mb-4">
                          <div className="absolute inset-0 border-4 border-pink-200 dark:border-pink-900 rounded-full"></div>
                          <div className="absolute inset-0 border-4 border-transparent border-t-pink-500 border-r-pink-500 rounded-full animate-spin"></div>
                        </div>
                        
                        {/* Processing Text with Animation */}
                        <p className="text-pink-600 dark:text-pink-400 font-medium animate-pulse-slow mb-2">
                          Translating your voice...
                        </p>
                        
                        {/* Animated Progress Dots */}
                        <div className="flex items-center gap-1 mt-2">
                          <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce-slow"></span>
                          <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce-slow" style={{ animationDelay: '0.2s' }}></span>
                          <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce-slow" style={{ animationDelay: '0.4s' }}></span>
                        </div>
                        
                        {/* Animated Gradient Text Effect */}
                        <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 animate-pulse-slow">
                          Converting speech to text...
                        </div>
                      </>
                    ) : (
                      <p className="text-gray-400 dark:text-gray-500 italic text-center transition-colors">
                        Your translated text will appear here
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Language Selection */}
        <div className="mt-8 mb-8 flex flex-col sm:flex-row gap-6 items-start justify-center relative z-10">
          {/* From Language Dropdown */}
          <SearchableDropdown
            label="From Language:"
            value={fromLanguage}
            onChange={setFromLanguage}
            placeholder="Search or select source language..."
            accentColor="purple"
            options={[
              { value: 'auto', label: 'Auto-detect' },
              { value: 'hi', label: 'Hindi', nativeName: 'हिंदी' },
              { value: 'bn', label: 'Bengali', nativeName: 'বাংলা' },
              { value: 'te', label: 'Telugu', nativeName: 'తెలుగు' },
              { value: 'mr', label: 'Marathi', nativeName: 'मराठी' },
              { value: 'ta', label: 'Tamil', nativeName: 'தமிழ்' },
              { value: 'gu', label: 'Gujarati', nativeName: 'ગુજરાતી' },
              { value: 'ur', label: 'Urdu', nativeName: 'اردو' },
              { value: 'kn', label: 'Kannada', nativeName: 'ಕನ್ನಡ' },
              { value: 'or', label: 'Odia', nativeName: 'ଓଡ଼ିଆ' },
              { value: 'ml', label: 'Malayalam', nativeName: 'മലയാളം' },
              { value: 'pa', label: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
              { value: 'as', label: 'Assamese', nativeName: 'অসমীয়া' },
              { value: 'sa', label: 'Sanskrit', nativeName: 'संस्कृतम्' },
              { value: 'en', label: 'English' },
            ]}
          />

          {/* To Language Dropdown */}
          <SearchableDropdown
            label="To Language:"
            value={toLanguage}
            onChange={setToLanguage}
            placeholder="Search or select target language..."
            accentColor="pink"
            options={[
              { value: 'en', label: 'English' },
              { value: 'hi', label: 'Hindi', nativeName: 'हिंदी' },
              { value: 'bn', label: 'Bengali', nativeName: 'বাংলা' },
              { value: 'te', label: 'Telugu', nativeName: 'తెలుగు' },
              { value: 'mr', label: 'Marathi', nativeName: 'मराठी' },
              { value: 'ta', label: 'Tamil', nativeName: 'தமிழ்' },
              { value: 'gu', label: 'Gujarati', nativeName: 'ગુજરાતી' },
              { value: 'ur', label: 'Urdu', nativeName: 'اردو' },
              { value: 'kn', label: 'Kannada', nativeName: 'ಕನ್ನಡ' },
              { value: 'or', label: 'Odia', nativeName: 'ଓଡ଼ିଆ' },
              { value: 'ml', label: 'Malayalam', nativeName: 'മലയാളം' },
              { value: 'pa', label: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
              { value: 'as', label: 'Assamese', nativeName: 'অসমীয়া' },
              { value: 'sa', label: 'Sanskrit', nativeName: 'संस्कृतम्' },
              { value: 'es', label: 'Spanish' },
              { value: 'fr', label: 'French' },
              { value: 'de', label: 'German' },
              { value: 'ja', label: 'Japanese' },
              { value: 'zh', label: 'Chinese' },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
