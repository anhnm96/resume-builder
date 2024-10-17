// import { z } from "zod";
import * as z from 'valibot'

import { defaultItem, defaultUrl, itemSchema, urlSchema } from '../common'

// Schema
export const educationSchema = z.object({
  ...itemSchema.entries,
  institution: z.pipe(z.string(), z.minLength(1)),
  studyType: z.string(),
  area: z.string(),
  score: z.string(),
  date: z.string(),
  summary: z.string(),
  url: urlSchema,
})

// Type
export type Education = z.InferOutput<typeof educationSchema>

// Defaults
export const defaultEducation: Education = {
  ...defaultItem,
  id: '',
  institution: '',
  studyType: '',
  area: '',
  score: '',
  date: '',
  summary: '',
  url: defaultUrl,
}
