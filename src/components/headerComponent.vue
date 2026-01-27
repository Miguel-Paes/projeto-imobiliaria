<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const drawer = ref(false);

const specialItems = ref([
  {
    title: "Anuncie seu Imóvel",
    icon: "mdi-shield-account",
    route: "/post-property",
  },
]);

const items = ref([
  { title: "Início", icon: "mdi-home", route: "/" },
  { title: "Meu perfil", icon: "mdi-login", route: "/account" },
]);

const bottomItems = ref([
  { title: "Sobre nós", icon: "mdi-information", route: "/about" },
  { title: "Contate-nos", icon: "mdi-phone", route: "/contact" },
]);

const alterPage = (route) => {
  router.push(route);
  drawer.value = false;
};
</script>

<template>
  <v-app-bar color="blue-darken-4">
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>Imobiliária</v-toolbar-title>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    :location="$vuetify.display.mobile ? 'bottom' : undefined"
    class="d-flex"
    temporary
    color="blue-darken-4"
  >
    <v-list>
      <v-btn
        v-for="item in specialItems"
        :key="item.title"
        class="bg-yellow-darken-3 rounded-pill px-10 py-6 ml-1 d-flex mt-10"
        @click="alterPage(item.route)"
      >
        {{ item.title }}
      </v-btn>
    </v-list>

    <v-list class="mt-5 d-flex flex-column ga-2">
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.route"
        class="text-white"
        @click="alterPage(item.route)"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <v-list class="d-flex justify-center ga-2 chip-list">
      <v-list-item
        v-for="item in bottomItems"
        :key="item.title"
        :to="item.route"
        class="text-white rounded-pill chip"
        @click="alterPage(item.route)"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.chip-list {
  position: absolute;
  bottom: 10px;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
}

.chip {
  border: 1px solid white;
  padding: 5px 15px;
}
</style>
