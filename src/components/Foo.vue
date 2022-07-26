<template>
  <div class="jest">
    <div class="name">{{ name }}</div>
    <div class="name">{{ name }}{{ text }}</div>
    <div class="text" @click="add">{{ text }}</div>
  </div>
</template>
<script>
export default {
  name: "Foo",
  props: {
    name: {
      type: String,
      default: "啦啦啦",
    },
  },
  data() {
    return {
      text: 123,
    };
  },
  methods: {
    add() {
      this.text += 1;
    },
  },
};
</script>