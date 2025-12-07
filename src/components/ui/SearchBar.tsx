"use client";

import React from "react";
import Image from "next/image";
import {
  SEARCH_USERS_ARIA_LABEL,
  CLEAR_SEARCH_ARIA_LABEL,
  CLEAR_ALT_TEXT,
} from "@/constants/ui/uiConstants";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search users...",
}) => {
  return (
    <div className="relative w-full">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <Image
          src="/icons/search.svg"
          alt=""
          width={20}
          height={20}
          className="text-gray-400"
          aria-hidden="true"
        />
      </div>

      {/* Input Field */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-gray-400"
        aria-label={SEARCH_USERS_ARIA_LABEL}
      />

      {/* Clear Button */}
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label={CLEAR_SEARCH_ARIA_LABEL}
        >
          <Image
            src="/icons/close.svg"
            alt={CLEAR_ALT_TEXT}
            width={20}
            height={20}
            className="text-gray-400"
          />
        </button>
      )}
    </div>
  );
};
