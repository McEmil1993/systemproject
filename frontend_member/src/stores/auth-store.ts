import { defineStore } from 'pinia';

export const useAuthStore = defineStore('counter', {
  state: () => ({
    token: "",
    id: "",
  }),

  getters: {
  },

  actions: {
    setAuth(id:string, token:string) {
      this.id = id;
      this.token = token;
    },
    removeAuth() {
      this.id = "";
      this.token = "";
    }
  }
});
