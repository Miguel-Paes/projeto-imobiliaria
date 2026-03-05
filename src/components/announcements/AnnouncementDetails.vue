<script setup>
const props = defineProps({
  announcement: Object,
});
</script>

<template>
  <div class="d-flex flex-column ga-1">
    <v-card-subtitle>
      {{ announcement.localization.logradouro }},
      {{ announcement.localization.numero }} -
      {{ announcement.localization.bairro }} |
      {{ announcement.localization.cidade }}
    </v-card-subtitle>

    <v-card-subtitle>
      {{ announcement.comodos.suite }} suíte |
      {{ announcement.comodos.quarto }} quartos |
      {{ announcement.comodos.banheiro }} banheiros
    </v-card-subtitle>

    <v-card-subtitle> {{ announcement.area }} m² </v-card-subtitle>
  </div>
</template>
