<template>
    <v-app>
        <v-container>
            <v-card>
                <v-card-title>Mise à jour d'une liste distante via API avec Vue.js</v-card-title>
                <v-card-text>
                    Entrez une valeur afin de mettre à jour la liste affichée en bleu
                </v-card-text>
                <v-card-text>
                    La liste est réinitialisée toutes les 3 minutes
                </v-card-text>
                <v-card-actions>
                    <PosstGetAddress  :fonc="getQuery" />
                </v-card-actions>
            </v-card>
            <div class="p-2">

            </div>
            <v-card>
            </v-card>
        </v-container>

        <ShowListAddress :componentKey="componentKey"  />

    </v-app>
</template>
  
<script setup>
import { ref } from 'vue';
const query = ref('https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port');
const componentKey=ref(0)
// defineProps({
//   query: String,
// })
const getQuery = (q) => {
    // alert("sdg")
    q=q.replaceAll(" ","+")
    componentKey.value=componentKey.value+1
    alert(componentKey.value)
    query.value='https://api-adresse.data.gouv.fr/search/?q='+q;
};




</script>
  
<style>
.red {
    color: red;
}
</style>
