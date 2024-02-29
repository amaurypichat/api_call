<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyComponent",

  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
  },

  setup(props) {
    return {
      title: props.title,
      description: props.description,
    };
  },
});
</script>

<template>
  <div class="my-component">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<!-- <template>
    Hello, World!
  </template>
  
  <script>
    export default {}
  </script> -->