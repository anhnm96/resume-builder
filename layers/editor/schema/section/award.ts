// import { z } from 'zod'
import * as z from 'valibot'

import { defaultItem, defaultUrl, itemSchema, urlSchema } from '../common'

// Schema
export const awardSchema = z.object({
  ...itemSchema.entries,
  title: z.pipe(z.string(), z.minLength(1)),
  awarder: z.string(),
  date: z.string(),
  summary: z.string(),
  url: urlSchema,
})

// Type
export type Award = z.InferOutput<typeof awardSchema>

// Defaults
export const defaultAward: Award = {
  ...defaultItem,
  title: '',
  awarder: '',
  date: '',
  summary: '',
  url: defaultUrl,
}
