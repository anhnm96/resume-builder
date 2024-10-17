// import { z } from "zod";
import * as z from 'valibot'

import { defaultItem, itemSchema } from '../common'

// Schema
export const skillSchema = z.object({
  ...itemSchema.entries,
  name: z.string(),
  description: z.string(),
  level: z.optional(z.pipe(z.number(), z.minValue(0), z.maxValue(5)), 1),
  keywords: z.optional(z.array(z.string()), []),
})

// Type
export type Skill = z.InferOutput<typeof skillSchema>

// Defaults
export const defaultSkill: Skill = {
  ...defaultItem,
  name: '',
  description: '',
  level: 1,
  keywords: [],
}
