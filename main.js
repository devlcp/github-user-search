const api = 'https://api.github.com/users/'


const app = Vue.createApp({
  data() {
    return {
      query: "devlcp",
      searching: null,
      error: null,
      user: {},
    }
  },
  mounted() {
    this.doSearch();
  },
  methods: {
    async doSearch() {
      try {
        this.searching = true;
        const res = await fetch(api + this.query)

        if(!res.ok) throw new Error("Usuario no existe!");
        const data = await res.json();
        this.user = data;
        this.error = false;
      } catch (err) {
        this.error = err.message
      } finally {
        this.query = null;
        this.searching = null;
      }
      
    }
  }
})

app.mount('#app')
