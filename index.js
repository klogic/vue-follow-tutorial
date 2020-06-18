Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>",
});

var app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      { id: 0, text: "Vegetables" },
      { id: 1, text: "Cheese" },
      { id: 2, text: "Whatever else humans are supposed to eat" },
    ],
  },
});

// Define a new component called button-counter
Vue.component("button-counter", {
  data: function () {
    return {
      count: 0,
    };
  },
  template:
    '<button v-on:click="count++">You clicked me {{ count }} times.</button>',
});

new Vue({ el: "#components-demo" });

var data = { a: 1 };
var vm = new Vue({
  el: "#example",
  data: data,
});
vm.$watch("a", function (newValue, oldValue) {
  console.log(oldValue + " has trigger to ", newValue);
  // This callback will be called when `vm.a` changes
});
