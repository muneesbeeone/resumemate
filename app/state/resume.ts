import { reactive } from 'vue'

export interface ResumeState {
  personal: {
    firstName: string
    lastName: string
    email: string
    phone: string
    location: string
    website: string
    linkedin: string
    github: string,
    professionalTitle: string
  }
  summary: string
  experience: Array<{
    title: string
    company: string
    location: string
    start: string
    end: string
    current: boolean
    bullets: string[]
  }>
  education: Array<{
    degree: string
    institution: string
    location: string
    start: string
    end: string
    details: string
  }>
  skills: string[]
  projects: Array<{
    name: string
    link: string
    description: string
    date: string
  }>
  languages: string[]
}

export const STORAGE_KEY = 'resume_draft_v1'

export function defaultResume(): ResumeState {
  return {
    personal: {
      firstName: '',
      lastName: '',
      professionalTitle: '',
      email: '',
      phone: '',
      location: '',
      website: '',
      linkedin: '',
      github: '',
    },
    summary: '',
    experience: [
      { title: '', company: '', location: '', start: '', end: '', current: false, bullets: [''] },
    ],
    education: [{ degree: '', institution: '', location: '', start: '', end: '', details: '' }],
    skills: [],
    projects: [{ name: '', link: '', description: '', date: '' }],
    languages: [],
  }
}

export function loadDraft(): ResumeState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultResume()
    const parsed = JSON.parse(raw)
    return { ...defaultResume(), ...parsed }
  } catch {
    return defaultResume()
  }
}

export function saveDraft(state: ResumeState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {}
}

export function clearDraft() {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {}
}

export function createReactiveResume(): ResumeState {
  const state = reactive(loadDraft()) as unknown as ResumeState
  return state
}
