
<script setup >

const name2 = ref('trjfjfj')
const pending = ref(false)
const notifyMe = async () => {
    execute();
};
var hh = "rr";

var componentKey=0;

async function LoadRefresh(jjj){
    var hh=document.getElementById("iinput").value;
    //console.log("srgtsr",hh)
	//hh=
	componentKey++;
	//alert(name2.value)
    await posstt();
	name2.value=name2.value + "h";
	
    await gett();
	
}

async function gett() {
    try {
        const response = await fetch('http://amaurypichat.fr:3000/getdata',
            {
                mode: 'no-cors',
                method: "GET",
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
            }
        );
        //const jokes = await response.json();
        // console.log("rr", jokes);
        //console.log(response)
    } catch (error) {
        console.error(error);
    }
}

async function posstt(jjj) {
    try {

        
        // const response = await fetch('http://amaurypichat.fr:3000/getdata',
        //     {
        //         mode: 'no-cors',
        //         method: "GET",
        //         headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        //     }
        // );
        // var hh="tt\""
        // var gg=Object.keys(req.body)[0].substr(7).replace("\"","");
        const response = await $fetch("http://amaurypichat.fr:3000/postdata", {
            method: "POST",
            // headers: {
            //     // 'Content-Type': 'application/json; charset=utf-8',
            //     // 'API-Key': 'secret'
            // },
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            // headers: {
            //     'Access-Control-Allow-Origin': '*'
            // },
            body: JSON.stringify({
                name: "fdgdf"
            }),
            // baseURL: config.public.apiBase,
        });
        //const jokes = await response.json();
        // console.log("rr", jokes);
        //console.log(response)
    } catch (error) {
        console.error(error);
    }
}


const { status, execute } = useAsyncData(

    async () => {
        // click("dfdf")
        // Fetch data from the server using the provided function
        const response = await $fetch("http://amaurypichat.fr:3000/postdata", {
            method: "POST",
            // headers: {
            //     'Content-Type': 'application/json',
            //     'API-Key': 'secret'
            // },
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            // headers: {
            //     'Access-Control-Allow-Origin': '*'
            // },
            body: {
                name: "gg"
            },
            // baseURL: config.public.apiBase,
        });

        // console.log("hha", response)
        // Return the fetched data
        return response;
    },
    {
        // Set immediate to false to delay data fetching until execute is called
        immediate: false,
    }
);

//notifyMe()

function Gsfgsf() {
    console.log("etrtr", name2.value)
    // alert(name2.value)
}
// Iqudgfi()
</script>


<template>
	{{ name2 }}
	<!-- <ShowList :key="componentKey" />  -->
    <button @click="LoadRefresh(name2)">Greet</button>
    <div v-if="pending">
        Loading ...
    </div>
    <div v-else>
        <!-- <ul>
            <li v-for="item in items">
                {{ item.message }}
            </li>
        </ul> -->

    </div>
    <input id="iinput" type="text"  />
    <!-- <ul class="w-full"> -->
    <!-- <li class="bg-blue rounded p-2 text-center my-2 w-1/2" v-for="item in count">
      {{ item.name }}
    </li> -->
  <!-- </ul> -->
</template>