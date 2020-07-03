// // make sure to call Vue.use(Vuex) if using a module system
// const mapState = Vuex.mapState;
// const store = new Vuex.Store({
//   state: {
//     count: 0,
//   },
//   mutations: {
//     increment: (state) => state.count++,
//     decrement: (state) => state.count--,
//   },
// });

// const Counter = {
//   template: `<div>
//   </br>
//   count: {{count}}
//   </br>
//   countAlias: {{countAlias}}
//   </br>
//   countPlusLocalState: {{ countPlusLocalState }}</div>`,
//   data() {
//     return { localCount: 3 };
//   },
//   computed: mapState({
//     count: (state) => state.count,
//     countAlias: "count",
//     countPlusLocalState(state) {
//       return state.count + this.localCount;
//     },
//   }),
// };

// new Vue({
//   el: "#app",
//   store,
//   components: { Counter },
//   template: `
//     <div class="app">
//       <counter></counter>
//       <button @click="increment">+</button>
//       <button @click="decrement">-</button>
//     </div>
//   `,
//   methods: {
//     increment() {
//       store.commit("increment");
//     },
//     decrement() {
//       store.commit("decrement");
//     },
//   },
// });

const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
    ],
  },
  getters: {
    doneTodos: (state) => {
      return state.todos.filter((todo) => todo.done);
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    },
    getTodoById: (state) => (id) => {
      return state.todos.find((todo) => todo.id === id);
    },
  },
});
new Vue({
  el: "#app",
  store,
  data: {},
  template: `
    <div class="app">
      doneTodosCount: {{doneTodosCount}}
    </div>
  `,
  computed: {
    doneTodosCount() {
      return this.$store.getters.doneTodosCount;
    },
  },
});

console.log("hi", store.getters.getTodoById(2));
