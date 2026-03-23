<script setup>
import { ref, onMounted } from "vue";
import { useAnnouncementsStore } from "@/stores/AnnouncementsStore";
import { useTagsStore } from "@/stores/TagsStore";
import AnnouncementCard from "@/components/announcements/ AnnouncementCard.vue";
import FilterComponent from "@/components/filterAndChips/FilterComponent.vue";

const announcementsStore = useAnnouncementsStore();
const tagsStore = useTagsStore();

const openCard = ref(null);

const filterDialog = ref(false);

function toggleCard(id) {
  openCard.value = openCard.value === id ? null : id;
}

onMounted(() => {
  announcementsStore.fetchAnnouncements();
  tagsStore.fetchTypes();
});
</script>

<template>
  <div>
    <!-- Top Bar-->
    <v-row>
      <v-col cols="6">
        <h1 class="ma-4">Imóveis disponíveis</h1>
      </v-col>
      <v-col cols="6" class="d-flex justify-end align-center pr-10">
        <v-btn
          color="yellow-darken-3"
          variant="flat"
          text="Filtrar anúncios"
          @click="filterDialog = !filterDialog"
        />
      </v-col>
    </v-row>

    <!-- Filter Dialog -->
    <v-dialog v-model="filterDialog" width="700">
      <v-card>
        <v-card-title>Filtrar anúncios por...</v-card-title>
        <v-card-text>
          <!-- Loading -->
          <v-row v-if="tagsStore.loading">
            <v-col v-for="i in 6" :key="i" cols="12" sm="6" md="3">
              <v-skeleton-loader type="card" />
            </v-col>
          </v-row>

          <!-- Filter options go here -->
          <FilterComponent 
            v-else
            v-for="type in tagsStore.types"
            :key="type.id"
            :type="type"
          />
        </v-card-text>
      </v-card>
    </v-dialog>

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
