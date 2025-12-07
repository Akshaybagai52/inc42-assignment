import React from "react";
import {
  PAGE_TITLE,
  PAGE_DESCRIPTION,
} from "@/constants/layout/layoutConstants";

/**
 * Page header component with title and description
 */
export const PageHeader: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-3xl font-bold text-gray-900">{PAGE_TITLE}</h1>
        <p className="mt-1 text-sm text-gray-600">{PAGE_DESCRIPTION}</p>
      </div>
    </header>
  );
};
