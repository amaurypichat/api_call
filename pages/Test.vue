<script setup>
// import Child from './Child.vue'
import { ref } from 'vue'

const msg = ref('Hello World!')

function Aa(){
        alert("ere")
    msg.value="kaka"
}
</script>

<template>
    <button @click="Aa()">AaAAAAAAAAAAAAAAA </button>
  <h1>{{ msg }}</h1>
  <Child v-model="msg" />
  <ChildWatchEffect />
</template>
