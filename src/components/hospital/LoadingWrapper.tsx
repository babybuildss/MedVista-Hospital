'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

/* ── Dynamic import for loading screen to avoid SSR ── */
const LoadingScreen = dynamic(
  () => import('@/components/hospital/3d/LoadingScreen'),
  { ssr: false, loading: () => null }
);

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if this is the first visit (no session storage flag)
    const hasVisited = sessionStorage.getItem('medvista-visited');

    if (hasVisited) {
      // Already visited, skip loading screen
      setIsLoading(false);
      setShowContent(true);
      return;
    }

    // First visit - show loading screen
    // Content is initially hidden
    setIsLoading(true);
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem('medvista-visited', 'true');
    setIsLoading(false);
    // Small delay before showing content for smooth transition
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Main Content with entrance animation */}
      <div
        className={`transition-opacity duration-700 ${
          showContent || !isLoading ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {children}
      </div>
    </>
  );
}
