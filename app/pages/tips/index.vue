<template>
  <section class="mx-auto max-w-4xl px-4 py-12">
    <h1 class="text-3xl font-bold text-slate-900">Resume Tips & Best Practices</h1>
    <p class="mt-3 text-slate-700">Practical guidance to make your resume ATS-friendly and compelling for hiring managers.</p>

    <article class="mt-8 space-y-6">
      <Adsense />
      <section>
        <h2 class="text-xl font-semibold text-slate-800">1. Keep it simple and scannable</h2>
        <p class="mt-2 text-slate-700">Use a single-column layout, clear headings, and short bullet points. Recruiters and ATS parse content more reliably when the structure is straightforward.</p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-800">2. Use keywords from the job description</h2>
        <p class="mt-2 text-slate-700">Tailor your skills and summary to include terms used in the job posting. Place key skills in a dedicated Skills section for easy matching.</p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-800">3. Prioritize achievements, not duties</h2>
        <p class="mt-2 text-slate-700">Write measurable achievements (e.g., "Reduced loading time by 30%") rather than lengthy lists of responsibilities.</p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-800">4. Use standard section headings</h2>
        <p class="mt-2 text-slate-700">ATS tools look for common headings like Summary, Experience, Education, Skills, Projects. Avoid creative headings that may confuse parsers.</p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-800">5. Keep formatting modest</h2>
        <p class="mt-2 text-slate-700">Avoid complex tables, images, or unusual fonts. Use clear fonts and consistent spacing so both humans and machines can read your resume.</p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-800">6. Proofread and validate</h2>
        <p class="mt-2 text-slate-700">Check spelling, grammar, and dates. Export to PDF and test how your resume looks when uploaded to common job portals.</p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-800">7. Include metrics and impact</h2>
        <p class="mt-2 text-slate-700">Numbers stand out. Wherever possible, quantify your results (percentages, dollar amounts, user growth, time saved).</p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-800">8. Use strong action verbs</h2>
        <p class="mt-2 text-slate-700">Start bullet points with verbs like "Led", "Built", "Optimized", "Designed" to convey ownership and results.</p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-800">9. Tailor per application</h2>
        <p class="mt-2 text-slate-700">You don't need a separate resume for every job, but adjust your summary and top skills to match the role you're applying for.</p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-800">10. Keep it concise</h2>
        <p class="mt-2 text-slate-700">Prefer 1 page for early-career candidates and 2 pages for extensive experience. Focus on recent, relevant roles.</p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-800">11. Common ATS pitfalls</h2>
        <p class="mt-2 text-slate-700">Avoid headers/footers for important content, scanned PDFs, and non-standard section titles. Use plain text links where possible.</p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-800">12. Accessibility and readability</h2>
        <p class="mt-2 text-slate-700">Use readable font sizes, sufficient contrast, and semantic structure. This improves both human review and parsing accuracy.</p>
      </section>
    </article>

    <div class="mt-8">
      <a href="#/examples" class="inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">See Examples</a>
      <a href="#/" class="ml-3 inline-block rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Back to Builder</a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Adsense from '@/components/Adsense.vue'
import { setMeta } from '@/utils/seo'

onMounted(() => {
  setMeta({
    title: 'Resume Tips & Best Practices — SwiftResume',
    description: 'Make your resume ATS-friendly with practical tips: clear headings, keyword usage, measurable achievements, and formatting guidance.',
    url: window.location.href,
  })
})
</script>

<style scoped></style>
