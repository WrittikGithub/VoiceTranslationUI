'use client';

import { useState, useRef, useEffect } from 'react';

interface LanguageOption {
  value: string;
  label: string;
  nativeName?: string;
}

interface SearchableDropdownProps {
  options: LanguageOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label: string;
  accentColor?: 'purple' | 'pink';
}

export default function SearchableDropdown({
  options,
  value,
  onChange,
  placeholder = 'Search language...',
  label,
  accentColor = 'purple',
}: SearchableDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectedOption = options.find(opt => opt.value === value);

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    option.nativeName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    option.value.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery('');
        setHighlightedIndex(0);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSelect = (option: LanguageOption) => {
    onChange(option.value);
    setIsOpen(false);
    setSearchQuery('');
    setHighlightedIndex(0);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev < filteredOptions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => (prev > 0 ? prev - 1 : 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (filteredOptions[highlightedIndex]) {
          handleSelect(filteredOptions[highlightedIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        setSearchQuery('');
        setHighlightedIndex(0);
        break;
    }
  };

  const accentClasses = accentColor === 'purple' 
    ? 'focus:ring-purple-500 border-purple-500/20' 
    : 'focus:ring-pink-500 border-pink-500/20';

  return (
    <div className="w-full sm:w-64 relative z-10" ref={dropdownRef}>
      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors">
        {label}
      </label>
      <div className="relative">
        {/* Selected Value Display / Search Input */}
        <div
          className={`glass-element rounded-xl px-4 py-3 cursor-pointer transition-all duration-300 hover:shadow-lg ${accentClasses} ${
            isOpen ? 'ring-2 ring-offset-2 ring-offset-transparent' : ''
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              {isOpen ? (
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setHighlightedIndex(0);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder={placeholder}
                  className="w-full bg-transparent border-none outline-none text-sm font-medium text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                />
              ) : (
                <span className="text-sm font-medium text-gray-900 dark:text-white truncate block">
                  {selectedOption ? (
                    <>
                      {selectedOption.nativeName && (
                        <span className="mr-2">{selectedOption.nativeName}</span>
                      )}
                      {selectedOption.label}
                    </>
                  ) : (
                    <span className="text-gray-400 dark:text-gray-500">Select language</span>
                  )}
                </span>
              )}
            </div>
            <svg
              className={`w-5 h-5 transition-transform duration-200 ${
                accentColor === 'purple' ? 'text-purple-600 dark:text-purple-400' : 'text-pink-600 dark:text-pink-400'
              } ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Dropdown Options */}
        {isOpen && (
          <div className="absolute z-[9999] w-full mt-2 glass-element rounded-xl shadow-2xl max-h-64 overflow-hidden border border-gray-200/50 dark:border-gray-700/50">
            <div className="overflow-y-auto max-h-64 custom-scrollbar">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <div
                    key={option.value}
                    onClick={() => handleSelect(option)}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    className={`px-4 py-3 cursor-pointer transition-all duration-150 ${
                      index === highlightedIndex
                        ? accentColor === 'purple'
                          ? 'bg-purple-500/20 dark:bg-purple-500/30'
                          : 'bg-pink-500/20 dark:bg-pink-500/30'
                        : 'hover:bg-gray-100/50 dark:hover:bg-gray-700/50'
                    } ${
                      option.value === value
                        ? accentColor === 'purple'
                          ? 'bg-purple-500/10 dark:bg-purple-500/20'
                          : 'bg-pink-500/10 dark:bg-pink-500/20'
                        : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        {option.nativeName && (
                          <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                            {option.nativeName}
                          </div>
                        )}
                        <div className={`text-sm ${
                          option.nativeName 
                            ? 'text-gray-600 dark:text-gray-400' 
                            : 'text-gray-900 dark:text-white font-medium'
                        }`}>
                          {option.label}
                        </div>
                      </div>
                      {option.value === value && (
                        <svg
                          className={`w-5 h-5 ${
                            accentColor === 'purple' 
                              ? 'text-purple-600 dark:text-purple-400' 
                              : 'text-pink-600 dark:text-pink-400'
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-4 py-8 text-center text-gray-400 dark:text-gray-500 text-sm">
                  No languages found
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
