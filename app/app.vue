<script setup lang="ts">
function exportPdf() {
  window.dispatchEvent(new CustomEvent('export-pdf'))
}

function clearDraft() {
  window.dispatchEvent(new CustomEvent('clear-draft'))
}
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-800">
    <!-- Global header -->
    <header class="border-b border-slate-200 bg-white">
      <div class="mx-auto max-w-7xl px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <a href="#/" class="flex items-center gap-3">
              <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5a1 1 0 10-2 0v5.382l-3.447 3.447a1 1 0 101.414 1.414L12 13.414l3.033 3.033a1 1 0 001.414-1.414L13 12.382V7z"/></svg>
              </div>
              <div>
                <h1 class="text-lg font-semibold tracking-tight">Resume Mate</h1>
                <p class="text-xs text-slate-500">Free, ATS-friendly resume builder</p>
              </div>
            </a>
          </div>

          <nav class="hidden items-center gap-2 sm:flex">
            <NuxtLink to="/" class="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50">Builder</NuxtLink>
            <NuxtLink to="/tips" class="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50">Resume Tips</NuxtLink>
            <NuxtLink to="/examples" class="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50">Examples</NuxtLink>
            <NuxtLink to="/about" class="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50">About</NuxtLink>
            <!-- <div v-if="currentHash === '/'" class="ml-4 flex items-center gap-2">
              <button @click="exportPdf" class="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700">Export PDF</button>
              <button @click="clearDraft" class="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">Clear Draft</button>
            </div> -->
          </nav>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <main>
      <NuxtPage></NuxtPage>
    </main>

    <!-- Global footer -->
    <footer class="border-t border-slate-200 bg-white">
      <div class="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-slate-500">
        Built with Vue 3 + TailwindCSS. Your data stays in your browser.
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
