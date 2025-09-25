<template>
  <section class="mx-auto max-w-4xl px-4 py-12">
    <h1 class="text-3xl font-bold text-slate-900">About ResuMate</h1>
    <p class="mt-3 text-slate-700">ResuMate is a free, single-template resume builder focused on creating ATS-friendly resumes. Your data is stored locally in your browser and you can export a polished PDF when ready.</p>

    <article class="mt-8 space-y-6">


      <section>
        <h2 class="text-xl font-semibold text-slate-800">About the Product</h2>
        <p class="mt-2 text-slate-700">ResuMate is a lightweight, privacy-first resume builder that helps job-seekers create ATS-friendly resumes quickly. It provides a single, well-structured template that emphasizes clear headings, keyword-rich skills, and measurable achievements — all while keeping your data in the browser.</p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-800">Advantages & Why It Helps</h2>
        <ul class="mt-2 ml-5 list-disc text-slate-700">
          <li><strong>ATS-First</strong>: Uses standard headings and linear structure so applicant tracking systems can read your resume accurately.</li>
          <li><strong>One Template, Many Uses</strong>: Designed to be generic and effective for engineering, product, marketing, sales, and more.</li>
          <li><strong>Privacy & Control</strong>: Nothing leaves your browser unless you export or share the PDF.</li>
          <li><strong>Live Feedback</strong>: Immediate preview shows how content renders so you can iterate faster.</li>
          <li><strong>Easy Export</strong>: Generate a clean PDF with a single click suitable for uploads to job portals.</li>
          <li><strong>Portable</strong>: Deploy to GitHub Pages or any static host; no backend required.</li>
        </ul>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-800">How it Works</h2>
        <ol class="mt-2 ml-5 list-decimal text-slate-700">
          <li>Fill the multi-section form (Personal Info, Summary, Experience, Education, Skills, Projects).</li>
          <li>Drafts are saved automatically in LocalStorage so you can return later.</li>
          <li>Use the Live Preview to refine layout and wording.</li>
          <li>Export to PDF when you're ready and upload the file to job sites.</li>
        </ol>
      </section>
<div class="mx-auto max-w-7xl px-4 pb-12">
      <Adsense class="w-full" client="ca-pub-123456789" slot="9783500294" format="auto" responsive="true" />
  </div>
      <section>
        <h2 class="text-xl font-semibold text-slate-800">FAQ — Resume Guidance</h2>
        <div class="mt-2 space-y-4 text-slate-700">
          <div>
            <strong>What should I put in the Professional Summary?</strong>
            <div class="mt-1">Write 2–4 lines highlighting your role, core strengths, and a top achievement. Tailor it to the role's priorities.</div>
          </div>

          <div>
            <strong>How many skills should I list?</strong>
            <div class="mt-1">List 8–15 key skills relevant to the role. Prioritize specific tools and technologies; avoid generic terms alone (e.g., prefer "Vue 3" over "JavaScript").</div>
          </div>

          <div>
            <strong>How should I write experience bullets?</strong>
            <div class="mt-1">Start with an action verb, include the impact (metrics when possible), and keep bullets concise. Example: "Reduced page load time by 35% using code-splitting and lazy loading."</div>
          </div>

          <div>
            <strong>Should I include an objective?</strong>
            <div class="mt-1">For most mid-senior roles, a Professional Summary is preferred over an objective. Use an objective only for career changes or early-career candidates if it provides useful context.</div>
          </div>

          <div>
            <strong>What file format is best when applying?</strong>
            <div class="mt-1">PDF is usually best for preserving layout. Use the exported PDF from this tool. Some ATS accept DOCX; check the job posting instructions.</div>
          </div>

          <div>
            <strong>How long should my resume be?</strong>
            <div class="mt-1">One page for most early-career candidates; two pages are acceptable for extensive, relevant experience. Keep older or irrelevant roles brief.</div>
          </div>

          <div>
            <strong>What common ATS mistakes should I avoid?</strong>
            <div class="mt-1">Avoid images with text, complex tables for key info, and uncommon section headings. Ensure contact details are in plain text near the top.</div>
          </div>

          <div>
            <strong>Can I reuse this resume for multiple applications?</strong>
            <div class="mt-1">Yes — keep a master copy and tailor the Summary and top skills for each application to maximize ATS and recruiter relevance.</div>
          </div>
        </div>
      </section>
    </article>

    <div class="mt-8">
      <NuxtLink to="/builder" class="inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Start Building</NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Adsense from '@/components/Adsense.vue'
import { setMeta } from '@/utils/seo'

onMounted(() => {
  setMeta({
    title: 'About ResuMate — ATS-friendly Resume Builder',
    description: 'Learn about ResuMate, its advantages, privacy-first design, and deployment options. Get answers to common resume and technical questions.',
    url: window.location.href,
  })
})
</script>

<style scoped></style>
