<script setup>
import { useDisplayStore } from "@/stores/DisplayStore";

import AnnouncementGallery from "./AnnouncementGallery.vue";
import AnnouncementDetails from "./AnnouncementDetails.vue";
import AnnouncementPrice from "./AnnouncementPrice.vue";

const props = defineProps({
  announcement: Object,
  open: Boolean,
});

const emit = defineEmits(["toggle"]);

const displayStore = useDisplayStore();
</script>

<template>
  <v-card class="bg-blue-darken-4">
    <AnnouncementGallery :images="announcement.images" />

    <v-card-title>
      {{ announcement.title }}
    </v-card-title>

    <!-- DESKTOP -->
    <AnnouncementDetails
      v-if="displayStore.mdAndUp"
      :announcement="announcement"
    />

    <!-- MOBILE -->
    <div v-else>
      <v-card-actions>
        <v-btn
          color="yellow-darken-3"
          text="Detalhes"
          :prepend-icon="open ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="emit('toggle')"
        />
      </v-card-actions>

      <v-expand-transition>
        <div v-show="open">
          <v-divider />

          <AnnouncementDetails :announcement="announcement" />
        </div>
      </v-expand-transition>
    </div>

    <AnnouncementPrice :price="announcement.price" />
  </v-card>
</template>
