# Project Initialization Guide

## Overview
This document provides instructions for initializing a Next.js project with TypeScript, following Feature-Sliced Design architecture. This guide covers the initial setup and the current state of the project, including some pre-existing entities and widgets.

**IMPORTANT: All initialization should be done in the current root directory where this command is executed. Do not create a new project subdirectory.**

## Technology Stack
- **Language**: TypeScript
- **Framework**: Next.js (latest, App Router)
- **Linter/Formatter**: Biome
- **UI Kit**: shadcn/ui
- **CMS**: Sanity CMS
- **CSS Framework**: Tailwind CSS (latest)
- **Architecture**: Feature-Sliced Design (FSD)
- **Bundler**: Webpack

## Critical Rules
⚠️ **NEVER run these commands during development:**
- `npm run dev`
- `npm run start`
- `next dev`
- `next start`

These commands will freeze the AI assistant. Only run linting and formatting commands after development is complete.

## Project Initialization Steps

### 1. Initialize Next.js Project
Initialize Next.js in the current directory (not in a subdirectory). Use TypeScript, Tailwind CSS, and App Router. Use import alias `@/*` and disable src directory.

**Important:** Initialize directly in the current working directory, not in a new folder.

### 2. Install and Configure Biome
Install Biome as dev dependency and initialize it. Configure `biome.json` in the root directory with the following settings:

**Key configurations:**
- Enable VCS integration with Git
- Ignore: `node_modules`, `.next`, `out`, `dist`, `build`, `.sanity`, `public`
- Formatter: 2 space indentation, 100 line width, LF line endings
- Enable organize imports
- Enable linter with recommended rules
- JavaScript: single quotes, double quotes for JSX, semicolons, ES5 trailing commas
- Additional rules:
    - Warn on excessive cognitive complexity
    - Allow forEach
    - Error on missing import types
    - Error on missing Node.js import protocol
    - Warn on explicit any

Remove ESLint configuration files if present.

Add Biome scripts to `package.json`:
- `lint`: Check all files
- `lint:fix`: Check and fix all files
- `format`: Format all files

### 3. Install and Configure shadcn/ui
Initialize shadcn/ui in the root directory with default style and CSS variables enabled. This will create `components.json` and install necessary dependencies. Accept all default configurations including Tailwind settings.

### 4. Configure Webpack
The `next.config.ts` file is already present in the root directory. It can be updated with custom Webpack configuration for future customizations.

### 5. Setup Sanity CMS

**Initialize Sanity with existing project:**
Use the following command in the root directory to connect to the existing Sanity project. This will create a `sanity` folder which is then refactored.
```bash
npm create sanity@latest -- --project r0p5o66x --dataset production --template clean
```
After running the init command, the generated `sanity` directory's contents are moved into the `src` folder to better align with the FSD architecture. The original `sanity` directory in the root is then removed.

**FSD-Integrated Sanity Structure:**
- **Configuration:** `sanity/env.ts` is moved to `src/shared/config/sanity.ts`.
- **API Client:** `sanity/lib/client.ts` is moved to `src/shared/api/sanity-client.ts`.
- **Utilities:** `sanity/lib/image.ts` & `live.ts` are moved to `src/shared/lib/sanity/`.
- **Schemas:** The `sanity/schemas` directory is moved to `src/shared/schemas/`.
- **Studio Internals:** `sanity/structure.ts` is moved to `src/shared/studio/`.

The root `sanity.config.ts` and `sanity.cli.ts` must be updated to point to these new file locations.

**Required environment variables in `.env.local` (in root directory):**
```
NEXT_PUBLIC_SANITY_PROJECT_ID=r0p5o66x
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
```

**Install Next.js Sanity integration:**
Install `next-sanity` package for seamless Next.js integration.

### 6. Setup Feature-Sliced Design Architecture

Create the following directory structure **in the root directory**:
```
app/                          # Next.js App Router
src/
  app/                        # Application-level components and providers
  shared/
    ui/                       # Shared UI components (shadcn/ui exports)
    lib/                      # Utility functions
    config/                   # Application configuration
    types/                    # Shared TypeScript types
    api/                      # API client configurations
    schemas/                  # Sanity content schemas
    studio/                   # Sanity Studio specific files
  entities/                   # Business entities (e.g., article)
  features/                   # User features
  widgets/                    # Composite blocks (e.g., Article, Contact, Header)
```

**Create barrel exports (`index.ts`) for each layer:**
- `src/shared/ui/index.ts`
- `src/shared/lib/index.ts`
- `src/shared/config/index.ts`
- `src/shared/types/index.ts`
- `src/shared/api/index.ts`

**Important Note on Barrel Files:** The `entities`, `features`, and `widgets` *layers themselves* should *not* contain a root `index.ts` file. Instead, only individual items within these layers (e.g., `src/entities/article/index.ts`, `src/features/some-feature/index.ts`, `src/widgets/some-widget/index.ts`) should have a barrel `index.ts` file at their root directory. Sub-segments (e.g., `model`, `ui`, `api` within an entity/feature/widget) should *not* contain their own `index.ts` files. All exports from these sub-segments should be re-exported through the root `index.ts` of the individual item (entity/feature/widget).

**Essential shared utilities:**

`src/shared/config/index.ts`:
- Export config object with Sanity settings:
    - projectId: `r0p5o66x`
    - dataset: `production`
    - apiVersion: `2024-01-01`

`src/shared/lib/utils.ts`:
- Create `cn` utility function using clsx and tailwind-merge for className merging

`src/shared/lib/index.ts`:
- Export `cn` utility

`src/shared/api/sanity.ts`:
- Re-export Sanity client from `src/shared/api/sanity-client.ts`
- Export any Sanity-related API helpers

### 7. Update TypeScript Configuration

Update `tsconfig.json` in the root directory with:
- Target: ES2020
- Strict mode enabled
- Path aliases for FSD layers:
    - `@/*` → `./src/*`
    - `@/app/*` → `./src/app/*`
    - `@/shared/*` → `./src/shared/*`
    - `@/entities/*` → `./src/entities/*`
    - `@/features/*` → `./src/features/*`
    - `@/widgets/*` → `./src/widgets/*`
    - `@/shared/studio/*` → `./src/shared/studio/*`
    - `@/shared/schemas/*` → `./src/shared/schemas/*`

### 8. Create Base App Structure

**`app/layout.tsx`:**
- Import Inter font from next/font/google
- Export metadata (title, description)
- Create RootLayout with HTML lang="en"
- Apply font className to body

**`app/page.tsx`:**
- Create minimal home page component
- Display "Project Initialized" heading
- Use Tailwind classes for centering

### 9. Create Documentation Files

**`README.md` in root directory should include:**
- Project name and description
- Architecture overview (FSD methodology)
- Directory structure explanation
- Development section with critical warning about not running dev servers
- Available commands (build, lint, lint:fix, format)
- Complete tech stack list
- Sanity project information (Project ID: r0p5o66x, Dataset: production)

**`docs/ARCHITECTURE.md` in root directory should include:**

1. **FSD Layers explanation:**
    - Shared: Reusable code with no business logic (ui, lib, config, types, api)
    - Entities: Business entities with model, ui, api, lib subdirectories
    - Features: User interactions with model, ui, api subdirectories
    - Widgets: Composite blocks with ui and model subdirectories
    - Pages: Full page compositions

2. **Import Rules:**
    - Lower layers CANNOT import from upper layers
    - Shared → imported by any layer
    - Entities → import from Shared only
    - Features → import from Shared and Entities
    - Widgets → import from Shared, Entities, and Features
    - Pages → import from all layers
    - Sanity (client, utils) → imported through the Shared layer
    - Sanity (schemas) → defined in `src/shared/schemas` and used by entities

3. **Naming Conventions:**
    - Components: PascalCase
    - Files: kebab-case
    - Directories: kebab-case
    - Constants: UPPER_SNAKE_CASE

4. **Sanity Integration:**
    - All Sanity client usage should go through `src/shared/api/sanity.ts`
    - Sanity schemas are defined in `src/shared/schemas/`. As entities are created, their corresponding schemas can be co-located within the entity folder (e.g. `src/entities/article/article.schema.ts`).
    - Content fetching should be organized by entity in `src/entities/*/api/`

### 10. Configure Git Ignore

Ensure `.gitignore` in root directory includes:
- Node modules, package manager files
- Next.js build outputs (`.next/`, `out/`)
- Environment files (`.env*.local`, `.env`)
- Sanity files (`.sanity`)
- TypeScript build info
- OS files (.DS_Store)

### 11. Verification Steps

After initialization, verify the setup by:
1. Installing all dependencies
2. Running linter to check for issues
3. Building the project to verify TypeScript compilation

## Final Checklist

Ensure all of the following are completed **in the root directory**:
- ✅ Next.js with TypeScript initialized in current directory
- ✅ Biome configured for linting and formatting
- ✅ shadcn/ui installed and configured with default Tailwind settings
- ✅ Sanity CMS connected to project r0p5o66x
- ✅ next-sanity package installed
- ✅ Sanity client configured in shared API layer
- ✅ FSD directory structure created with all layers, including initial entities and widgets
- ✅ TypeScript path aliases configured (including Sanity)
- ✅ Base app files created (layout, page)
- ✅ Shared utilities created (cn, config, sanity client)
- ✅ Documentation files created
- ✅ Git ignore configured
- ✅ Environment variables set up

## Next Steps

After initialization is complete:
1. Define your Sanity schemas in `src/shared/schemas/`
2. Create entities based on your Sanity content models
3. Build API functions in entity layers for fetching Sanity data
4. Build features for user interactions
5. Compose widgets from entities and features
6. Create pages using all layers

## Sanity CMS Integration Pattern

When working with Sanity content:

**Schema Definition (src/shared/schemas/ or co-located within entities):**
- Define content types in Sanity Studio
- Export schemas from barrel file (or directly from entity if co-located)
- Example: `src/entities/article/article.schema.ts`

**Entity Layer (src/entities/):**
- Create entity for each Sanity content type
- Define TypeScript types matching Sanity schemas
- Create API functions for fetching/mutating data
- Example structure:
```
  src/entities/article/
    types/index.ts       # TypeScript types
    api/index.ts         # Sanity queries
    model/index.ts       # Business logic
    ui/ArticleCard.tsx   # UI components
```

**Data Fetching:**
- Use server components for data fetching when possible
- Fetch data at page level or in server components
- Pass data down to client components as props

## Architecture Principles to Follow

**Layer Independence:**
- Each layer should be independent and reusable
- No circular dependencies between layers
- Clear separation of concerns

**Public API:**
- Each feature/entity/widget exports through barrel file (index.ts)
- Internal implementation details remain private
- Only expose what's necessary for other layers
- **Barrel File Rule:** For entities, features, and widgets, the barrel `index.ts` file should only be present at their root directory (e.g., `src/entities/article/index.ts`). Sub-segments (e.g., `model`, `ui`, `api` within an entity) should *not* contain their own `index.ts` files. All exports from these sub-segments should be re-exported through the root `index.ts` of the entity/feature/widget.
- **Barrel File Content:** Barrel files should only re-export essential, explicitly named modules. Avoid using wildcard exports (`export * from '...'`) to prevent unintended exposure of internal modules and to maintain clear dependency graphs.

**Scalability:**
- Structure allows adding new features without affecting existing code
- Easy to locate and modify specific functionality
- Clear ownership and boundaries

**Sanity Best Practices:**
- Centralize Sanity client configuration in shared layer
- Keep Sanity-specific code in API layers of entities
- Use TypeScript types that match Sanity schemas
- Leverage Next.js server components for data fetching

Remember: Only run `npm run lint` and `npm run format` during AI-assisted development. Never run dev servers as they will freeze the AI assistant.
