// import { z } from 'zod'
import * as z from 'valibot'

import { defaultItem, itemSchema } from '../common'

// Schema
export const interestSchema = z.object({
  ...itemSchema.entries,
  name: z.pipe(z.string(), z.minLength(1)),
  keywords: z.optional(z.array(z.string()), []),
})

// Type
export type Interest = z.InferOutput<typeof interestSchema>

// Defaults
export const defaultInterest: Interest = {
  ...defaultItem,
  name: '',
  keywords: [],
}
