import React from "react";
import { SearchBar } from "@/components/ui/SearchBar";
import { SortDropdown } from "@/components/ui/SortDropdown";
import type { SortOption } from "@/types/user";
import { SEARCH_PLACEHOLDER } from "@/constants/layout/layoutConstants";

interface FilterControlsProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  sortBy: SortOption;
  onSortChange: (value: SortOption) => void;
}

/**
 * Search and sort controls component
 */
export const FilterControls: React.FC<FilterControlsProps> = ({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}) => {
  return (
    <div className="mb-8 flex flex-col sm:flex-row gap-4">
      <div className="flex-1">
        <SearchBar
          value={searchQuery}
          onChange={onSearchChange}
          placeholder={SEARCH_PLACEHOLDER}
        />
      </div>
      <div className="sm:w-64">
        <SortDropdown value={sortBy} onChange={onSortChange} />
      </div>
    </div>
  );
};
