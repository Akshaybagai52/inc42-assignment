'use client';

import React from 'react';

/**
 * Skeleton loader for user cards
 * Provides smooth loading animation matching the UserCard layout
 */
export const UserCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 animate-pulse">
      {/* Avatar Skeleton */}
      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
      </div>

      {/* Name Skeleton */}
      <div className="h-6 bg-gray-300 rounded-md mb-2 w-3/4 mx-auto"></div>

      {/* Role/Company Skeleton */}
      <div className="h-4 bg-gray-200 rounded-md mb-3 w-1/2 mx-auto"></div>

      {/* Email Skeleton */}
      <div className="h-4 bg-gray-200 rounded-md mb-4 w-5/6 mx-auto"></div>

      {/* Status Badge Skeleton */}
      <div className="flex justify-center mb-4">
        <div className="h-6 w-20 bg-gray-300 rounded-full"></div>
      </div>

      {/* Button Skeleton */}
      <div className="h-10 bg-gray-300 rounded-lg w-full"></div>
    </div>
  );
};
