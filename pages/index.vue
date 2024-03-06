<template>
    <v-app>
        <v-container>
            <v-card>
                <v-card-title>Liste des adresses similaires situées dans des villes différentes en France</v-card-title>
                <v-card-text>
                    Entrez des mots désignant une rue ou une ville et un numéro correspond à une adresse.
                </v-card-text>
                <v-card-text>
                    5 résultats maximum
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

        <ShowListAddress v-model="query" :key="componentKey" :query="query"  />

    </v-app>
</template>
  
<script setup>
import { ref } from 'vue';
const query = ref('https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port');
const componentKey=ref(0)

const getQuery = (q) => {
    q=q.replaceAll(" ","+")
    // componentKey.value=componentKey.value+1
    // alert(componentKey.value)
    query.value='https://api-adresse.data.gouv.fr/search/?q='+q;
};

</script>
  
<style>
.red {
    color: red;
}
</style>
