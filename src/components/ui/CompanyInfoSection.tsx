import React from "react";
import type { UserWithStatus } from "@/types/user";
import {
  COMPANY_INFORMATION_TITLE,
  COMPANY_LABEL,
  CATCHPHRASE_LABEL,
  BUSINESS_LABEL,
} from "@/constants/ui/uiConstants";

interface CompanyInfoSectionProps {
  user: UserWithStatus;
}

export const CompanyInfoSection: React.FC<CompanyInfoSectionProps> = ({
  user,
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
        {COMPANY_INFORMATION_TITLE}
      </h3>

      {/* Company Name */}
      <div>
        <p className="text-xs text-gray-500 mb-1">{COMPANY_LABEL}</p>
        <p className="text-gray-900 font-medium">{user.company.name}</p>
      </div>

      {/* Company Catchphrase */}
      <div>
        <p className="text-xs text-gray-500 mb-1">{CATCHPHRASE_LABEL}</p>
        <p className="text-gray-700 italic">
          &ldquo;{user.company.catchPhrase}&rdquo;
        </p>
      </div>

      {/* Business */}
      <div>
        <p className="text-xs text-gray-500 mb-1">{BUSINESS_LABEL}</p>
        <p className="text-gray-700">{user.company.bs}</p>
      </div>
    </div>
  );
};
