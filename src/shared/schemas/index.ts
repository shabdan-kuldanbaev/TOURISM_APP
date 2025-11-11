import type { SchemaTypeDefinition } from 'sanity';
import { articleSchema } from '@/entities/article/model/article.schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [articleSchema],
};
