<template>
  <section :id="id" class="rounded-xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
    <header class="mb-4 flex items-start justify-between gap-3">
      <div>
        <h2 class="text-lg font-semibold text-slate-800">{{ title }}</h2>
        <p v-if="description" class="mt-1 text-sm text-slate-500">{{ description }}</p>
      </div>
      <slot name="actions" />
    </header>

    <div class="grid gap-4">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  id?: string
  title: string
  description?: string
}

withDefaults(defineProps<Props>(), {
  id: undefined,
  description: '',
})
</script>
