// import { z } from "zod";
import * as z from 'valibot'

import { idSchema } from './id'

// Schema
export const itemSchema = z.object({
  id: idSchema,
  visible: z.boolean(),
})

// Type
export type Item = z.InferOutput<typeof itemSchema>

// Defaults
export const defaultItem: Item = {
  id: '',
  visible: true,
}
