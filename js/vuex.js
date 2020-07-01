// make sure to call Vue.use(Vuex) if using a module system

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment: (state) => state.count++,
    decrement: (state) => state.count--,
  },
});

const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};

new Vue({
  el: "#app",
  store,
  components: { Counter },
  template: `
    <div class="app">
      <counter></counter>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>
  `,
  methods: {
    increment() {
      store.commit("increment");
    },
    decrement() {
      store.commit("decrement");
    },
  },
});
