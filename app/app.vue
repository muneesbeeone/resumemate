<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const isDrawerOpen = ref(false)

function exportPdf() {
  window.dispatchEvent(new CustomEvent('export-pdf'))
}

function clearDraft() {
  window.dispatchEvent(new CustomEvent('clear-draft'))
}

const route = useRoute()
const isBuilderPage = computed(() => route.path === '/builder')
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-800">
    <!-- Global header -->
    <header class="border-b border-slate-200 bg-white">
      <div class="mx-auto max-w-7xl px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <NuxtLink to="/" class="flex items-center gap-3">
              <div
                class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm">
                <img src="/logo.svg" alt="ResuMate Logo" class="" />
              </div>
              <div>
                <h1 class="text-lg font-semibold tracking-tight">ResuMate</h1>
                <p class="text-xs text-slate-500">Free, ATS-friendly resume builder</p>
              </div>
            </NuxtLink>
          </div>

          <!-- Hamburger button (mobile) -->
          <div class="sm:hidden">
            <button @click="isDrawerOpen = true" type="button"
              class="flex items-center justify-center rounded-lg p-2 text-slate-500 hover:bg-slate-100">
              <span class="sr-only">Open main menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                <path
                  d="M3 4h18a1 1 0 010 2H3a1 1 0 010-2zm0 7h18a1 1 0 010 2H3a1 1 0 010-2zm0 7h18a1 1 0 010 2H3a1 1 0 010-2z" />
              </svg>
            </button>
          </div>

          <!-- Desktop navigation -->
          <nav class="hidden items-center gap-2 sm:flex">
            <NuxtLink to="/" class="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50">Home
            </NuxtLink>
            <NuxtLink to="/tips" class="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
              Resume Tips</NuxtLink>
            <NuxtLink to="/examples"
              class="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50">Examples</NuxtLink>
            <NuxtLink to="/about" class="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
              About</NuxtLink>
            <div class="ml-4 flex items-center gap-2" v-if="isBuilderPage">
              <button @click="exportPdf"
                class="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700">Export
                PDF</button>
              <button @click="clearDraft"
                class="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">Clear
                Draft</button>
            </div>
          </nav>
        </div>
      </div>

      <!-- Mobile drawer -->
      <div v-if="isDrawerOpen" class="relative z-50 sm:hidden" role="dialog" aria-modal="true">
        <!-- Overlay -->
        <div @click="isDrawerOpen = false" class="fixed inset-0 bg-slate-900/20 backdrop-blur-sm" />

        <!-- Drawer panel -->
        <div class="fixed inset-y-0 right-0 w-full max-w-xs bg-white">
          <div class="flex h-full flex-col divide-y divide-slate-200">
            <div class="p-4">
              <button @click="isDrawerOpen = false" type="button"
                class="ml-auto flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100">
                <span class="sr-only">Close menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                  <path
                    d="M12 10.586l4.95-4.95a1 1 0 011.414 1.414L13.414 12l4.95 4.95a1 1 0 01-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 01-1.414-1.414L10.586 12 5.636 7.05a1 1 0 011.414-1.414L12 10.586z" />
                </svg>
              </button>
            </div>
            <nav @click="isDrawerOpen = false" class="flex flex-col gap-2 p-4">
              <NuxtLink to="/" class="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50">
                Builder</NuxtLink>
              <NuxtLink to="/tips" class="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50">
                Resume Tips</NuxtLink>
              <NuxtLink to="/examples"
                class="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50">Examples</NuxtLink>
              <NuxtLink to="/about" class="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50">
                About</NuxtLink>
            </nav>
            <div class="flex flex-col gap-2 p-4">
              <button @click="exportPdf"
                class="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700">Export
                PDF</button>
              <button @click="clearDraft"
                class="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-base font-medium text-slate-700 shadow-sm hover:bg-slate-50">Clear
                Draft</button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <main>
      <NuxtPage></NuxtPage>
    </main>
    <Adsense client="ca-pub-123456789" slot="9783500294" format="auto" responsive="true"></Adsense>
    <!-- Floating Buy Me a Coffee button -->
    <a
      href="https://buymeacoffee.com/munees"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Support on Buy Me a Coffee"
      class="print:hidden fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 font-medium text-slate-900 shadow-lg hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-transform duration-200 hover:scale-105 active:scale-95 bmc-float"
    >
      <span class="inline-flex items-center gap-2 bmc-like">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
          <path d="M3 6.75A.75.75 0 013.75 6h12.5a.75.75 0 01.744.648l.5 3.5A2.75 2.75 0 0115.77 13H13.5a5.5 5.5 0 01-10.9 0H2.75a.75.75 0 010-1.5h.94l.44-3.08A.75.75 0 013 7.75V6.75zm3.1 6.25a4 4 0 007.8 0H6.1zM18 7.5h1.25A2.75 2.75 0 0122 10.25v.5A2.75 2.75 0 0119.25 13H18a.75.75 0 010-1.5h1.25c.69 0 1.25-.56 1.25-1.25v-.5c0-.69-.56-1.25-1.25-1.25H18A.75.75 0 0118 7.5z"/>
        </svg>
        <span class="hidden sm:inline">Buy me a coffee</span>
      </span>
    </a>
    <!-- Global footer -->
    <footer class="border-t border-slate-200 bg-white">
      <div class="mx-auto max-w-7xl space-y-2 px-4 py-6 text-center text-sm text-slate-500">
        <p>&copy; 2025 ResuMate. All rights reserved.</p>
        <p>Your data stays in your browser.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@keyframes bmcFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

.bmc-float {
  animation: bmcFloat 3s ease-in-out infinite;
}

/* subtle like-style bob with tiny rotation on inner content */
@keyframes bmcLike {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-2px) rotate(-2deg); }
  50% { transform: translateY(0) rotate(0deg); }
  75% { transform: translateY(-2px) rotate(2deg); }
}

.bmc-like {
  animation: bmcLike 2.5s ease-in-out infinite;
}
</style>
