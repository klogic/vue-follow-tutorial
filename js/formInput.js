new Vue({
  el: "#simple-text-input",
  data: {
    message: null,
  },
});

new Vue({
  el: "#multiple-checkbox-example",
  data: {
    checkedNames: [],
  },
});

new Vue({
  el: "#radio-example",
  data: {
    picked: null,
  },
});
new Vue({
  el: "#value-binding-example",
  data: {
    selected: "",
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
  el: "#value-binding-component",
  data: {
    searchText: "",
  },
});

// bind props and change template to h1 and print HI
Vue.component("blog-post", {
  props: ["post"],
  template: `<h1>{{post}}Hi</h1>`,
});

new Vue({
  el: "#pass-prop-object",
  data: {
    post: {
      id: 1,
      title: "My Journey with Vue",
    },
  },
});
