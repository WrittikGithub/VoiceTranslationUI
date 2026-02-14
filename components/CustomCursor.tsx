'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile/touch device
    const checkMobile = () => {
      const mobile =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches;
      setIsMobile(mobile);
      return mobile;
    };

    const mobile = checkMobile();
    window.addEventListener('resize', checkMobile);

    // Don't show custom cursor on mobile devices
    if (mobile) {
      return () => {
        window.removeEventListener('resize', checkMobile);
      };
    }

    let animationFrameId: number;

    const updateCursor = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
      });
    };

    // Check for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        !!target.closest('a') ||
        !!target.closest('button') ||
        !!target.closest('[role="button"]') ||
        target.style.cursor === 'pointer' ||
        window.getComputedStyle(target).cursor === 'pointer' ||
        !!target.closest('.glass-button-primary') ||
        !!target.closest('.glass-button-secondary') ||
        !!target.closest('input[type="submit"]') ||
        !!target.closest('input[type="button"]');

      setIsHovering(isInteractive);
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    // Hide cursor when mouse leaves window
    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    window.addEventListener('mousemove', updateCursor, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('mouseout', handleMouseOut, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Don't render on mobile devices
  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Large Background Gradient Blob - Follows Cursor */}
      <div
        className="fixed pointer-events-none z-0 transition-all duration-700 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full blur-3xl transition-all duration-700 ${
            isHovering
              ? 'w-[600px] h-[600px] opacity-40'
              : 'w-[400px] h-[400px] opacity-30'
          }`}
          style={{
            background: isHovering
              ? 'radial-gradient(circle, rgba(124, 58, 237, 0.6) 0%, rgba(219, 39, 119, 0.5) 30%, rgba(29, 78, 216, 0.4) 60%, transparent 100%)'
              : 'radial-gradient(circle, rgba(124, 58, 237, 0.5) 0%, rgba(219, 39, 119, 0.35) 40%, rgba(29, 78, 216, 0.25) 70%, transparent 100%)',
          }}
        ></div>
      </div>

      {/* Secondary Background Blob - Slightly Delayed */}
      <div
        className="fixed pointer-events-none z-0 transition-all duration-1000 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full blur-3xl transition-all duration-1000 ${
            isHovering
              ? 'w-[500px] h-[500px] opacity-35'
              : 'w-[300px] h-[300px] opacity-25'
          }`}
          style={{
            background: 'radial-gradient(circle, rgba(219, 39, 119, 0.5) 0%, rgba(124, 58, 237, 0.4) 50%, transparent 100%)',
          }}
        ></div>
      </div>

      {/* Outer Cursor Ring with Gradient */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-all duration-300 ease-out ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
            isHovering
              ? 'bg-gradient-to-r from-purple-600/40 via-pink-600/40 to-blue-600/40 border-purple-500'
              : 'bg-transparent border-gray-400 dark:border-gray-500'
          }`}
        >
          {/* Rotating gradient ring on hover */}
          {isHovering && (
            <div 
              className="absolute inset-0 rounded-full bg-[length:200%_100%] animate-gradient opacity-40 blur-sm"
              style={{
                backgroundImage: 'linear-gradient(to right, #7c3aed, #db2777, #1d4ed8, #7c3aed)',
              }}
            ></div>
          )}
        </div>
      </div>

      {/* Inner Cursor Dot */}
      <div
        className="fixed pointer-events-none z-[9999] transition-all duration-150 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full transition-all duration-150 ${
            isHovering
              ? 'w-3 h-3 scale-150'
              : 'w-2 h-2 bg-gray-900 dark:bg-white scale-100'
          }`}
          style={isHovering ? {
            background: 'linear-gradient(to right, #7c3aed, #db2777)',
          } : {}}
        ></div>
      </div>

      {/* Animated Trail Effect with Gradient */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-500 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full blur-xl transition-all duration-500 ${
            isHovering
              ? 'w-16 h-16'
              : 'w-12 h-12'
          }`}
          style={{
            background: isHovering
              ? 'radial-gradient(circle, rgba(124, 58, 237, 0.6), rgba(219, 39, 119, 0.5), rgba(29, 78, 216, 0.4))'
              : 'radial-gradient(circle, rgba(124, 58, 237, 0.4), rgba(219, 39, 119, 0.3), rgba(29, 78, 216, 0.2))',
          }}
        ></div>
      </div>

      {/* Additional Glow Effect on Hover */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-[9997] transition-all duration-300 ease-out"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div 
            className="w-20 h-20 rounded-full blur-2xl animate-pulse-slow"
            style={{
              background: 'radial-gradient(circle, rgba(124, 58, 237, 0.4), rgba(219, 39, 119, 0.3), rgba(29, 78, 216, 0.2))',
            }}
          ></div>
        </div>
      )}
    </>
  );
}
