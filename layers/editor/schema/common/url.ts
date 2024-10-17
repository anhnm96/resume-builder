// import { z } from "zod";
import * as z from 'valibot'

// Schema
export const urlSchema = z.object({
  label: z.string(),
  href: z.union([z.literal(''), z.pipe(z.string(), z.url())]),
})

// Type
export type URL = z.InferOutput<typeof urlSchema>

// Defaults
export const defaultUrl: URL = {
  label: '',
  href: '',
}
