
<script setup >



const props = defineProps({
    fonc: {
        type: Function,
        default: ''
    }
});



async function LoadRefresh() {
    var iinputValue = document.getElementById("iinput").value;
    props.fonc();
    if (iinputValue == "") {
        alert("Veuillez entrer une valeur")
    } else {
        await posstt(iinputValue);
    }

}

async function posstt(iinputValue) {
    try {

        const response = await $fetch("http://amaurypichat.fr:3000/postdata", {
            method: "POST",
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: JSON.stringify({
                name: iinputValue
            }),
        });
    } catch (error) {
        console.error(error);
    }
}


</script>


<template>
    <input id="iinput" type="text" class="me-3" />
    <button id="btn_save" class="px-3 py-2 rounded bold text-white cursor-pointer"
        @click="LoadRefresh()">Enregistrer</button>

</template>

<style>
#iinput {
    border-width: 1px;
    border-style: solid;
    width: calc(100% - 10px); 
}

#btn_save {
    background-color: #2196f3;
    
}
</style>