<script setup>
import { ref } from "vue";

const show = ref(false);
</script>

<template>
  <div>
    <h1>Welcome to the Home View</h1>
    <v-row class="ma-4">
      <v-col cols="12" sm="6" md="4">
        <v-card class="bg-blue-darken-4 mx-auto">
          <v-img
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            cover
          ></v-img>
          <v-card-title>Casa bem da hora</v-card-title>
          <v-spacer />
          <div class="d-flex flex-column ga-1">
            <v-card-subtitle> Joinville - SC </v-card-subtitle>
            <v-card-subtitle>
              Casa em condomínio fechado, com segurança 24h.
            </v-card-subtitle>
            <v-card-subtitle>
              3 quartos, 2 banheiros, sala ampla e cozinha planejada.
            </v-card-subtitle>
            <v-card-subtitle> 250m² de área do imóvel </v-card-subtitle>
          </div>
          <v-spacer />
          <div class="d-flex mt-2 mx-4 justify-space-between align-center mb-8">
            <v-btn color="yellow-darken-3">Detalhes</v-btn>
            <h1 class="">R$ 850.000,00</h1>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card class="bg-blue-darken-4 mx-auto">
          <v-img
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            cover
          ></v-img>
          <v-card-title>Casa bem da hora</v-card-title>
          <v-spacer />
          <v-card-actions>
            <v-btn color="yellow-darken-3" text="Detalhes"></v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show = !show"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider />
              <v-card-subtitle class="mt-2"> Joinville - SC </v-card-subtitle>
              <v-card-subtitle>
                Casa em condomínio fechado, com segurança 24h.
              </v-card-subtitle>
              <v-card-subtitle>
                3 quartos, 2 banheiros, sala ampla e cozinha planejada.
              </v-card-subtitle>
              <v-card-subtitle> 250m² de área do imóvel </v-card-subtitle>
            </div>
          </v-expand-transition>
          <v-spacer />
          <div class="d-flex mt-2 mx-4 align-center mb-8">
            <h1 class="">R$ 850.000,00</h1>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card class="bg-blue-darken-4 mx-auto">
          <v-img
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            cover
          ></v-img>
          <v-card-title>Casa bem da hora</v-card-title>
          <v-spacer />
          <div class="d-flex flex-column ga-1">
            <v-card-subtitle> Joinville - SC </v-card-subtitle>
            <v-card-subtitle>
              Casa em condomínio fechado, com segurança 24h.
            </v-card-subtitle>
            <v-card-subtitle>
              3 quartos, 2 banheiros, sala ampla e cozinha planejada.
            </v-card-subtitle>
            <v-card-subtitle> 250m² de área do imóvel </v-card-subtitle>
          </div>
          <v-spacer />
          <div class="d-flex mt-2 mx-4 align-center mb-8">
            <h1 class="">R$ 850.000,00</h1>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
