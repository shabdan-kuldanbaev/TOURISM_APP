# Architecture Documentation

## 1. FSD Layers Explanation

- **Shared**: Reusable code with no business logic (ui, lib, config, types, api)
- **Entities**: Business entities with model, ui, api, lib subdirectories
- **Features**: User interactions with model, ui, api subdirectories
- **Widgets**: Composite blocks with ui and model subdirectories
- **Pages**: Full page compositions

## 2. Import Rules

- Lower layers CANNOT import from upper layers
- **Shared** → imported by any layer
- **Entities** → import from Shared only
- **Features** → import from Shared and Entities
- **Widgets** → import from Shared, Entities, and Features
- **Pages** → import from all layers
- **Sanity (client, utils)** → imported through the Shared layer
- **Sanity (schemas)** → defined in `src/shared/schemas` and used by entities

## 3. Naming Conventions

- **Components**: PascalCase
- **Files**: kebab-case
- **Directories**: kebab-case
- **Constants**: UPPER_SNAKE_CASE

## 4. Sanity Integration

- All Sanity client usage should go through `src/shared/api/sanity.ts`
- Sanity schemas are defined in `src/shared/schemas/`. As entities are created, their corresponding schemas can be co-located within the entity folder (e.g. `src/entities/article/article.schema.ts`).
- Content fetching should be organized by entity in `src/entities/*/api/`
