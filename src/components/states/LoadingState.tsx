import React from 'react';
import { UserCardSkeleton } from '@/components/cards/UserCardSkeleton';

/**
 * Loading state component with skeleton loaders
 */
export const LoadingState: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <UserCardSkeleton key={index} />
      ))}
    </div>
  );
};
