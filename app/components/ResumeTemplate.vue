<template>
  <div class="relative">
    <div class="mb-3 flex items-center justify-between">
      <h3 class="text-sm font-medium tracking-wide text-slate-500">Live Preview</h3>
      <slot name="controls" />
    </div>

    <!-- ATS-friendly, single-column template -->
    <article
      id="resume-preview"
      class="mx-auto w-full max-w-[820px] rounded-lg border border-slate-200 bg-white p-4 sm:p-6 shadow-sm text-slate-800 break-words"
    >
      <!-- Header: large name, title, single-row contacts and links (left aligned) -->
      <header class="mb-5 border-b border-slate-200 pb-4">
        <div class="flex flex-col">
          <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-slate-900 break-words">{{ data.personal.firstName }} {{ data.personal.lastName }}</h1>
          <p v-if="data.personal.professionalTitle" class="mt-1 text-base sm:text-lg text-slate-700">{{ data.personal.professionalTitle }}</p>
          <p v-if="contactsLine" class="mt-2 text-[13px] sm:text-[14px] text-slate-600">{{ contactsLine }}</p>
          <p v-if="linksItems.length" class="mt-1 text-[13px] sm:text-[14px] text-slate-700">
            <template v-for="(lnk, idx) in linksItems" :key="idx">
              <a :href="lnk.href" target="_blank" rel="noopener" class="text-blue-600 hover:underline">{{ lnk.label }}</a><span v-if="idx < linksItems.length - 1"> · </span>
            </template>
          </p>
        </div>
      </header>

      <!-- Summary (high priority for recruiters) -->
      <section v-if="data.summary" aria-labelledby="summary-heading" class="mb-4 pt-3 border-t border-slate-100">
        <h2 id="summary-heading" class="text-sm font-semibold uppercase tracking-wider text-slate-700">Summary</h2>
        <p class="mt-1 text-[13.5px] leading-relaxed text-slate-800">{{ data.summary }}</p>
      </section>

      <!-- Skills: inline, comma-separated for quick keyword scanning -->
      <section v-if="skillsText" aria-labelledby="skills-heading" class="mb-4 pt-3 border-t border-slate-100">
        <h2 id="skills-heading" class="text-sm font-semibold uppercase tracking-wider text-slate-700">Skills</h2>
        <p class="mt-1 text-[13.5px] text-slate-800">{{ skillsText }}</p>
      </section>

      <!-- Languages -->
      <section v-if="languagesText" aria-labelledby="languages-heading" class="mb-4 pt-3 border-t border-slate-100">
        <h2 id="languages-heading" class="text-sm font-semibold uppercase tracking-wider text-slate-700">Languages</h2>
        <p class="mt-1 text-[13.5px] text-slate-800">{{ languagesText }}</p>
      </section>

      <!-- Experience: clear, chronological, bullets for achievements -->
      <section v-if="data.experience.length" aria-labelledby="exp-heading" class="mb-4 pt-3 border-t border-slate-100">
        <h2 id="exp-heading" class="text-sm font-semibold uppercase tracking-wider text-slate-700">Experience</h2>
        <div class="mt-2 space-y-4">
          <div v-for="(job, jIdx) in data.experience" :key="jIdx">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between">
              <div class="w-full sm:pr-4">
                <div class="flex items-baseline gap-2">
                  <h3 class="text-[15px] font-medium text-slate-900" v-if="job.title">{{ job.title }}</h3>
                  <span v-if="job.company" class="text-[13px] text-slate-700">@ {{ job.company }}</span>
                </div>
                <div v-if="job.location" class="mt-1 text-[13px] text-slate-600">{{ job.location }}</div>
              </div>
              <div class="mt-2 sm:mt-0 text-[13px] text-slate-600 sm:text-right">
                <div>
                  <time v-if="job.start" :datetime="job.start">{{ job.start }}</time>
                  <span v-if="job.start || job.end"> – </span>
                  <time v-if="!job.current && job.end" :datetime="job.end">{{ job.end }}</time>
                  <span v-if="job.current">Present</span>
                </div>
              </div>
            </div>
            <ul v-if="job.bullets && job.bullets.length" class="mt-2 list-disc pl-5 text-[13.5px] text-slate-800 leading-snug">
              <li v-for="(b, bIdx) in job.bullets" :key="bIdx" v-show="b && b.trim().length">{{ b }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Projects / Certifications: optional but visible -->
      <section v-if="data.projects.length" aria-labelledby="projects-heading" class="mb-4 pt-3 border-t border-slate-100">
        <h2 id="projects-heading" class="text-sm font-semibold uppercase tracking-wider text-slate-700">Projects & Certifications</h2>
        <div class="mt-2 space-y-3">
          <div v-for="(p, pIdx) in data.projects" :key="pIdx">
            <div class="flex items-baseline justify-between">
              <div class="font-medium text-slate-900">{{ p.name }}</div>
              <div class="text-[13px] text-slate-600">{{ p.date }}</div>
            </div>
            <div v-if="p.link" class="text-[13px] mt-1"><a :href="toUrl(p.link)" class="text-blue-600 hover:underline" target="_blank" rel="noopener">{{ cleanUrl(p.link) }}</a></div>
            <p v-if="p.description" class="mt-1 text-[13.5px] text-slate-800">{{ p.description }}</p>
          </div>
        </div>
      </section>

      <!-- Education: concise, latest first -->
      <section v-if="data.education.length" aria-labelledby="edu-heading" class="mb-2 pt-3 border-t border-slate-100">
        <h2 id="edu-heading" class="text-sm font-semibold uppercase tracking-wider text-slate-700">Education</h2>
        <div class="mt-2 space-y-2">
          <div v-for="(ed, eIdx) in data.education" :key="eIdx">
            <div class="flex items-baseline justify-between">
              <div class="font-medium text-slate-900">{{ ed.degree }} <span v-if="ed.institution" class="text-[13px] text-slate-700">• {{ ed.institution }}</span></div>
              <div class="text-[13px] text-slate-600">{{ ed.start }}<span v-if="ed.end"> – {{ ed.end }}</span></div>
            </div>
            <p v-if="ed.location || ed.details" class="mt-1 text-[13px] text-slate-800">{{ ed.location }}<span v-if="ed.location && ed.details"> • </span>{{ ed.details }}</p>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface ResumeData {
  personal: {
    firstName: string
    lastName: string
    professionalTitle?: string
    email: string
    phone: string
    location: string
    website: string
    linkedin: string
    github: string
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

const props = defineProps<{ data: ResumeData }>()

const skillsText = computed(() => props.data.skills.filter(Boolean).join(', '))
const languagesText = computed(() => (props.data.languages || []).filter(Boolean).join(', '))

// Single line contacts: email · phone · location (only shown if present)
const contactsLine = computed(() => {
  const parts: string[] = []
  if (props.data.personal.email) parts.push(props.data.personal.email)
  if (props.data.personal.phone) parts.push(props.data.personal.phone)
  if (props.data.personal.location) parts.push(props.data.personal.location)
  return parts.join(' · ')
})

// Hyperlink items for website/linkedin/github
const linksItems = computed(() => {
  const items: Array<{ label: string; href: string }> = []
  if (props.data.personal.website) items.push({ label: cleanUrl(props.data.personal.website), href: toUrl(props.data.personal.website) })
  if (props.data.personal.linkedin) items.push({ label: 'LinkedIn', href: toUrl(props.data.personal.linkedin) })
  if (props.data.personal.github) items.push({ label: 'GitHub', href: toUrl(props.data.personal.github) })
  return items
})

function toUrl(val: string) {
  if (!val) return '#'
  if (/^https?:\/\//i.test(val)) return val
  return `https://${val}`
}
function cleanUrl(val: string) {
  return val.replace(/^https?:\/\//i, '')
}
</script>

<style scoped>
/* Ensure print styles are clean */
@media print {
  #resume-preview {
    box-shadow: none !important;
    border: none !important;
  }
}
</style>
