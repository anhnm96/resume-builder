// import { z } from "zod";
import * as z from 'valibot'

import { defaultItem, defaultUrl, itemSchema, urlSchema } from '../common'

// Schema
export const certificationSchema = z.object({
  ...itemSchema.entries,
  name: z.pipe(z.string(), z.minLength(1)),
  issuer: z.string(),
  date: z.string(),
  summary: z.string(),
  url: urlSchema,
})

// Type
export type Certification = z.InferOutput<typeof certificationSchema>

// Defaults
export const defaultCertification: Certification = {
  ...defaultItem,
  name: '',
  issuer: '',
  date: '',
  summary: '',
  url: defaultUrl,
}
