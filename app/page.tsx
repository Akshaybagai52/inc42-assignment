"use client";

import React, { useState, useMemo } from "react";
import { UserWithStatus, SortOption } from "@/types/user";
import { useUsers } from "@/hooks/useUsers";
import { sortUsers, filterUsersByName } from "@/utils/sortUtils";
import { Modal } from "@/components/ui/Modal";
import { PageHeader } from "@/components/layout/PageHeader";
import { FilterControls } from "@/components/layout/FilterControls";
import { UserGrid } from "@/components/layout/UserGrid";
import { LoadingState } from "@/components/states/LoadingState";
import { ErrorState } from "@/components/states/ErrorState";
import { EmptyState } from "@/components/states/EmptyState";

export default function Home() {
  // Fetch users from API
  const { users, loading, error, refetch } = useUsers();

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortOption>("name");
  const [selectedUser, setSelectedUser] = useState<UserWithStatus | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  /**
   * Filter and sort users based on search query and sort option
   * Uses useMemo for performance optimization
   */
  const filteredAndSortedUsers = useMemo(() => {
    const filtered = filterUsersByName(users, searchQuery);
    return sortUsers(filtered, sortBy);
  }, [users, searchQuery, sortBy]);

  /**
   * Handle card click to open modal
   */
  const handleCardClick = (user: UserWithStatus) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  /**
   * Handle modal close
   */
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedUser(null), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <PageHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FilterControls
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {loading && <LoadingState />}
        {error && !loading && <ErrorState error={error} onRetry={refetch} />}
        {!loading && !error && filteredAndSortedUsers.length === 0 && (
          <EmptyState />
        )}
        {!loading && !error && filteredAndSortedUsers.length > 0 && (
          <UserGrid
            users={filteredAndSortedUsers}
            allUsersCount={users.length}
            onCardClick={handleCardClick}
          />
        )}
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        user={selectedUser}
      />
    </div>
  );
}
