export const useResumeStore = defineStore('resume', () => {
  const basics = reactive({
    name: 'Minh Anh',
    headline: '',
    email: '',
    phone: '',
    location: '',
    url: { label: '', href: '' },
    customFields: [],
    picture: {
      url: '',
      size: 64,
      aspectRatio: 1,
      borderRadius: 0,
      effects: {
        hidden: false,
        border: false,
        grayscale: false,
      },
    },
  })

  const defaultSection = {
    name: '',
    columns: 1,
    separateLinks: true,
    visible: true,
  }

  const sections = reactive({
    summary: { ...defaultSection, id: 'summary', name: 'Summary', content: '' },
    awards: { ...defaultSection, id: 'awards', name: 'Awards', items: [] },
    certifications: { ...defaultSection, id: 'certifications', name: 'Certifications', items: [] },
    education: { ...defaultSection, id: 'education', name: 'Education', items: [] },
    experience: { ...defaultSection, id: 'experience', name: 'Experience', items: [] },
    volunteer: { ...defaultSection, id: 'volunteer', name: 'Volunteering', items: [] },
    interests: { ...defaultSection, id: 'interests', name: 'Interests', items: [] },
    languages: { ...defaultSection, id: 'languages', name: 'Languages', items: [] },
    profiles: { ...defaultSection, id: 'profiles', name: 'Profiles', items: [] },
    projects: { ...defaultSection, id: 'projects', name: 'Projects', items: [] },
    publications: { ...defaultSection, id: 'publications', name: 'Publications', items: [] },
    references: { ...defaultSection, id: 'references', name: 'References', items: [] },
    skills: { ...defaultSection, id: 'skills', name: 'Skills', items: [] },
    custom: {},
  })

  return { basics, sections }
})
