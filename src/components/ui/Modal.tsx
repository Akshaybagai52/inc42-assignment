"use client";

import React, { useRef } from "react";
import Image from "next/image";
import type { UserWithStatus } from "@/types/user";
import { ModalHeader } from "./ModalHeader";
import { ContactInfoSection } from "./ContactInfoSection";
import { CompanyInfoSection } from "./CompanyInfoSection";
import { AddressSection } from "./AddressSection";
import { useModalEffects } from "@/hooks/useModalEffects";
import {
  CLOSE_MODAL_ARIA_LABEL,
  CLOSE_ALT_TEXT,
} from "@/constants/ui/uiConstants";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserWithStatus | null;
}

/**
 * Custom modal component for displaying detailed user information
 * Includes backdrop, focus trap, and keyboard accessibility
 */
export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, user }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Apply modal effects (keyboard and scroll management)
  useModalEffects({ isOpen, onClose });

  /**
   * Handle backdrop click to close modal
   */
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !user) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(0,0,0,0.4)] backdrop-blur-sm transition-opacity duration-300"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl transform transition-all duration-300 scale-100 max-h-[90vh] overflow-y-auto overflow-x-hidden border border-gray-100"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-400/10 to-orange-500/10 rounded-full blur-2xl pointer-events-none z-0" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-200 cursor-pointer z-20"
          aria-label={CLOSE_MODAL_ARIA_LABEL}
          type="button"
        >
          <Image
            src="/icons/close.svg"
            alt={CLOSE_ALT_TEXT}
            width={24}
            height={24}
          />
        </button>

        {/* Modal Content */}
        <div className="relative z-10 p-8">
          <ModalHeader user={user} />

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactInfoSection user={user} />
            <CompanyInfoSection user={user} />
          </div>

          <AddressSection user={user} />
        </div>
      </div>
    </div>
  );
};
