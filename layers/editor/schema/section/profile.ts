// import { z } from 'zod'
import * as z from 'valibot'

import { defaultItem, defaultUrl, itemSchema, urlSchema } from '../common'

// Schema
export const profileSchema = z.object({
  ...itemSchema.entries,
  network: z.pipe(z.string(), z.minLength(1)),
  username: z.pipe(z.string(), z.minLength(1)),
  icon: z.pipe(
    z.string(),
    z.description(
      'Slug for the icon from https://simpleicons.org. For example, "github", "linkedin", etc.',
    ),
  ),
  url: urlSchema,
})

// Type
export type Profile = z.InferOutput<typeof profileSchema>

// Defaults
export const defaultProfile: Profile = {
  ...defaultItem,
  network: '',
  username: '',
  icon: '',
  url: defaultUrl,
}
