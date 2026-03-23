<script setup>
const props = defineProps({
  tag: Object,
});

</script>

<template>
    <v-chip>
        {{ tag.name }}
    </v-chip>
</template>