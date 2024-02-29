<template>
    <v-app>
        <v-container>
            <v-card>
                <!-- <Kk /> -->
                <v-card-title>Utilisation d'une API avec Vue.js</v-card-title>
                <v-card-text>
                    Entrez une valeur afin de mettre à jour la liste affichée en bleu
                </v-card-text>
                <v-card-text>
                    La liste est réinitialisée toutes les 3 minutes
                </v-card-text>
                <v-card-actions>
                    <!-- <v-btn >Click me</v-btn>  -->
                    <!-- <input id="iinput" type="text"  />
                    <button @click="LoadRefresh()">Greet</button> -->
                    <Posst />
                    <!-- @click="onButtonClick" -->
                </v-card-actions>
            </v-card>
            <div class="p-2">

            </div>
            <v-card>
               <!--  <ShowList /> -->
            </v-card>
        </v-container>

        <Posst />
        <!-- <Api />  -->
        <!-- <DefineComponent_api /> -->
        <!-- <Pagination /> -->
        <!-- <Test /> -->
    </v-app>
</template>
  
<script setup>
var componentKey=0;

async function LoadRefresh(){
    var hh=document.getElementById("iinput").value;
    alert(hh)
    //console.log("srgtsr",hh)
	//hh=
	componentKey++;
	//alert(name2.value)
    await posstt();
	name2.value=name2.value + "h";
	
    await gett();
	
}

function Hhhh() {
    alert("rtr")
}
async function onButtonClick() {
    // alert("rtr")
    const response = await $fetch("http://amaurypichat.fr:3000/postdata", {
        method: "POST",
        // headers: {
        //     'Content-Type': 'application/json',
        //     'API-Key': 'secret'
        // },
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        // headers: {
            // 'Access-Control-Allow-Origin': '*'
        // },
        body: {
            name: "gg"
        },
        // baseURL: config.public.apiBase,
    });

    // const createPerson = async () => {



    // const { status, execute } = useAsyncData(

    //     async () => {
    //         alert("rtr")
    //         // Fetch data from the server using the provided function
    //         const response = await $fetch("http://amaurypichat.fr:3000/postdata", {
    //             method: "POST",
    //             // headers: {
    //             //     'Content-Type': 'application/json',
    //             //     'API-Key': 'secret'
    //             // },
    //             mode: 'no-cors',
    //             headers: { 'Content-Type': 'application/json' },
    //             // headers: {
    //             //     'Access-Control-Allow-Origin': '*'
    //             // },
    //             body: {
    //                 email: "gg"
    //             },
    //             // baseURL: config.public.apiBase,
    //         });

    //         console.log("hha", response)
    //         // Return the fetched data
    //         return response;
    //     },
    //     {
    //         // Set immediate to false to delay data fetching until execute is called
    //         immediate: false,
    //     }
    // );
}
</script>
  
<style>
.red {
    color: red;
}
</style>

<!-- <style scoped>
@import "./assets/css/main.css"
</style> -->