import React from 'react';
import { UserWithStatus } from '@/types/user';

interface ModalHeaderProps {
  user: UserWithStatus;
}

/**
 * Modal header with avatar and user basic info
 */
export const ModalHeader: React.FC<ModalHeaderProps> = ({ user }) => {
  return (
    <div className="flex items-center gap-6 mb-6 pb-6 border-b border-gray-200">
      {/* Avatar with Gradient and Ring */}
      <div className="relative shrink-0">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white">
          <span className="text-3xl font-bold text-white">
            {user.name.charAt(0).toUpperCase()}
          </span>
        </div>
        {/* Status Indicator Dot */}
        <div
          className={`absolute bottom-1 right-1 w-5 h-5 rounded-full border-4 border-white shadow-lg ${
            user.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'
          }`}
        />
      </div>

      {/* Name and Status */}
      <div className="flex-1">
        <h2 id="modal-title" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 mb-3">
          {user.name}
        </h2>
        <span
          className={`relative inline-block px-5 py-2 text-xs font-bold rounded-full shadow-lg ${
            user.status === 'Active'
              ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white'
              : 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-700'
          }`}
        >
          <span className="relative z-10">{user.status}</span>
          {user.status === 'Active' && (
            <span className="absolute inset-0 bg-white/20 rounded-full blur-md animate-pulse" />
          )}
        </span>
      </div>
    </div>
  );
};
