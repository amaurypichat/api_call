<script setup>
import { ref } from 'vue';
const props = defineProps({
  query: {
    query: String,
    default: '8+bd+du+port'
  }
});

const items = ref(null)
const { data: count } = await useFetch('https://api-adresse.data.gouv.fr/search/?q=' + props.query)
if (count._rawValue.features[0].properties.street != "Quai de l'adresse 1") {
  items.value = count._rawValue.features
} else {
  items.value = null
}
</script>

<template>

  <v-container>
    <div class="w-full">
      <div id="entete" class="tt bg-blue my-2 mx-2 rounded w-full">
        <div class="w-50  px-2 py-2 text-center  ">Adresse</div>
        <div class="w-25   px-2 py-2 text-center ">Ville</div>

        <div class="w-25   px-2 py-2 text-center "> Code Postale</div>
      </div>
      <div class="w-full" v-for="item in items ">
        <div class="max-h-5 tt">
          <div class="AAA w-50 bg-blue rounded px-2 py-2 text-center my-2 mx-2 ">{{ item.properties.name }}</div>
          <div class="w-25 bg-blue rounded px-2 py-2 text-center my-2 mx-2 ">{{ item.properties.city }}</div>

          <div class="w-25 bg-blue rounded px-2 py-2 text-center my-2 mx-2"> {{ item.properties.citycode }}</div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<style>
.red {
  color: red;
}

#entete {
  height: 50px;
}

.tt {
  display: flex;
  justify-content: center;
  vertical-align: middle;
  /* width: 100%; */
}

.p-2 {
  padding: 8px;
}

.w-25 {
  width: 25%;
}

/* .w-50 {
  width: 50%;
} */
</style>