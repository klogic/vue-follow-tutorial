Vue.component("blog-post", {
  props: ["post"],
  template: `
   <div class="blog-post">
  <button v-on:click="$emit('enlarge-text', 0.1)">
       Enlarge text
      </button>
      <h3>{{post.id}} - {{  post.title }}</h3></div>`,
});

new Vue({
  el: "#blog-post-demo",
  data: {
    posts: [
      { id: 1, title: "My journey with Vue" },
      { id: 2, title: "Blogging with Vue" },
      { id: 3, title: "Why Vue is so fun" },
    ],
    postFontSize: 1,
  },
  methods: {
    onEnlargeText: function (enlargeAmount) {
      this.postFontSize += enlargeAmount;
    },
  },
});

Vue.component("custom-input", {
  props: ["value"],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `,
});
new Vue({
  el: "#custom-input-div",
  data: {
    searchText: "",
  },
});
Vue.component("alert-box", {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `,
});
new Vue({
  el: "#alert-box-div",
  data: {},
});

Vue.component("tab-home", {
  template: "<div>Home component</div>",
});
Vue.component("tab-posts", {
  template: "<div>Posts component</div>",
});
Vue.component("tab-archive", {
  template: "<div>Archive component</div>",
});
new Vue({
  el: "#dynamic-component-demo",
  data: {
    currentTab: "Home",
    tabs: ["Home", "Posts", "Archive"],
  },
  computed: {
    currentTabComponent: function () {
      return "tab-" + this.currentTab.toLowerCase();
    },
  },
});
new Vue({
  el: "#style-object",
  data: {
    styleObject: {
      color: "red",
      fontSize: "50px",
    },
  },
});

var vm = new Vue({
  el: "#next-tick-example",
  data: {
    message: "123",
  },
});
vm.message = "new message"; // change data
vm.$el.textContent === "new message"; // false
console.log("before set new-message: ", vm.$el.textContent.trim());
Vue.nextTick(function () {
  vm.$el.textContent === "new message"; // true
  console.log("after set new-message and tick: ", vm.$el.textContent.trim());
});

// for nest example
new Vue({
  el: "#for-nest-example",
  data: {
    sets: [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
    ],
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0;
      });
    },
  },
});
