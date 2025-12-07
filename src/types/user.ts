/**
 * User type definitions based on JSONPlaceholder API response
 */

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

/**
 * Sorting options for user list
 */
export type SortOption = 'name' | 'company';

/**
 * User status for display purposes
 * Randomly assigned for UI demonstration
 */
export type UserStatus = 'Active' | 'Inactive';

/**
 * Extended user type with UI-specific properties
 */
export interface UserWithStatus extends User {
  status: UserStatus;
}
