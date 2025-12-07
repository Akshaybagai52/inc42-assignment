import React from "react";
import Image from "next/image";
import {
  ADJUST_FILTERS_MESSAGE,
  NO_USERS_MESSAGE,
} from "@/constants/components/statesConstants";

/**
 * Empty state component shown when no users match filters
 */
export const EmptyState: React.FC = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
      <Image
        src="/icons/search.svg"
        alt=""
        width={64}
        height={64}
        className="text-gray-400 mx-auto mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {NO_USERS_MESSAGE}
      </h3>
      <p className="text-gray-600">{ADJUST_FILTERS_MESSAGE}</p>
    </div>
  );
};
