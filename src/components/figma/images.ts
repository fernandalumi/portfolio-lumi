import type { ImageMetadata } from 'astro';

// Every image exported from the case pages, indexed by its key (file name without extension)
const modules = import.meta.glob<{ default: ImageMetadata }>('/src/assets/cases/**/*.webp', { eager: true });

export const caseImages: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => [path.split('/').pop()!.replace(/\.webp$/, ''), mod.default]),
);
