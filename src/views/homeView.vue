<script setup>
import { ref } from "vue";
import { useDisplayStore } from "@/stores/DisplayStore";
import { useAnnouncementsStore } from "@/stores/AnnouncementsStore";

const displayStore = useDisplayStore();
useAnnouncementsStore;
const announcementsStore = useAnnouncementsStore();

const show = ref(false);
</script>

<template>
  <div>
    <h1>Welcome to the Home View</h1>
    <v-row class="ma-4">
      <v-col
        cols="12"
        sm="4"
        md="3"
        v-for="announcement in announcementsStore.items"
        :key="announcement.title"
      >
        <v-card class="bg-blue-darken-4 mx-auto">
          <v-carousel
            height="200"
            show-arrows="hover"
            transition-duration="700"
            crossfade
          >
            <v-carousel-item
              v-for="(image, index) in announcement.images"
              :key="index"
              :src="image"
              cover
            ></v-carousel-item>
          </v-carousel>
          <v-card-title>{{ announcement.title }}</v-card-title>
          <v-spacer />
          <span v-if="displayStore.mdAndUp">
            <div class="d-flex flex-column ga-1">
              <v-card-subtitle>{{
                announcement.localization.logradouro +
                ", " +
                announcement.localization.numero +
                " - " +
                announcement.localization.bairro +
                " | " +
                announcement.localization.cidade +
                " - " +
                announcement.localization.uf
              }}</v-card-subtitle>
              <v-card-subtitle>
                {{ announcement.comodos.suite }} Suíte<span
                  v-if="announcement.comodos.suite > 1"
                  >s</span
                >
                | {{ announcement.comodos.quarto }} quarto<span
                  v-if="announcement.comodos.quarto > 1"
                  >s</span
                >
                | {{ announcement.comodos.banheiro }} banheiro<span
                  v-if="announcement.comodos.banheiro > 1"
                  >s</span
                >
                | {{ announcement.comodos.extra1 }}
              </v-card-subtitle>
              <v-card-subtitle>
                {{ announcement.area }}m² de área do imóvel
              </v-card-subtitle>
            </div>
            <v-spacer />
            <div class="d-flex mt-2 mx-4 align-center mb-8">
              <h1 class="">
                {{
                  announcement.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                }}
              </h1>
            </div>
          </span>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
