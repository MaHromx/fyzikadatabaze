# File Upload Manager

## Overview

A full-stack file upload application built with React, Express, and TypeScript. The application enables users to upload PDF and video files through a drag-and-drop interface, view all uploaded files, and download them. It features real-time upload progress tracking, a Material Design-inspired UI using shadcn/ui components, and supports both light and dark modes.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state management
- **UI Components**: shadcn/ui (Radix UI primitives with Tailwind CSS)
- **Styling**: Tailwind CSS with custom design tokens
- **Build Tool**: Vite

**Design System:**
- Follows Material Design principles for utility-focused interfaces
- Custom color palette with full light/dark mode support
- Typography using Inter for UI and JetBrains Mono for technical data
- Consistent spacing system based on Tailwind units (2, 4, 6, 8, 12, 16, 24)

**Key Frontend Patterns:**
- Component-based architecture with reusable UI primitives
- Custom hooks for mobile detection and toast notifications
- Client-side file upload with XMLHttpRequest for progress tracking
- Optimistic UI updates with automatic cache invalidation

### Backend Architecture

**Technology Stack:**
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **File Upload**: Multer middleware for multipart/form-data handling
- **Schema Validation**: Zod for runtime type checking
- **ORM**: Drizzle ORM configured (currently with in-memory storage, PostgreSQL-ready)

**Storage Strategy:**
- **File Storage**: Disk-based storage in `/uploads` directory with unique timestamped filenames
- **Metadata Storage**: Currently using in-memory storage (MemStorage class) with interface designed for easy database migration
- **File Size Limit**: 100MB per file
- **Supported File Types**: PDF and video formats (MP4, MPEG, QuickTime, AVI, MKV, WebM)

**API Design:**
- RESTful endpoints under `/api` prefix
- File operations: GET all files, POST upload, GET download, DELETE file
- Automatic request/response logging middleware
- Error handling with appropriate HTTP status codes

### Data Storage Solutions

**Current Implementation:**
- In-memory storage using Map data structure
- File metadata includes: id, filename, originalName, mimetype, size, uploadedAt
- Files sorted by upload date (newest first)

**Database-Ready Design:**
- Drizzle ORM configured with PostgreSQL dialect
- Storage interface (IStorage) abstracts data access layer
- Easy migration path from MemStorage to database implementation
- Schema defined with Zod for type safety and validation

### File Upload Flow

1. User drags files or clicks upload zone
2. Frontend validates file type client-side
3. XMLHttpRequest sends file with progress event tracking
4. Multer middleware processes multipart data on server
5. File saved to disk with unique filename
6. Metadata stored in storage layer
7. React Query cache automatically invalidated
8. UI updates with new file list

### UI Component Architecture

**shadcn/ui Integration:**
- "New York" style variant with custom theming
- Component aliases for clean imports (@/components, @/lib, @/hooks)
- Comprehensive component library including buttons, cards, dialogs, forms, and data display components
- Consistent styling with CSS variables for easy theme customization

**Responsive Design:**
- Mobile-first approach with custom mobile detection hook
- Tailwind breakpoints for adaptive layouts
- Touch-friendly interactions for mobile devices

## External Dependencies

### Core Dependencies

**Frontend Libraries:**
- `@tanstack/react-query`: Server state management and caching
- `wouter`: Lightweight routing (< 2KB alternative to React Router)
- `react-hook-form` + `@hookform/resolvers`: Form state management with Zod validation
- `date-fns`: Date formatting and manipulation

**UI Component Libraries:**
- `@radix-ui/*`: Unstyled, accessible UI primitives (20+ components)
- `lucide-react`: Icon library
- `class-variance-authority`: Type-safe component variants
- `tailwindcss`: Utility-first CSS framework
- `clsx` + `tailwind-merge`: Conditional className composition

**Backend Libraries:**
- `express`: Web application framework
- `multer`: Multipart/form-data file upload handling
- `drizzle-orm`: Type-safe ORM
- `@neondatabase/serverless`: PostgreSQL driver for serverless environments
- `zod`: Schema validation and type inference
- `drizzle-zod`: Bridge between Drizzle and Zod schemas

### Build Tools

- `vite`: Frontend build tool and dev server
- `tsx`: TypeScript execution for Node.js
- `esbuild`: JavaScript bundler for production server build
- `drizzle-kit`: Database migrations and schema management

### Replit-Specific Integrations

- `@replit/vite-plugin-runtime-error-modal`: Development error overlay
- `@replit/vite-plugin-cartographer`: Code navigation (development only)
- `@replit/vite-plugin-dev-banner`: Development environment banner

### Configuration Files

- `tailwind.config.ts`: Custom theme with design tokens for colors, spacing, and typography
- `vite.config.ts`: Build configuration with path aliases and plugin setup
- `drizzle.config.ts`: Database connection and migration settings
- `tsconfig.json`: TypeScript compiler options with path mapping
- `components.json`: shadcn/ui configuration for component generation