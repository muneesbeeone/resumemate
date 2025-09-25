<template>
  <section class="mx-auto max-w-4xl px-4 py-12">
    <h1 class="text-3xl font-bold text-slate-900">Resume Examples & Templates</h1>
    <p class="mt-3 text-slate-700">Use these short examples as inspiration. Copy entries into your resume builder and adapt to your experience.</p>

    <article class="mt-8 space-y-8">
      <section>
        <h2 class="text-xl font-semibold text-slate-800">Software Engineer (Frontend)</h2>
        <div class="mt-2 rounded-md border border-slate-100 bg-slate-50 p-4">
          <p class="text-sm text-slate-700"><strong>Summary</strong>: Frontend engineer with 5+ years building fast, accessible web apps using Vue, React, and TypeScript.</p>
          <p class="mt-2 text-sm text-slate-700"><strong>Key achievements</strong>:</p>
          <ul class="mt-2 ml-5 list-disc text-sm text-slate-700">
            <li>Improved application performance, reducing time-to-interactive by 40%.</li>
            <li>Led migration from Vue 2 to Vue 3 for a 10-person engineering team.</li>
          </ul>
          <p class="mt-2 text-sm text-slate-700"><strong>Skills</strong>: Vue, TypeScript, Tailwind, HTML, CSS, Testing</p>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-800">Product Manager</h2>
        <div class="mt-2 rounded-md border border-slate-100 bg-slate-50 p-4">
          <p class="text-sm text-slate-700"><strong>Summary</strong>: Product manager experienced in leading cross-functional teams to deliver consumer SaaS products.</p>
          <ul class="mt-2 ml-5 list-disc text-sm text-slate-700">
            <li>Defined roadmap and prioritized features that increased user retention by 12%.</li>
            <li>Collaborated with design and engineering to reduce churn through onboarding improvements.</li>
          </ul>
          <p class="mt-2 text-sm text-slate-700"><strong>Skills</strong>: Product strategy, Roadmapping, Data analysis, A/B testing</p>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-800">Marketing Specialist</h2>
        <div class="mt-2 rounded-md border border-slate-100 bg-slate-50 p-4">
          <p class="text-sm text-slate-700"><strong>Summary</strong>: Marketing specialist focused on content and growth experiments for startup brands.</p>
          <ul class="mt-2 ml-5 list-disc text-sm text-slate-700">
            <li>Launched content campaigns that drove a 30% increase in organic traffic.</li>
            <li>Built partnerships that generated 15% of monthly leads.</li>
          </ul>
          <p class="mt-2 text-sm text-slate-700"><strong>Skills</strong>: SEO, Content Marketing, Analytics, CRM</p>
        </div>
      </section>
    </article>

    <div class="mt-8">
      <NuxtLink to="/tips" class="inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">See Tips</NuxtLink>
      <NuxtLink to="/" class="ml-3 inline-block rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Back to Builder</NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { setMeta } from '@/utils/seo'

onMounted(() => {
  setMeta({
    title: 'Resume Examples — ResuMate',
    description: 'Example ATS Friendly resume snippets for software engineering, product, and marketing roles. Copy sample bullets and adapt to your experience.',
    url: window.location.href,
  })
})
</script>

<style scoped></style>
