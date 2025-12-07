import React from "react";
import Image from "next/image";
import {
  FAILED_TO_LOAD_USERS_MESSAGE,
  RETRY_BUTTON_LABEL,
} from "@/constants/components/statesConstants";

interface ErrorStateProps {
  error: string;
  onRetry: () => void;
}

/**
 * Error state component with retry functionality
 */
export const ErrorState: React.FC<ErrorStateProps> = ({ error, onRetry }) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
      <Image
        src="/icons/error.svg"
        alt=""
        width={64}
        height={64}
        className="text-red-400 mx-auto mb-4"
      />
      <h3 className="text-lg font-semibold text-red-900 mb-2">
        {FAILED_TO_LOAD_USERS_MESSAGE}
      </h3>
      <p className="text-red-700 mb-4">{error}</p>
      <button
        onClick={onRetry}
        className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        {RETRY_BUTTON_LABEL}
      </button>
    </div>
  );
};
