<template>
  <div v-if="client && mounted" class="my-6 flex justify-center">
    <ins class="adsbygoogle block" style="display:block; text-align:center;" :data-ad-client="client" :data-ad-slot="slot" :data-ad-format="format" :data-full-width-responsive="responsive"></ins>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface Props {
  client?: string
  slot?: string
  format?: string
  responsive?: string
}

const props = withDefaults(defineProps<Props>(), {
  client: '',
  slot: '',
  format: 'auto',
  responsive: 'true',
})

const mounted = ref(false)

onMounted(() => {
  const client = props.client
  if (!client) return

  // Load AdSense script only once
  if (!(window as any).adsbygoogleLoaded) {
    const s = document.createElement('script')
    s.async = true
    s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`
    s.crossOrigin = 'anonymous'
    document.head.appendChild(s)
    ;(window as any).adsbygoogleLoaded = true
  }

  // Wait a tick then push
  setTimeout(() => {
    try {
      ;(window as any).adsbygoogle = (window as any).adsbygoogle || []
      ;(window as any).adsbygoogle.push({})
      mounted.value = true
    } catch (e) {
      // ignore
    }
  }, 500)
})
</script>

<style scoped>
.adsbygoogle {
  max-width: 100%;
}
</style>
