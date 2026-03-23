<script setup>
import headerComponent from "./components/headerComponent.vue";
</script>

<template>
  <v-app>
    <headerComponent />
    <v-main class="bg-grey-lighten-1">
      <router-view />
    </v-main>
  </v-app>
</template>

<!-- Para rodar: json-server --watch db.json --port 3000 -->
