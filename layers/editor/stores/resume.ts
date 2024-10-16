import { defaultSections, type Sections } from '../schema/section'

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
      url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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

  const sections = reactive<Sections>({ ...defaultSections })

  return { basics, sections }
})
