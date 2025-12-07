# User Directory Application - Inc42 Assignment

A modern, fully-featured user directory application built with Next.js, TypeScript, and Tailwind CSS.

## 🎯 Features

### Part 1 - Static Card View ✅
- Responsive card grid layout (Dribbble-inspired)
- 4 cards per row on desktop
- 2 cards per row on tablet
- 1 card per row on mobile
- User cards display:
  - Avatar placeholder
  - Name
  - Company name (designation)
  - Email
  - City location
  - Status badge (Active/Inactive)
  - View Details button

### Part 2 - Dynamic API Integration ✅
- Fetches users from JSONPlaceholder API
- Real-time search by name
- Sort by Name or Company
- Loading skeleton components
- Error handling with retry functionality
- Clean error states

### Bonus Features ✅
- Modal with detailed user information:
  - Phone
  - Website
  - Full address (street, suite, city, zipcode)
  - Company details
- Keyboard accessibility (ESC to close)
- Click outside to close
- Smooth animations

## 📁 Project Structure

```
inc42-assignment/
├── src/
│   ├── types/
│   │   └── user.ts              # TypeScript interfaces for User data
│   ├── utils/
│   │   └── sortUtils.ts         # Sorting and filtering utilities
│   ├── hooks/
│   │   └── useUsers.ts          # Custom hook for fetching users
│   ├── components/
│   │   ├── cards/
│   │   │   ├── UserCard.tsx     # Reusable user card component
│   │   │   └── UserCardSkeleton.tsx  # Loading skeleton
│   │   └── ui/
│   │       ├── SearchBar.tsx    # Search input component
│   │       ├── SortDropdown.tsx # Sort dropdown component
│   │       └── Modal.tsx        # User details modal
│   └──
├── app/
│   ├── page.tsx                 # Main page component
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
└── ...config files
```

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: JSONPlaceholder (REST API)
- **State Management**: React hooks (useState, useMemo)
- **HTTP Client**: Native Fetch API

## 🎨 Design Principles

- **Clean Code**: Follows SRP, modular architecture
- **Reusability**: All UI components are fully reusable
- **Performance**: useMemo for expensive computations
- **Accessibility**: ARIA labels, keyboard navigation
- **Responsive**: Mobile-first design approach
- **Type Safety**: Full TypeScript coverage

## 🏗️ Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Component Documentation

### UserCard
Displays user information in a card format with hover effects and smooth transitions.

**Props:**
- `user: UserWithStatus` - User data object
- `onClick: (user: UserWithStatus) => void` - Click handler

### UserCardSkeleton
Loading placeholder matching the UserCard layout with pulse animation.

### SearchBar
Real-time search input with clear button and search icon.

**Props:**
- `value: string` - Current search query
- `onChange: (value: string) => void` - Change handler
- `placeholder?: string` - Optional placeholder text

### SortDropdown
Dropdown for sorting users by different criteria.

**Props:**
- `value: SortOption` - Current sort option
- `onChange: (value: SortOption) => void` - Change handler

### Modal
Full-featured modal for displaying detailed user information.

**Props:**
- `isOpen: boolean` - Modal visibility state
- `onClose: () => void` - Close handler
- `user: UserWithStatus | null` - User to display

### useUsers Hook
Custom hook for fetching and managing user data.

**Returns:**
- `users: UserWithStatus[]` - Array of users
- `loading: boolean` - Loading state
- `error: string | null` - Error message if any
- `refetch: () => Promise<void>` - Refetch function

## 🎯 Key Features Implementation

### Real-time Search
- Filters users by name as you type
- Case-insensitive search
- Clear button to reset search

### Sorting
- Sort by Name (alphabetical)
- Sort by Company (alphabetical)
- Persistent sort order

### Loading States
- Skeleton loaders during initial fetch
- Smooth transitions

### Error Handling
- User-friendly error messages
- Retry functionality
- No crash on API failure

### Responsive Design
- Desktop: 4 columns
- Tablet: 2 columns
- Mobile: 1 column
- Fluid typography and spacing

## 🔧 Customization

### Adding New Sort Options
Edit `src/types/user.ts` to add new sort options to `SortOption` type, then update `src/utils/sortUtils.ts` to implement the sorting logic.

### Styling
All styles use Tailwind CSS utility classes. Customize colors, spacing, and other design tokens in `tailwind.config.ts`.

## 📊 Performance Optimizations

- **useMemo**: Prevents unnecessary re-computations of filtered/sorted data
- **Lazy Loading**: Modal content only renders when open
- **Optimized Re-renders**: Proper React key usage in lists
- **Debouncing**: Consider adding for search (future enhancement)

## 🧪 Best Practices Followed

✅ TypeScript strict mode enabled
✅ Component composition and reusability
✅ Separation of concerns (hooks, utils, components)
✅ Accessibility attributes (ARIA labels, keyboard navigation)
✅ Clean code with inline documentation
✅ Error boundaries and fallback UI
✅ Responsive and mobile-first design
✅ Semantic HTML
✅ Modern React patterns (hooks, functional components)

## 📄 License

This project is created as part of an assignment for Inc42.

## 👨‍💻 Author

Created with ❤️ following industry best practices and modern web development standards.
