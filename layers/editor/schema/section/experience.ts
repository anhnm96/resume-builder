// import { z } from "zod";
import * as z from 'valibot'

import { defaultItem, defaultUrl, itemSchema, urlSchema } from '../common'

// Schema
export const experienceSchema = z.object({
  ...itemSchema.entries,
  company: z.pipe(z.string(), z.minLength(1)),
  position: z.string(),
  location: z.string(),
  date: z.string(),
  summary: z.string(),
  url: urlSchema,
})

// Type
export type Experience = z.InferOutput<typeof experienceSchema>

// Defaults
export const defaultExperience: Experience = {
  ...defaultItem,
  company: '',
  position: '',
  location: '',
  date: '',
  summary: '',
  url: defaultUrl,
}
