import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'r0p5o66x',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});
