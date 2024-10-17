// import { z } from 'zod'
import * as z from 'valibot'

import { defaultItem, itemSchema } from '../common'

// Schema
export const languageSchema = z.object({
  ...itemSchema.entries,
  name: z.pipe(z.string(), z.minLength(1)),
  description: z.string(),
  level: z.optional(z.pipe(z.number(), z.minValue(0), z.maxValue(5)), 1),
})

// Type
export type Language = z.InferOutput<typeof languageSchema>

// Defaults
export const defaultLanguage: Language = {
  ...defaultItem,
  name: '',
  description: '',
  level: 1,
}
