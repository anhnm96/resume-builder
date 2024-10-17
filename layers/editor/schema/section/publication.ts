// import { z } from "zod";
import * as z from 'valibot'

import { defaultItem, defaultUrl, itemSchema, urlSchema } from '../common'

// Schema
export const publicationSchema = z.object({
  ...itemSchema.entries,
  name: z.pipe(z.string(), z.minLength(1)),
  publisher: z.string(),
  date: z.string(),
  summary: z.string(),
  url: urlSchema,
})

// Type
export type Publication = z.InferOutput<typeof publicationSchema>

// Defaults
export const defaultPublication: Publication = {
  ...defaultItem,
  name: '',
  publisher: '',
  date: '',
  summary: '',
  url: defaultUrl,
}
