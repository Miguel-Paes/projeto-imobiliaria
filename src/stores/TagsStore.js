import { defineStore } from "pinia";

export const useTagsStore = defineStore("tags", {
  state: () => ({
    items: [],
    loading: false,
    error: null
  }),

  actions: {
    async fetchTags() {
      this.loading = true;
      this.error = null;
      try {
        const res = await fetch("http://localhost:3001/tags");
        if (!res.ok) throw new Error("Erro ao buscar tags");
        this.items = await res.json();
      } catch (err) {
        this.error = err.message;
        console.error(err);
      } finally {
        this.loading = false;
        console.log("Tags carregadas:", this.items);
      }
    }
  }
});