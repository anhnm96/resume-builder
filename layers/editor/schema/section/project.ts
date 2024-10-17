// import { z } from 'zod'
import * as z from 'valibot'

import { defaultItem, defaultUrl, itemSchema, urlSchema } from '../common'

// Schema
export const projectSchema = z.object({
  ...itemSchema.entries,
  name: z.pipe(z.string(), z.minLength(1)),
  description: z.string(),
  date: z.string(),
  summary: z.string(),
  keywords: z.optional(z.array(z.string()), []),
  url: urlSchema,
})

// Type
export type Project = z.InferOutput<typeof projectSchema>

// Defaults
export const defaultProject: Project = {
  ...defaultItem,
  name: '',
  description: '',
  date: '',
  summary: '',
  keywords: [],
  url: defaultUrl,
}
