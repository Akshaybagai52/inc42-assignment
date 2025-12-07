import React from "react";
import Image from "next/image";
import type { UserWithStatus } from "@/types/user";
import {
  CONTACT_INFORMATION_TITLE,
  EMAIL_LABEL,
  PHONE_LABEL,
  WEBSITE_LABEL,
} from "@/constants/ui/uiConstants";

interface ContactInfoSectionProps {
  user: UserWithStatus;
}

/**
 * Contact information section for modal
 */
export const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({
  user,
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
        {CONTACT_INFORMATION_TITLE}
      </h3>

      {/* Email */}
      <div>
        <p className="text-xs text-gray-500 mb-1">{EMAIL_LABEL}</p>
        <a
          href={`mailto:${user.email}`}
          className="text-blue-600 hover:text-blue-800 hover:underline break-all"
        >
          {user.email}
        </a>
      </div>

      {/* Phone */}
      <div>
        <p className="text-xs text-gray-500 mb-1">{PHONE_LABEL}</p>
        <a
          href={`tel:${user.phone}`}
          className="text-blue-600 hover:text-blue-800 hover:underline"
        >
          {user.phone}
        </a>
      </div>

      {/* Website */}
      <div>
        <p className="text-xs text-gray-500 mb-1">{WEBSITE_LABEL}</p>
        <a
          href={`https://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 hover:underline break-all inline-flex items-center gap-1"
        >
          {user.website}
          <Image
            src="/icons/external-link.svg"
            alt="External link"
            width={12}
            height={12}
          />
        </a>
      </div>
    </div>
  );
};
