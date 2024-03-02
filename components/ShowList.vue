

<script setup>
const { data: count } = await useFetch('http://amaurypichat.fr:3000/getdata')


</script>

<template>
  <v-container>
    <ul class="w-full">
      <li class="bg-blue w-min-50 rounded p-2 text-center my-2 w-1/2" v-for="item in count">
        {{ item.name }}
      </li>
    </ul>
  </v-container>
</template> 

<style>
.red {
    color: red;
}
</style>