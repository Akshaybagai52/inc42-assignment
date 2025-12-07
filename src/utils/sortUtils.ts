import { UserWithStatus, SortOption } from '@/types/user';

/**
 * Sort users by the specified criteria
 * @param users - Array of users to sort
 * @param sortBy - Sort criterion (name or company)
 * @returns Sorted array of users
 */
export const sortUsers = (
  users: UserWithStatus[],
  sortBy: SortOption
): UserWithStatus[] => {
  const sortedUsers = [...users];

  switch (sortBy) {
    case 'name':
      return sortedUsers.sort((a, b) => 
        a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
      );
    
    case 'company':
      return sortedUsers.sort((a, b) => 
        a.company.name.localeCompare(b.company.name, undefined, { sensitivity: 'base' })
      );
    
    default:
      return sortedUsers;
  }
};

/**
 * Filter users by search query (searches in name)
 * @param users - Array of users to filter
 * @param query - Search query string
 * @returns Filtered array of users
 */
export const filterUsersByName = (
  users: UserWithStatus[],
  query: string
): UserWithStatus[] => {
  if (!query.trim()) {
    return users;
  }

  const lowerQuery = query.toLowerCase().trim();
  
  return users.filter(user =>
    user.name.toLowerCase().includes(lowerQuery)
  );
};
