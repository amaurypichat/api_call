<script setup>
import { inject, watchEffect, ref } from "vue";
watchEffect(() => {
      if(cart.value) {
        render.value = true
      }
      else {
        render.value = false
      }
    });
</script>

<template>
  {{ FF }}
</template>