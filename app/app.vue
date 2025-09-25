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
                <img src="/logo.svg" alt="ResumMate Logo" class="" />
              </div>
              <div>
                <h1 class="text-lg font-semibold tracking-tight">ResumMate</h1>
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
    
    <!-- Global footer -->
    <footer class="border-t border-slate-200 bg-white">
      <div class="mx-auto max-w-7xl space-y-2 px-4 py-6 text-center text-sm text-slate-500">
        <p>&copy; 2025 ResumMate. All rights reserved.</p>
        <p>Your data stays in your browser.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
