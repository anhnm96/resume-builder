import { nanoid } from 'nanoid'
// import { z } from 'zod'
import * as z from 'valibot'

export const idSchema = z.optional(z.pipe(
  z.string(),
  z.nanoid(),
  z.description('Unique identifier for the item in nanoid format'),
), nanoid())
