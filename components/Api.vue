<script setup>
const { data: count } = await useFetch('/api/list', {
    onRequest({ request, options }) {
        // Set the request headers
        // options.headers = options.headers || {}
        // options.headers.authorization = '...'
    },
    onRequestError({ request, options, error }) {
        // Handle the request errors
    },
    onResponse({ request, response, options }) {
        // Process the response data
        console.log(response)
        // localStorage.setItem('token', response._data.token)
    },
    onResponseError({ request, response, options }) {
        // Handle the response errors
    }
})
</script>

<template>
    <!-- <p>Page visits: {{ count }}</p> -->
    <ul>
        <h2 v-for="(fruit, i) in count" :key="i">
            <!-- Render "name" and "amount" properties -->
            {{ fruit.id }} ({{ fruit.title }})
        </h2>
    </ul>
</template>