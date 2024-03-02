

<script setup>
import { ref } from 'vue';
// const props = defineProps({
//     query: {
//         query: String,
//         default: '8+bd+du+port'
//     }
// });
// alert('https://api-adresse.data.gouv.fr/search/?q=' + props.query)
alert("f")
const { data: count } = await useFetch('https://api-adresse.data.gouv.fr/search/?q=' + '8+bd+du+port')
console.log(count._rawValue.features)
const items = ref(count._rawValue.features)
</script>

<template>
  <v-container>
    <!-- <ul class="w-full">
      <li class="bg-blue w-min-50 rounded p-2 text-center my-2 w-1/2" v-for="item in items  ">
        {{ item.properties.name }} {{ item.properties.city }} {{ item.properties.citycode }}
      </li>
    </ul> -->
    <div class="w-full">
      <div class="tt w-full" >
        <div class="w-50 bg-blue rounded px-2 py-2 text-center mx-2 mx-2 ">Adresse</div>
        <div class="w-25 bg-blue rounded px-2 py-2 text-center my-2 mx-2 ">Ville</div>

        <div class="w-25 bg-blue rounded px-2 py-2 text-center my-2 mx-2"> Code Postale</div>
      </div>
      <div class="tt w-full" v-for="item in items  ">
        <div class="w-50 bg-blue rounded px-2 py-2 text-center mx-2 mx-2 ">{{ item.properties.name }}</div>
        <div class="w-25 bg-blue rounded px-2 py-2 text-center my-2 mx-2 ">{{ item.properties.city }}</div>

        <div class="w-25 bg-blue rounded px-2 py-2 text-center my-2 mx-2"> {{ item.properties.citycode }}</div>
      </div>
    </div>
  </v-container>
</template> 

<style>
.red {
  color: red;
}

.tt {
  display: flex;
  justify-content: center;
  /* width: 100%; */
}

.w-25{
  width: 25%;
}

.w-50{
  width: 50%;
}
</style>