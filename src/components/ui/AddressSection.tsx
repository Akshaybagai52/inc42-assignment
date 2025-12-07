import React from "react";
import { UserWithStatus } from "@/types/user";
import { ADDRESS_TITLE } from "@/constants/ui/uiConstants";

interface AddressSectionProps {
  user: UserWithStatus;
}

/**
 * Address section for modal
 */
export const AddressSection: React.FC<AddressSectionProps> = ({ user }) => {
  return (
    <div className="mt-6 pt-6 border-t border-gray-200">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
        {ADDRESS_TITLE}
      </h3>
      <div className="bg-gray-50 rounded-lg p-4">
        <p className="text-gray-900">
          {user.address.suite}, {user.address.street}
        </p>
        <p className="text-gray-900">
          {user.address.city}, {user.address.zipcode}
        </p>
      </div>
    </div>
  );
};
