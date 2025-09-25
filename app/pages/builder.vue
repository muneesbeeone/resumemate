<template>
  <main class="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">

    <div class="mx-auto max-w-7xl gap-6 px-4 py-6 lg:grid lg:grid-cols-2">
      <!-- Form Column -->
      <div class="space-y-6 pb-20 sm:pb-10">
        <!-- Section Tabs -->
        <nav role="tablist" class="mb-4 flex items-center gap-2 flex-nowrap overflow-x-auto" aria-label="Sections">
          <button
            v-for="t in tabs"
            :key="t.id"
            role="tab"
            :aria-selected="currentTab === t.id"
            @click="currentTab = t.id"
            :class="['rounded-md px-3 py-1 text-sm font-medium focus:outline-none', currentTab === t.id ? 'bg-blue-600 text-white' : 'text-slate-700 ring-1 ring-slate-100 hover:bg-slate-50']"
          >{{ t.label }}</button>
        </nav>

        <!-- Layout / Sections -->
        <FormStep id="layout" title="Sections" description="Show, hide, and reorder sections." v-show="currentTab === 'layout'">
          <div class="space-y-2">
            <div
              v-for="(sid, i) in resume.sectionOrder"
              :key="sid"
              class="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2"
              draggable="true"
              @dragstart="onDragStart(i)"
              @dragover.prevent
              @drop="onDrop(i)"
            >
              <div class="flex items-center gap-2">
                <span class="cursor-grab select-none text-slate-400">≡</span>
                <span class="text-sm font-medium text-slate-700">{{ sectionLabels[sid] || sid }}</span>
              </div>
              <label class="inline-flex items-center gap-2 text-sm text-slate-700">
                <input type="checkbox" v-model="resume.sectionVisibility[sid]" class="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600" />
                Visible
              </label>
            </div>
          </div>
        </FormStep>

        <!-- Personal Info -->
        <FormStep id="personal-info" title="Personal Info" description="Tell us who you are and how to reach you." v-show="currentTab === 'personal-info'">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="text-sm font-medium text-slate-700">First Name</label>
              <input v-model="resume.personal.firstName" type="text" class="form-input" />
            </div>
            <div>
              <label class="text-sm font-medium text-slate-700">Last Name</label>
              <input v-model="resume.personal.lastName" type="text" class="form-input" />
            </div>
          </div>

          <div class="mt-3">
            <label class="text-sm font-medium text-slate-700">Professional Title</label>
            <input v-model="resume.personal.professionalTitle" type="text" class="form-input" placeholder="e.g. Senior Frontend Engineer" />
          </div>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="text-sm font-medium text-slate-700">Email</label>
              <input v-model="resume.personal.email" type="email" class="form-input" />
            </div>
            <div>
              <label class="text-sm font-medium text-slate-700">Phone</label>
              <input v-model="resume.personal.phone" type="tel" class="form-input" />
            </div>
          </div>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label class="text-sm font-medium text-slate-700">Location</label>
              <input v-model="resume.personal.location" type="text" class="form-input" />
            </div>
            <div>
              <label class="text-sm font-medium text-slate-700">Website</label>
              <input v-model="resume.personal.website" type="url" class="form-input" placeholder="example.com" />
            </div>
            <div>
              <label class="text-sm font-medium text-slate-700">LinkedIn</label>
              <input v-model="resume.personal.linkedin" type="url" class="form-input" placeholder="linkedin.com/in/you" />
            </div>
          </div>
          <div>
            <label class="text-sm font-medium text-slate-700">GitHub</label>
            <input v-model="resume.personal.github" type="url" class="form-input" placeholder="github.com/you" />
          </div>
        </FormStep>

        <!-- Summary -->
        <FormStep id="summary" title="Professional Summary" description="Briefly summarize your experience and strengths." v-show="currentTab === 'summary'">
          <textarea v-model="resume.summary" rows="4" class="form-textarea" />
        </FormStep>

        <!-- Experience -->
        <FormStep id="experience" title="Work Experience" description="List your recent roles and key achievements." v-show="currentTab === 'experience'">
          <div v-for="(job, i) in resume.experience" :key="i" class="rounded-lg border border-slate-200 p-4">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label class="text-sm font-medium text-slate-700">Title</label>
                <input v-model="job.title" type="text" class="form-input" />
              </div>
              <div>
                <label class="text-sm font-medium text-slate-700">Company</label>
                <input v-model="job.company" type="text" class="form-input" />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <label class="text-sm font-medium text-slate-700">Location</label>
                <input v-model="job.location" type="text" class="form-input" />
              </div>
              <div>
                <label class="text-sm font-medium text-slate-700">Start</label>
                <input v-model="job.start" type="text" class="form-input" placeholder="Jan 2022" />
              </div>
              <div>
                <label class="text-sm font-medium text-slate-700">End</label>
                <input v-model="job.end" :disabled="job.current" type="text" class="form-input" placeholder="Dec 2023" />
              </div>
            </div>
            <label class="mt-2 inline-flex items-center gap-2 text-sm text-slate-700">
              <input v-model="job.current" type="checkbox" class="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600" />
              Currently working here
            </label>
            <div class="mt-3">
              <div class="mb-2 flex items-center justify-between">
                <span class="text-sm font-medium text-slate-700">Key Achievements</span>
                <button @click="job.bullets.push('')" class="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 hover:bg-slate-200">Add Bullet</button>
              </div>
              <div class="space-y-2">
                <div v-for="(b, bi) in job.bullets" :key="bi" class="flex items-start gap-2">
                  <input v-model="job.bullets[bi]" type="text" class="form-input flex-1" placeholder="What did you accomplish?" />
                  <button @click="removeBullet(i, bi)" class="rounded-md border border-slate-300 px-2 py-1 text-xs text-slate-600 hover:bg-slate-50">Remove</button>
                </div>
              </div>
            </div>
            <div class="mt-3 text-right">
              <button @click="removeExperience(i)" class="rounded-md border border-rose-200 bg-rose-50 px-2.5 py-1.5 text-xs font-medium text-rose-700 hover:bg-rose-100">Remove Role</button>
            </div>
          </div>
          <button @click="addExperience" class="w-full rounded-lg border border-dashed border-slate-300 bg-white py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">+ Add Experience</button>
        </FormStep>

        <!-- Education -->
        <FormStep id="education" title="Education" description="Add your education details." v-show="currentTab === 'education'">
          <div v-for="(ed, ei) in resume.education" :key="ei" class="rounded-lg border border-slate-200 p-4">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label class="text-sm font-medium text-slate-700">Degree</label>
                <input v-model="ed.degree" type="text" class="form-input" />
              </div>
              <div>
                <label class="text-sm font-medium text-slate-700">Institution</label>
                <input v-model="ed.institution" type="text" class="form-input" />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <label class="text-sm font-medium text-slate-700">Location</label>
                <input v-model="ed.location" type="text" class="form-input" />
              </div>
              <div>
                <label class="text-sm font-medium text-slate-700">Start</label>
                <input v-model="ed.start" type="text" class="form-input" placeholder="2019" />
              </div>
              <div>
                <label class="text-sm font-medium text-slate-700">End</label>
                <input v-model="ed.end" type="text" class="form-input" placeholder="2023" />
              </div>
            </div>
            <div>
              <label class="text-sm font-medium text-slate-700">Details</label>
              <input v-model="ed.details" type="text" class="form-input" placeholder="GPA, honors, coursework" />
            </div>
            <div class="mt-3 text-right">
              <button @click="removeEducation(ei)" class="rounded-md border border-rose-200 bg-rose-50 px-2.5 py-1.5 text-xs font-medium text-rose-700 hover:bg-rose-100">Remove</button>
            </div>
          </div>
          <button @click="addEducation" class="w-full rounded-lg border border-dashed border-slate-300 bg-white py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">+ Add Education</button>
        </FormStep>

        <!-- Skills -->
        <FormStep id="skills" title="Skills" description="Add comma-separated skills or individual entries." v-show="currentTab === 'skills'">
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <input v-model="skillInput" @keyup.enter.prevent="addSkill" type="text" class="form-input flex-1" placeholder="e.g. Vue, TypeScript, TailwindCSS" />
              <button @click="addSkill" class="rounded-lg bg-slate-800 px-3 py-2 text-sm font-medium text-white hover:bg-slate-900">Add</button>
            </div>
            <div class="flex flex-wrap gap-2">
              <span v-for="(s, si) in resume.skills" :key="si" class="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs text-slate-700">
                {{ s }}
                <button @click="removeSkill(si)" class="text-slate-500 hover:text-slate-700">×</button>
              </span>
            </div>
          </div>
        </FormStep>

        <!-- Languages -->
        <FormStep id="languages" title="Languages" description="Add languages and proficiency (e.g. English (Native))." v-show="currentTab === 'languages'">
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <input v-model="languageInput" @keyup.enter.prevent="addLanguage" type="text" class="form-input flex-1" placeholder="e.g. English (Native), Spanish (Professional)" />
              <button @click="addLanguage" class="rounded-lg bg-slate-800 px-3 py-2 text-sm font-medium text-white hover:bg-slate-900">Add</button>
            </div>
            <div class="flex flex-wrap gap-2">
              <span v-for="(l, li) in resume.languages" :key="li" class="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs text-slate-700">
                {{ l }}
                <button @click="removeLanguage(li)" class="text-slate-500 hover:text-slate-700">×</button>
              </span>
            </div>
          </div>
        </FormStep>

        <!-- Projects & Certifications -->
        <FormStep id="projects" title="Projects / Certifications" description="Add relevant projects or certifications." v-show="currentTab === 'projects'">
          <div v-for="(p, pi) in resume.projects" :key="pi" class="rounded-lg border border-slate-200 p-4">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label class="text-sm font-medium text-slate-700">Name</label>
                <input v-model="p.name" type="text" class="form-input" />
              </div>
              <div>
                <label class="text-sm font-medium text-slate-700">Date</label>
                <input v-model="p.date" type="text" class="form-input" placeholder="2024" />
              </div>
            </div>
            <div>
              <label class="text-sm font-medium text-slate-700">Link</label>
              <input v-model="p.link" type="url" class="form-input" placeholder="yourproject.com" />
            </div>
            <div>
              <label class="text-sm font-medium text-slate-700">Description</label>
              <textarea v-model="p.description" rows="3" class="form-textarea" />
            </div>
            <div class="mt-3 text-right">
              <button @click="removeProject(pi)" class="rounded-md border border-rose-200 bg-rose-50 px-2.5 py-1.5 text-xs font-medium text-rose-700 hover:bg-rose-100">Remove</button>
            </div>
          </div>
          <button @click="addProject" class="w-full rounded-lg border border-dashed border-slate-300 bg-white py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">+ Add Project/Certification</button>
        </FormStep>

        <div class="z-50 mt-6">
          <!-- fixed on mobile, relative on sm+ -->
          <div class=" left-0 w-full bg-white/90 rounded-lg border border-slate-200 py-3 sm:static sm:bg-transparent sm:border-0">
            <div class="mx-auto max-w-7xl px-4">
              <div class="flex items-center justify-between gap-3">
                <button @click="goPrev" :disabled="isFirst" class="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed">
                  ← Previous
                </button>

                <div class="text-sm text-slate-600">Section {{ currentIndex + 1 }} of {{ tabs.length }}</div>

                <button @click="goNext" :disabled="isLast" class="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Preview Column -->
      <div>
        <ResumeTemplate :data="resume">
          <template #controls>
            <button @click="onExport" class="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50">
              Export PDF
            </button>
          </template>
        </ResumeTemplate>
      </div>
    </div>
    <div class="mx-auto max-w-7xl px-4 pb-12">
      <Adsense class="w-full" client="ca-pub-123456789" slot="9783500294" format="auto" responsive="true" />
  </div>
  </main>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, computed, onUnmounted } from 'vue'
import { createReactiveResume, saveDraft, clearDraft as clearStorage, defaultResume } from '../state/resume'
import { setMeta } from '../utils/seo'
import type { ResumeData } from '~/components/ResumeTemplate.vue'
import Adsense from '~/components/Adsense.vue'

onMounted(() => {
  setMeta({
    title: 'ResuMate — Build ATS friendly resumes',
    description: 'Create ATS-optimized resumes with live preview, local drafts, and PDF export. Privacy-first and easy to use.',
    url: window.location.href,
  })

  // Listen for global header actions
  const onExportEvent = () => onExport()
  const onClearEvent = () => onClear()
  window.addEventListener('export-pdf', onExportEvent)
  window.addEventListener('clear-draft', onClearEvent)

  // cleanup on unmount
  const removeListeners = () => {
    window.removeEventListener('export-pdf', onExportEvent)
    window.removeEventListener('clear-draft', onClearEvent)
  }
  // attach to window so it's removable later
  ;(window as any).__remove_resume_listeners = removeListeners
})

// cleanup on unmount
onUnmounted(() => {
  const rm = (window as any).__remove_resume_listeners
  if (rm) rm()
})

const resume = ref<ResumeData>(createReactiveResume() as unknown as ResumeData)

const tabs = [
  { id: 'layout', label: 'Sections' },
  { id: 'personal-info', label: 'Personal' },
  { id: 'summary', label: 'Summary' },
  { id: 'skills', label: 'Skills' },
  { id: 'languages', label: 'Languages' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
]
const currentTab = ref('personal-info')

watch(
  resume,
  (val) => {
    saveDraft(val as any)
  },
  { deep: true }
)

async function onExport() {
  try {
    const node = document.getElementById('resume-preview')
    if (!node) {
      alert('Preview not ready yet. Please try again in a moment.')
      return
    }
    // Wait for fonts to load to avoid layout shifts in PDF
    if (typeof document !== 'undefined' && (document as any).fonts && (document as any).fonts.ready) {
      await (document as any).fonts.ready
    }
    const name = `${resume.value.personal.firstName || 'Resume'}_${resume.value.personal.lastName || ''}`.trim()
    const { exportElementToPdf } = await import('~/components/PDFExportHelper.js')
    await exportElementToPdf(node, `${name || 'resume'}.pdf`)
  } catch (err) {
    console.error('PDF export failed:', err)
    alert('PDF export failed. Please try again in a moment.')
  }
}

function onClear() {
  if (confirm('Clear all data from this draft?')) {
    clearStorage()
    resume.value = defaultResume() as unknown as ResumeData
  }
}

function addExperience() {
  resume.value.experience.push({ title: '', company: '', location: '', start: '', end: '', current: false, bullets: [''] })
}
function removeExperience(index: number) {
  resume.value.experience.splice(index, 1)
}
function removeBullet(jobIndex: number, bulletIndex: number) {
  resume.value.experience[jobIndex].bullets.splice(bulletIndex, 1)
}

function addEducation() {
  resume.value.education.push({ degree: '', institution: '', location: '', start: '', end: '', details: '' })
}
function removeEducation(index: number) {
  resume.value.education.splice(index, 1)
}

const skillInput = ref('')
function addSkill() {
  const raw = skillInput.value.trim()
  if (!raw) return
  const parts = raw.split(',').map((s) => s.trim()).filter(Boolean)
  resume.value.skills.push(...parts)
  skillInput.value = ''
}
function removeSkill(index: number) {
  resume.value.skills.splice(index, 1)
}

const languageInput = ref('')
function addLanguage() {
  const raw = languageInput.value.trim()
  if (!raw) return
  const parts = raw.split(',').map((s) => s.trim()).filter(Boolean)
  resume.value.languages.push(...parts)
  languageInput.value = ''
}
function removeLanguage(index: number) {
  resume.value.languages.splice(index, 1)
}

function addProject() {
  resume.value.projects.push({ name: '', link: '', description: '', date: '' })
}
function removeProject(index: number) {
  resume.value.projects.splice(index, 1)
}

const currentIndex = computed(() => tabs.findIndex((t) => t.id === currentTab.value))
const isFirst = computed(() => currentIndex.value <= 0)
const isLast = computed(() => currentIndex.value >= tabs.length - 1)

function goNext() {
  if (isLast.value) return
  currentTab.value = tabs[currentIndex.value + 1].id
  scrollToTab()
}
function goPrev() {
  if (isFirst.value) return
  currentTab.value = tabs[currentIndex.value - 1].id
  scrollToTab()
}
function scrollToTab() {
  setTimeout(() => {
    const el = document.getElementById(currentTab.value)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, 50)
}

// Drag and drop for section order
let dragIndex = -1
function onDragStart(index: number) {
  dragIndex = index
}
function onDrop(targetIndex: number) {
  if (dragIndex === -1 || dragIndex === targetIndex) return
  const order = [...(resume.value.sectionOrder || [])]
  const [moved] = order.splice(dragIndex, 1)
  order.splice(targetIndex, 0, moved)
  resume.value.sectionOrder = order as any
  dragIndex = -1
}

const sectionLabels: Record<string, string> = {
  personal: 'Personal Info',
  summary: 'Summary',
  skills: 'Skills',
  languages: 'Languages',
  experience: 'Experience',
  projects: 'Projects',
  education: 'Education',
}
</script>

<style scoped>
.form-input {
  @apply mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100;
}
.form-textarea {
  @apply mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100;
}
/* Make top tabs horizontally scrollable on small screens */
.tabs-scroll {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

/* update cursor when dragging */
[draggable="true"]:active {
  cursor: grabbing !important;
}
[draggable="true"] {
  cursor: grab;
}
/* Hide number input spinners */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
/* Fix for iOS Safari zooming in on inputs */
input, textarea,
select {
  font-size: 16px;
}
/* Prevent layout shift when fonts load */
body {
  font-display: swap;
}
/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}
/* Prevent horizontal layout shift when showing focus ring */
button:focus,
input:focus,
textarea:focus {
  outline-offset: 2px;
}
/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
/* PDF export: avoid page breaks inside sections */
@media print {
  section {
    page-break-inside: avoid;
  }
}
</style>