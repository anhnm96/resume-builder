// import { z } from "zod";
import * as z from 'valibot'

import { defaultItem, defaultUrl, itemSchema, urlSchema } from '../common'

// Schema
export const customSectionSchema = z.object({
  ...itemSchema.entries,
  name: z.string(),
  description: z.string(),
  date: z.string(),
  location: z.string(),
  summary: z.string(),
  keywords: z.optional(z.array(z.string()), []),
  url: urlSchema,
})

// Type
export type CustomSection = z.InferOutput<typeof customSectionSchema>

// Defaults
export const defaultCustomSection: CustomSection = {
  ...defaultItem,
  name: '',
  description: '',
  date: '',
  location: '',
  summary: '',
  keywords: [],
  url: defaultUrl,
}
