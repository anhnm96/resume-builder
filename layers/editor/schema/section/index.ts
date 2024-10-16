import { z } from 'zod'
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
  columns: z.number().min(1).max(5).default(1),
  separateLinks: z.boolean().default(true),
  visible: z.boolean().default(true),
  icon: z.string().optional(),
})

export const customSchema = sectionSchema.extend({
  id: idSchema,
  items: z.array(customSectionSchema),
})

export const sectionsSchema = z.object({
  summary: sectionSchema.extend({
    id: z.literal('summary'),
    content: z.string().default(''),
  }),
  awards: sectionSchema.extend({
    id: z.literal('awards'),
    items: z.array(awardSchema),
  }),
  certifications: sectionSchema.extend({
    id: z.literal('certifications'),
    items: z.array(certificationSchema),
  }),
  education: sectionSchema.extend({
    id: z.literal('education'),
    items: z.array(educationSchema),
  }),
  experience: sectionSchema.extend({
    id: z.literal('experience'),
    items: z.array(experienceSchema),
  }),
  volunteer: sectionSchema.extend({
    id: z.literal('volunteer'),
    items: z.array(volunteerSchema),
  }),
  interests: sectionSchema.extend({
    id: z.literal('interests'),
    items: z.array(interestSchema),
  }),
  languages: sectionSchema.extend({
    id: z.literal('languages'),
    items: z.array(languageSchema),
  }),
  profiles: sectionSchema.extend({
    id: z.literal('profiles'),
    items: z.array(profileSchema),
  }),
  projects: sectionSchema.extend({
    id: z.literal('projects'),
    items: z.array(projectSchema),
  }),
  publications: sectionSchema.extend({
    id: z.literal('publications'),
    items: z.array(publicationSchema),
  }),
  references: sectionSchema.extend({
    id: z.literal('references'),
    items: z.array(referenceSchema),
  }),
  skills: sectionSchema.extend({
    id: z.literal('skills'),
    items: z.array(skillSchema),
  }),
  custom: z.record(z.string(), customSchema),
})

export type Section = z.infer<typeof sectionSchema>
export type Sections = z.infer<typeof sectionsSchema>

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
  custom: {},
}
export type SectionKey = keyof Sections
// export type SectionKey = 'basics' | keyof Sections | `custom.${string}`
