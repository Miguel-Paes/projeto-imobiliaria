import { defineStore } from "pinia";

export const useAnnouncementsStore = defineStore("announcements", {
  state: () => ({
    items: [],
    loading: false,
    error: null
  }),

  actions: {
    async fetchAnnouncements() {
      this.loading = true;
      this.error = null;
      try {
        const res = await fetch("http://localhost:3001/announcements");
        if (!res.ok) throw new Error("Erro ao buscar anúncios");
        this.items = await res.json();
      } catch (err) {
        this.error = err.message;
        console.error(err);
      } finally {
        this.loading = false;
      }
    }
  }
});