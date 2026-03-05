<script setup>
import { ref, onMounted } from "vue";
import { useAnnouncementsStore } from "@/stores/AnnouncementsStore";
import AnnouncementCard from "@/components/announcements/ AnnouncementCard.vue";

const announcementsStore = useAnnouncementsStore();

const openCard = ref(null);

function toggleCard(id) {
  openCard.value = openCard.value === id ? null : id;
}

onMounted(() => {
  announcementsStore.fetchAnnouncements();
});
</script>

<template>
  <div>
    <h1 class="ma-4">Imóveis disponíveis</h1>

    <!-- Loading -->
    <v-row v-if="announcementsStore.loading">
      <v-col v-for="i in 6" :key="i" cols="12" sm="6" md="3">
        <v-skeleton-loader type="card" />
      </v-col>
    </v-row>

    <!-- Lista -->
    <v-row v-else class="ma-4">
      <v-col
        v-for="announcement in announcementsStore.items"
        :key="announcement.id"
        cols="12"
        sm="6"
        md="3"
      >
        <AnnouncementCard
          :announcement="announcement"
          :open="openCard === announcement.id"
          @toggle="toggleCard(announcement.id)"
        />
      </v-col>
    </v-row>
  </div>
</template>
