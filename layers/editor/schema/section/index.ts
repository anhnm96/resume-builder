// import { z } from 'zod'
import * as z from 'valibot'
import { idSchema } from '../common'
import { awardSchema } from './award'
import { certificationSchema } from './certification'
import { customSectionSchema } from './custom-section'
import { educationSchema } from './education'
import { experienceSchema } from './experience'
import { interestSchema } from './interest'
import { languageSchema } from './language'
import { profileSchema } from './profile'
import { projectSchema } from './project'
import { publicationSchema } from './publication'
import { referenceSchema } from './reference'
import { skillSchema } from './skill'
import { volunteerSchema } from './volunteer'

export const sectionSchema = z.object({
  name: z.string(),
  columns: z.optional(z.pipe(z.number(), z.minValue(1), z.maxValue(5)), 1),
  separateLinks: z.optional(z.boolean(), true),
  visible: z.optional(z.boolean(), true),
  icon: z.optional(z.string()),
})

export const customSchema = z.object({
  ...sectionSchema.entries,
  id: idSchema,
  items: z.array(customSectionSchema),
})

export const sectionsSchema = z.object({
  summary: z.object({
    ...sectionSchema.entries,
    id: z.literal('summary'),
    content: z.optional(z.string(), ''),
  }),
  awards: z.object({
    ...sectionSchema.entries,
    id: z.literal('awards'),
    items: z.array(awardSchema),
  }),
  certifications: z.object({
    ...sectionSchema.entries,
    id: z.literal('certifications'),
    items: z.array(certificationSchema),
  }),
  education: z.object({
    ...sectionSchema.entries,
    id: z.literal('education'),
    items: z.array(educationSchema),
  }),
  experience: z.object({
    ...sectionSchema.entries,
    id: z.literal('experience'),
    items: z.array(experienceSchema),
  }),
  volunteer: z.object({
    ...sectionSchema.entries,
    id: z.literal('volunteer'),
    items: z.array(volunteerSchema),
  }),
  interests: z.object({
    ...sectionSchema.entries,
    id: z.literal('interests'),
    items: z.array(interestSchema),
  }),
  languages: z.object({
    ...sectionSchema.entries,
    id: z.literal('languages'),
    items: z.array(languageSchema),
  }),
  profiles: z.object({
    ...sectionSchema.entries,
    id: z.literal('profiles'),
    items: z.array(profileSchema),
  }),
  projects: z.object({
    ...sectionSchema.entries,
    id: z.literal('projects'),
    items: z.array(projectSchema),
  }),
  publications: z.object({
    ...sectionSchema.entries,
    id: z.literal('publications'),
    items: z.array(publicationSchema),
  }),
  references: z.object({
    ...sectionSchema.entries,
    id: z.literal('references'),
    items: z.array(referenceSchema),
  }),
  skills: z.object({
    ...sectionSchema.entries,
    id: z.literal('skills'),
    items: z.array(skillSchema),
  }),
  // custom: z.record(z.string(), customSchema),
})

export type Section = z.InferOutput<typeof sectionSchema>
export type Sections = z.InferOutput<typeof sectionsSchema>

export const defaultSection: Section = {
  name: '',
  columns: 1,
  separateLinks: true,
  visible: true,
}

export const defaultSections: Sections = {
  summary: { ...defaultSection, id: 'summary', name: 'Summary', content: '', icon: 'ph:article' },
  profiles: { ...defaultSection, id: 'profiles', name: 'Profiles', items: [], icon: 'ph:share-network' },
  experience: { ...defaultSection, id: 'experience', name: 'Experience', items: [], icon: 'ph:briefcase' },
  education: { ...defaultSection, id: 'education', name: 'Education', items: [], icon: 'ph:graduation-cap' },
  skills: { ...defaultSection, id: 'skills', name: 'Skills', items: [], icon: 'ph:users' },
  languages: { ...defaultSection, id: 'languages', name: 'Languages', items: [], icon: 'ph:translate' },
  awards: { ...defaultSection, id: 'awards', name: 'Awards', items: [], icon: 'ph:medal' },
  certifications: { ...defaultSection, id: 'certifications', name: 'Certifications', items: [], icon: 'ph:certificate' },
  interests: { ...defaultSection, id: 'interests', name: 'Interests', items: [], icon: 'ph:game-controller' },
  projects: { ...defaultSection, id: 'projects', name: 'Projects', items: [], icon: 'ph:puzzle-piece' },
  publications: { ...defaultSection, id: 'publications', name: 'Publications', items: [], icon: 'ph:books' },
  volunteer: { ...defaultSection, id: 'volunteer', name: 'Volunteering', items: [], icon: 'ph:hand-heart' },
  references: { ...defaultSection, id: 'references', name: 'References', items: [], icon: 'ph:compass-tool' },
  // custom: {},
}

export type SectionKey = keyof Omit<Sections, 'summary' | 'custom' >
export type FullSectionKey = keyof Sections
// export type SectionKey = 'basics' | keyof Sections | `custom.${string}`
