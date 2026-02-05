<script setup>
import { ref } from "vue";
import { useDisplayStore } from "@/stores/DisplayStore";

const displayStore = useDisplayStore();

const show = ref(false);
</script>

<template>
  <div>
    <h1>Welcome to the Home View</h1>
    <v-row class="ma-4">
      <v-col cols="12" sm="4" md="3">
        <v-card class="bg-blue-darken-4 mx-auto">
          <v-carousel
            height="200"
            show-arrows="hover"
            transition-duration="700"
            crossfade
            hide-delimiters
          >
            <v-carousel-item
              src="/images/casa_1/frente.webp"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="/images/casa_1/quarto.webp"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="/images/casa_1/cozinha.webp"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="/images/casa_1/banheiro.webp"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="/images/casa_4/sala.webp"
              cover
            ></v-carousel-item>
          </v-carousel>
          <v-card-title>Casa bem da hora</v-card-title>
          <v-spacer />
          <span v-if="displayStore.mdAndUp">
            <div class="d-flex flex-column ga-1">
              <v-card-subtitle>Guanabara, Joinville - SC </v-card-subtitle>
              <v-card-subtitle>
                1 Suíte | 3 quartos | 2 banheiros | 1 área externa
              </v-card-subtitle>
              <v-card-subtitle> 250m² de área do imóvel </v-card-subtitle>
            </div>
            <v-spacer />
          </span>
          <span v-if="!displayStore.mdAndUp">
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
          </span>
          <v-spacer />
          <div class="d-flex mt-2 mx-4 align-center mb-8">
            <h1 class="">R$ 850.000,00</h1>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4" md="3">
        <v-card class="bg-blue-darken-4 mx-auto">
          <v-carousel
            height="200"
            show-arrows="hover"
            transition-duration="700"
            crossfade
            hide-delimiters
          >
            <v-carousel-item
              src="/images/casa_2/frente.webp"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="/images/casa_2/quarto.webp"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="/images/casa_2/cozinha.webp"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="/images/casa_2/banheiro.webp"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="/images/casa_4/sala.webp"
              cover
            ></v-carousel-item>
          </v-carousel>
          <v-card-title>Casa bem da hora</v-card-title>
          <v-spacer />
          <span v-if="displayStore.mdAndUp">
            <div class="d-flex flex-column ga-1">
              <v-card-subtitle>Guanabara, Joinville - SC </v-card-subtitle>
              <v-card-subtitle>
                1 Suíte | 3 quartos | 2 banheiros | 1 área externa
              </v-card-subtitle>
              <v-card-subtitle> 250m² de área do imóvel </v-card-subtitle>
            </div>
            <v-spacer />
          </span>
          <span v-if="!displayStore.mdAndUp">
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
          </span>
          <v-spacer />
          <div class="d-flex mt-2 mx-4 align-center mb-8">
            <h1 class="">R$ 850.000,00</h1>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4" md="3">
        <v-card class="bg-blue-darken-4 mx-auto">
          <v-carousel
            height="200"
            show-arrows="hover"
            transition-duration="700"
            crossfade
            hide-delimiters
          >
            <v-carousel-item
              src="/images/casa_4/frente.webp"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="/images/casa_4/quarto.webp"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="/images/casa_4/cozinha.webp"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="/images/casa_4/banheiro.webp"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="/images/casa_4/sala.webp"
              cover
            ></v-carousel-item>
          </v-carousel>
          <v-card-title>Casa bem da hora</v-card-title>
          <v-spacer />
          <span v-if="displayStore.mdAndUp">
            <div class="d-flex flex-column ga-1">
              <v-card-subtitle>Guanabara, Joinville - SC </v-card-subtitle>
              <v-card-subtitle>
                1 Suíte | 3 quartos | 2 banheiros | 1 área externa
              </v-card-subtitle>
              <v-card-subtitle> 250m² de área do imóvel </v-card-subtitle>
            </div>
            <v-spacer />
          </span>
          <span v-if="!displayStore.mdAndUp">
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
          </span>
          <v-spacer />
          <div class="d-flex mt-2 mx-4 align-center mb-8">
            <h1 class="">R$ 850.000,00</h1>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4" md="3">
        <v-card class="bg-blue-darken-4 mx-auto">
          <v-carousel
            height="200"
            show-arrows="hover"
            transition-duration="700"
            crossfade
            hide-delimiters
          >
            <v-carousel-item
              src="/images/casa_4/frente.webp"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="/images/casa_4/quarto.webp"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="/images/casa_4/cozinha.webp"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="/images/casa_4/banheiro.webp"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="/images/casa_4/sala.webp"
              cover
            ></v-carousel-item>
          </v-carousel>
          <v-card-title>Casa bem da hora</v-card-title>
          <v-spacer />
          <span v-if="displayStore.mdAndUp">
            <div class="d-flex flex-column ga-1">
              <v-card-subtitle>Guanabara, Joinville - SC </v-card-subtitle>
              <v-card-subtitle>
                1 Suíte | 3 quartos | 2 banheiros | 1 área externa
              </v-card-subtitle>
              <v-card-subtitle> 250m² de área do imóvel </v-card-subtitle>
            </div>
            <v-spacer />
          </span>
          <span v-if="!displayStore.mdAndUp">
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
          </span>
          <v-spacer />
          <div class="d-flex mt-2 mx-4 align-center mb-8">
            <h1 class="">R$ 850.000,00</h1>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
