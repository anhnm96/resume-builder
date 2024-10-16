import { nanoid } from 'nanoid'
import { z } from 'zod'

export const idSchema = z
  .string()
  .nanoid()
  .default(nanoid())
  .describe('Unique identifier for the item in nanoid format')
