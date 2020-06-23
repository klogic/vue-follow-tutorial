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
