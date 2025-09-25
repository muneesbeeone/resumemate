<template>
  <div v-if="client && slot && mounted" class="my-6 flex justify-center">
    <ins
      class="adsbygoogle block"
      style="display: block; text-align: center;"
      :data-ad-client="client"
      :data-ad-slot="slot"
      :data-ad-format="format"
      :data-full-width-responsive="responsive"
    ></ins>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

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

const mounted = ref(false);

onMounted(() => {
  // Push the ad once the component is mounted and the script is loaded
  pushAd();
});

const pushAd = () => {
  if (props.client && props.slot) {
    setTimeout(() => {
      try {
        (window as any).adsbygoogle = (window as any).adsbygoogle || [];
        (window as any).adsbygoogle.push({});
        mounted.value = true;
      } catch (e) {
        console.error('Adsense error:', e);
      }
    }, 500);
  }
};

</script>

<style scoped>
.adsbygoogle {
  max-width: 100%;
}
</style>
