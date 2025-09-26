<template>
  <ClientOnly>
    <div v-if="client && slot && isRendered" class="my-6 flex justify-center">
      <ins
        class="adsbygoogle block"
        style="display: block; text-align: center;"
        :data-ad-client="client"
        :data-ad-slot="slot"
        :data-ad-format="format"
        :data-full-width-responsive="responsive"
      ></ins>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface Props {
  client: string;
  slot: string;
  format?: string;
  responsive?: string;
}

const props = withDefaults(defineProps<Props>(), {
  client: 'ca-pub-4391323106927085',
  slot: '9783500294',
  format: 'auto',
  responsive: 'true',
});

const isRendered = ref(false);

onMounted(() => {
  // Ensure the <ins> is in the DOM before pushing
  isRendered.value = true;
  ensureAdsenseScript().then(() => {
    pushAd();
  });
});

function ensureAdsenseScript(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') return resolve();

    const existing = document.querySelector<HTMLScriptElement>(
      'script[src^="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'
    );

    if (existing) {
      if ((window as any).adsbygoogle) return resolve();
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => resolve());
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(props.client)}`;
    script.setAttribute('crossorigin', 'anonymous');
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.head.appendChild(script);
  });
}

function pushAd() {
  try {
    (window as any).adsbygoogle = (window as any).adsbygoogle || [];
    (window as any).adsbygoogle.push({});
  } catch (e) {
    console.error('Adsense error:', e);
  }
}

</script>

<style scoped>
.adsbygoogle {
  max-width: 100%;
}
</style>
