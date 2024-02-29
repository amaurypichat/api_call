

<script setup>
const { data: count } = await useFetch('http://amaurypichat.fr:3000/getdata')
// console.log("sfgsf", count)
</script>

<template>
  <!-- <p>Page visits: {{ count }}</p> -->
  <v-container>
    <ul class="w-full">
      <li class="bg-blue rounded p-2 text-center my-2 w-1/2" v-for="item in count">
        {{ item.name }}
      </li>
    </ul>
  </v-container>
</template> 