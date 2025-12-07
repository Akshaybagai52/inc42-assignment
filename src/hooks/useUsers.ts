'use client';

import { useState, useEffect } from 'react';
import { User, UserWithStatus, UserStatus } from '@/types/user';

interface UseUsersReturn {
  users: UserWithStatus[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

/**
 * Custom hook to fetch and manage users from JSONPlaceholder API
 * Handles loading states, errors, and adds random status to users
 */
export const useUsers = (): UseUsersReturn => {
  const [users, setUsers] = useState<UserWithStatus[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Assign random status to users for UI demonstration
   */
  const addStatusToUsers = (users: User[]): UserWithStatus[] => {
    return users.map(user => ({
      ...user,
      status: (Math.random() > 0.5 ? 'Active' : 'Inactive') as UserStatus,
    }));
  };

  /**
   * Fetch users from API
   */
  const fetchUsers = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.status} ${response.statusText}`);
      }

      const data: User[] = await response.json();
      const usersWithStatus = addStatusToUsers(data);
      
      setUsers(usersWithStatus);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Fetch users on mount
   */
  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    loading,
    error,
    refetch: fetchUsers,
  };
};
