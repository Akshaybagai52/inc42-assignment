'use client';

import { useEffect } from 'react';

interface UseModalEffectsProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Custom hook for modal effects (keyboard and scroll management)
 */
export const useModalEffects = ({ isOpen, onClose }: UseModalEffectsProps) => {
  /**
   * Handle escape key press to close modal
   */
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  /**
   * Prevent body scroll when modal is open
   */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
};
