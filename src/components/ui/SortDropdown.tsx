"use client";

import React from "react";
import Image from "next/image";
import { SortOption } from "@/types/user";
import {
  SORT_USERS_ARIA_LABEL,
  SORT_BY_NAME_LABEL,
  SORT_BY_COMPANY_LABEL,
} from "@/constants/ui/uiConstants";

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
  options?: { value: SortOption; label: string }[];
}

const defaultOptions: { value: SortOption; label: string }[] = [
  { value: "name", label: SORT_BY_NAME_LABEL },
  { value: "company", label: SORT_BY_COMPANY_LABEL },
];

/**
 * Reusable dropdown component for sorting
 * Uses native select for simplicity and accessibility
 */
export const SortDropdown: React.FC<SortDropdownProps> = ({
  value,
  onChange,
  options = defaultOptions,
}) => {
  return (
    <div className="relative w-full sm:w-auto min-w-[240px]">
      {/* Dropdown Icon */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none z-10">
        <Image
          src="/icons/sort.svg"
          alt=""
          width={18}
          height={18}
          className="text-gray-500 opacity-70"
          aria-hidden="true"
        />
      </div>

      {/* Select Element */}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="w-full pl-11 pr-10 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition-all duration-200 cursor-pointer shadow-sm"
        aria-label={SORT_USERS_ARIA_LABEL}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="py-2">
            {option.label}
          </option>
        ))}
      </select>

      {/* Chevron Icon */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <Image
          src="/icons/chevron-down.svg"
          alt=""
          width={16}
          height={16}
          className="text-gray-500 opacity-70"
        />
      </div>
    </div>
  );
};
