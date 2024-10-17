// import { z } from "zod";
import * as z from 'valibot'

import { defaultItem, defaultUrl, itemSchema, urlSchema } from '../common'

// Schema
export const referenceSchema = z.object({
  ...itemSchema.entries,
  name: z.pipe(z.string(), z.minLength(1)),
  description: z.string(),
  summary: z.string(),
  url: urlSchema,
})

// Type
export type Reference = z.InferOutput<typeof referenceSchema>

// Defaults
export const defaultReference: Reference = {
  ...defaultItem,
  name: '',
  description: '',
  summary: '',
  url: defaultUrl,
}
