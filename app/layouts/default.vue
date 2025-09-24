<template>
  <div>
    <main class="min-h-screen">
      <!-- This slot will render your page content -->
      <slot />
    </main>

    <!-- AdSense component in the footer of every page -->
    <footer class="mt-8">
      <Adsense
        client="ca-pub-4391323106927085"
        slot="9783500294"
        format="auto"
        responsive="true"
      />
    </footer>
  </div>
</template>

<script setup lang="ts">
import Adsense from '~/components/Adsense.vue';

// The Adsense component is auto-imported by Nuxt
</script>