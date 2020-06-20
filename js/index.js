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
  beforeCreate: function () {
    console.log("This is beforeCreate" + this.a);
  },
  created: function () {
    console.log("This is created" + this.a);
  },
  beforeMount: function () {
    console.log("This is beforeMount" + this.a);
  },
  mounted: function () {
    console.log("This is mounted" + this.a);
  },
  beforeUpdate: function () {
    console.log("This is beforeUpdate" + this.a);
  },
  updated: function () {
    console.log("This is updated" + this.a);
  },
  beforeDistroy: function () {
    console.log("This is beforeDistroy" + this.a);
  },
  distroyed: function () {
    console.log("This is distroyed" + this.a);
  },
});
vm.$watch("a", function (newValue, oldValue) {
  console.log(oldValue + " has trigger to ", newValue);
  // This callback will be called when `vm.a` changes
});
var withoutVHtml = new Vue({
  el: "#without-v-html",
  data: {
    data: "<span style='color:red'>this should be red</span>",
  },
});

var withVHtml = new Vue({
  el: "#with-v-html",
  data: {
    data: "<span style='color:red'>this should be red</span>",
  },
});

new Vue({
  el: "#example-2",
  data: {
    firstName: "Foo",
    lastName: "Bar",
    fullName: "Foo Bar",
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + " " + this.lastName;
    },
    lastName: function (val) {
      this.fullName = this.firstName + " " + val;
    },
  },
});
