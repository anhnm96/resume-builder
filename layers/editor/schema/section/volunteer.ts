// import { z } from "zod";
import * as z from 'valibot'

import { defaultItem, defaultUrl, itemSchema, urlSchema } from '../common'

// Schema
export const volunteerSchema = z.object({
  ...itemSchema.entries,
  organization: z.pipe(z.string(), z.minLength(1)),
  position: z.string(),
  location: z.string(),
  date: z.string(),
  summary: z.string(),
  url: urlSchema,
})

// Type
export type Volunteer = z.InferOutput<typeof volunteerSchema>

// Defaults
export const defaultVolunteer: Volunteer = {
  ...defaultItem,
  organization: '',
  position: '',
  location: '',
  date: '',
  summary: '',
  url: defaultUrl,
}
