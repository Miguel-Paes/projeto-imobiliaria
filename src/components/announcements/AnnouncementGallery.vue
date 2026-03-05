<script setup>
const props = defineProps({
  images: Array,
});
</script>

<template>
  <v-carousel
    height="200"
    show-arrows="hover"
    transition-duration="700"
    crossfade
  >
    <v-carousel-item
      v-for="(image, index) in images"
      :key="index"
      :src="image"
      cover
      loading="lazy"
    />
  </v-carousel>
</template>
