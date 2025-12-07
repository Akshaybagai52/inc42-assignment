import React from "react";
import { UserCard } from "@/components/cards/UserCard";
import { UserWithStatus } from "@/types/user";
import { SHOWING_USERS_TEXT } from "@/constants/layout/layoutConstants";

interface UserGridProps {
  users: UserWithStatus[];
  allUsersCount: number;
  onCardClick: (user: UserWithStatus) => void;
}

/**
 * User cards grid with results count
 */
export const UserGrid: React.FC<UserGridProps> = ({
  users,
  allUsersCount,
  onCardClick,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} onClick={onCardClick} />
        ))}
      </div>

      <div className="mt-8 text-center text-sm text-gray-600">
        {SHOWING_USERS_TEXT(users.length, allUsersCount)}
      </div>
    </>
  );
};
