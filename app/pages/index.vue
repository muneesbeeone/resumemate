<template>
  <main class="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
    <!-- Hero Section -->
    <div class="relative bg-white text-center px-6 py-20 sm:py-28">
      <div class="max-w-4xl mx-auto">
        <!-- SEO-Friendly Main Heading -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Free Online Resume Builder – Create an ATS-Friendly Resume in Minutes
        </h1>

        <!-- Supporting SEO text -->
        <p class="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
          Build a job-winning resume that recruiters and Applicant Tracking Systems (ATS) love.
          Our free resume builder helps you create a professional CV with real-time preview,
          modern templates, and optimized formatting.
        </p>

        <!-- CTA Buttons -->
        <div class="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink to="/builder"
            class="inline-flex items-center justify-center px-8 py-3 text-base font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-lg transition">
            Start Building Your Resume
          </NuxtLink>
          <NuxtLink to="/examples"
            class="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-xl text-blue-600 border border-blue-600 hover:bg-blue-50 transition">
            View Resume Examples
          </NuxtLink>
        </div>

        <!-- SEO Subtext -->
        <p class="mt-6 text-sm text-slate-500 max-w-xl mx-auto">
          100% free, no sign-up required. Optimized for job portals like LinkedIn, Naukri, Indeed, and more.
        </p>
      </div>
    </div>


    <!-- Features Section -->
    <div class="py-12 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to create the perfect resume
          </p>
        </div>

        <div class="mt-10">
          <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div class="relative">
              <dt>
                <div class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-blue-600 text-white">
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">ATS-Friendly Resume Templates</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                Our templates are designed to be easily parsed by Applicant Tracking Systems, ensuring your resume gets
                seen by recruiters.
              </dd>
            </div>
            <div class="relative">
              <dt>
                <div class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-blue-600 text-white">
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-1.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Live Preview</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                See your changes in real-time as you type. No more guessing what your final resume will look like.
              </dd>
            </div>
            <div class="relative">
              <dt>
                <div class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-blue-600 text-white">
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Privacy First</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                Your data is saved directly in your browser. We don't store your personal information on our servers.
              </dd>
            </div>
            <div class="relative">
              <dt>
                <div class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-blue-600 text-white">
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">PDF Export</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                Download a pixel-perfect PDF of your resume, ready to be sent to employers.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <!-- Final CTA -->
    <div class="text-center px-4 py-16 sm:py-24 bg-white">
      <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Ready to get started?</h2>
      <p class="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">It's free and you don't need to create an account.</p>
      <div class="mt-8">
        <NuxtLink to="/builder"
          class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-lg">
          Create My Resume Now</NuxtLink>
      </div>
    </div>
    <section class="bg-slate-50" aria-labelledby="features-heading">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto text-center">
          <h2 id="features-heading" class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Everything You
            Need to Build a Winning Resume</h2>
          <p class="mt-4 text-lg leading-8 text-slate-600">Our builder is packed with features designed to make resume
            writing simple, fast, and effective.</p>
        </div>
        <div class="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          <div class="flex flex-col items-center gap-4 text-center">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600"><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                <path
                  d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4.5a.75.75 0 01.75.75v5.05l3.22 3.22a.75.75 0 11-1.06 1.06l-3.5-3.5a.75.75 0 01-.22-.53V7.25a.75.75 0 01.75-.75z" />
              </svg></div>
            <h3 class="text-lg font-semibold text-slate-800">Real-Time Preview</h3>
            <p class="text-slate-600">See your resume take shape as you type. Our live preview ensures your final
              document looks exactly as you intended.</p>
          </div>
          <div class="flex flex-col items-center gap-4 text-center">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600"><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                <path fill-rule="evenodd"
                  d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                  clip-rule="evenodd" />
              </svg></div>
            <h3 class="text-lg font-semibold text-slate-800">Privacy First</h3>
            <p class="text-slate-600">Your data is yours. Everything is stored locally in your browser. No sign-ups, no
              tracking, no data collection.</p>
          </div>
          <div class="flex flex-col items-center gap-4 text-center">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600"><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                <path
                  d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.5a.75.75 0 00.5.707c1.71.374 3.522.555 5.25.555 3.456 0 6.59-1.333 8.685-3.585a.75.75 0 00.22-.508V7.86c-1.95.86-4.223 1.39-6.685 1.39-1.348 0-2.653-.174-3.867-.513V4.533zM12.75 21a9.735 9.735 0 005.25-.555.75.75 0 00.5-.707V9.232c0-.337-.215-.63-.52-.721a25.13 25.13 0 01-4.98.544 25.93 25.93 0 01-4.23-.533.75.75 0 00-.52.721v5.483c1.214.339 2.52.513 3.867.513 2.462 0 4.735-.53 6.685-1.39v3.217a.75.75 0 00-.22.508c-2.096 2.252-5.23 3.585-8.685 3.585z" />
              </svg></div>
            <h3 class="text-lg font-semibold text-slate-800">ATS-Optimized</h3>
            <p class="text-slate-600">Our templates are optimized to pass through Applicant Tracking Systems used by top
              companies.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- SEO Content Section for Home Page -->
    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="prose prose-slate mx-auto text-base leading-7 text-slate-700">
          <h2 id="seo-heading" class="text-3xl font-bold leading-tight tracking-tight text-slate-900">Build Your
            Perfect, ATS-Friendly Resume for Free</h2>
          <p class="mt-4">In today's competitive job market, a standout resume is more critical than ever. Most large
            companies use Applicant Tracking Systems (ATS) to screen candidates, and a poorly formatted resume can be
            automatically rejected before a human ever sees it. That's where ResuMate comes in. Our free resume builder
            is designed to create professional, clean, and ATS-friendly resumes that highlight your skills and
            experience effectively.</p>
          <p class="mt-4">Our tool guides you through every essential section, from personal information and a
            compelling summary to your work experience, skills, and education. We focus on proven layouts that are easy
            for both recruiters and software to read. With ResuMate, you're not just filling out a template; you're
            building a strategic document designed to pass the initial screening and impress hiring managers. Forget
            about fighting with word processors and complex formatting. Our intuitive interface allows you to focus on
            what truly matters: your content.</p>
          <h3 class="text-2xl font-semibold leading-tight tracking-tight text-slate-800 mt-12">Why an ATS-Optimized
            Resume Matters</h3>
          <p class="mt-4">An Applicant Tracking System is software that scans resumes for keywords, job titles, and
            specific formatting. If your resume isn't optimized for these systems, it might never reach the hiring
            manager's desk. Key elements for ATS compliance include standard fonts, clear section headings, and relevant
            keywords from the job description. Our builder ensures your resume adheres to these best practices,
            significantly increasing your chances of landing an interview. You can confidently apply for jobs knowing
            your resume is built to succeed.</p>
          <h3 class="text-2xl font-semibold leading-tight tracking-tight text-slate-800 mt-12">Your Privacy is Our
            Priority</h3>
          <p class="mt-4">We believe your personal data should remain just that—personal. ResuMate operates entirely
            within your browser. All the information you enter is stored locally on your device and is never sent to our
            servers. You can create, edit, and save your draft with the peace of mind that your information is secure
            and private. When you're ready, you can export a high-quality PDF of your resume with a single click. Start
            building your future today with a tool that respects your privacy and empowers your career goals.</p>
        </div>
      </div>
    </section>
    <!-- FAQ Section -->
    <div class="py-12 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div class="mt-10 max-w-3xl mx-auto">
          <dl class="space-y-8">
            <div>
              <dt class="text-lg font-medium text-gray-900">What is an ATS-friendly resume?</dt>
              <dd class="mt-2 text-base text-gray-500">
                An Applicant Tracking System (ATS) is software used by companies to scan and rank job applications. An
                <strong>ATS-friendly resume</strong> is formatted to be easily read by this software, using a clean
                layout, standard fonts, and clear sections. This increases your chances of your application being seen
                by a human recruiter.
              </dd>
            </div>
            <div>
              <dt class="text-lg font-medium text-gray-900">Is Resume Mate really free?</dt>
              <dd class="mt-2 text-base text-gray-500">
                Yes, it's 100% free. There are no hidden fees, premium versions, or account requirements. Our goal is to
                provide a simple, accessible tool for everyone.
              </dd>
            </div>
            <div>
              <dt class="text-lg font-medium text-gray-900">Do you store my personal data?</dt>
              <dd class="mt-2 text-base text-gray-500">
                No. We are a privacy-first service. All the information you enter is stored locally in your browser's
                storage and is never sent to our servers. If you clear your browser cache, the data will be gone.
              </dd>
            </div>
            <div>
              <dt class="text-lg font-medium text-gray-900">Why should I use an ATS-friendly resume builder?</dt>
              <dd class="mt-2 text-base text-gray-500">
                Over 90% of large companies use an ATS to filter candidates. If your resume isn't formatted correctly,
                it might be automatically rejected before a person ever sees it. Using a builder designed for this
                purpose ensures your skills and experience are properly recognized.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <div className="my-3 flex justify-center">
      <Adsense class="max-w-[728px] w-full" client="ca-pub-123456789" slot="9783500294" format="auto" responsive="true" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { setMeta } from '../utils/seo'
import Adsense from '~/components/Adsense.vue'

onMounted(() => {
  setMeta({
    title: 'ResuMate | Free ATS Friendly Resume Builder | Create an ATS Resume',
    description: 'Build a professional, ATS-friendly resume for free. Our resume builder helps you create a job-winning resume that passes Applicant Tracking Systems. Features live preview, privacy-first design, and PDF export.',
    url: window.location.href,
  })
})
</script>

<style scoped>
.form-input {
  @apply mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100;
}

.form-textarea {
  @apply mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100;
}
</style>
