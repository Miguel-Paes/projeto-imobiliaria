<script setup>
import { onMounted } from 'vue';
import { useTagsStore } from '@/stores/TagsStore';

import ChipsComponent from './ChipsComponent.vue';

const tagsStore = useTagsStore();

const props = defineProps({
  type: Object,
});

onMounted(() => {
  tagsStore.fetchTags();
});
</script>

<template>
    <div>
        <h3>{{ type.name }}</h3>
        <v-row>
        <v-col v-for="tag in tagsStore.tags" :key="tag.id" cols="12" sm="6" md="4">
            <ChipsComponent :tag="tag" />
        </v-col>
        </v-row>
    </div>
</template>