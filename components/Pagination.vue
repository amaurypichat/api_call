

<template>
    <div>
        <div class="grid">
            <!-- <Card v-for="(item, index) in displayedItems"  /> -->

            <!-- <li > -->
            <!-- {{ item.name }} -->
            <!-- </li> -->
            <v-container>
                <v-card v-for="(item, index) in displayedItems" :key="`${item.id}--${index}`" :item="item">
                    <!-- <Kk /> -->
                    <v-card-title>Simple Vuetify Page</v-card-title>
                    <v-card-text>
                        This is a simple Vuetify page with a heading, a paragraph, and a button.
                    </v-card-text>
                    <!-- <v-card-actions> -->
                    <!-- <v-btn @click="onButtonClick">Click me</v-btn> -->
                    <!-- </v-card-actions> -->
                </v-card>
            </v-container>
        </div>
        <div>
            <v-container
            :class="[
                    'flex justify-center']"
            >
                <button type="button" :class="[
                    'button--link button--large font-bold p-2 rounded bg-slate-300 m-2',
                    { isActive: page === currentPage }
                ]" v-for="page in pages" :key="page" @click="changePage(page)">
                    {{ page }}
                </button>
            </v-container>
        </div>
    </div>
</template>

<script >
import { ref, computed, watch } from 'vue';

export default {
    props: {
        items: {
            type: Array,
            required: true,
            default: [
                { name: 'Davido1', genre: 'afrobeats', country: 'Nigeria', id: 1 },
                { name: 'Burna Boy2', genre: 'afrobeats', country: 'Nigeria', id: 2 },
                { name: 'Burna Boy3', genre: 'afrobeats', country: 'Nigeria', id: 3 },
                { name: 'Burna Boy4', genre: 'afrobeats', country: 'Nigeria', id: 4 },
                { name: 'Burna Boy5', genre: 'afrobeats', country: 'Nigeria', id: 5 },
                { name: 'Burna Boy6', genre: 'afrobeats', country: 'Nigeria', id: 6 },
            ],
        },
        itemsPerPage: {
            type: Number,
            default: 2
        },
    },
    setup(props) {
        const currentPage = ref(1);

        const pageCount = computed(() =>
            Math.ceil(props.items.length / props.itemsPerPage)
        );

        const pages = computed(() => {
            return Array.from({ length: pageCount.value }, (_, i) => i + 1);
        });

        const displayedItems = computed(() => {
            const startIndex = (currentPage.value - 1) * props.itemsPerPage;
            const endIndex = startIndex + props.itemsPerPage;

            return props.items.slice(startIndex, endIndex);
        });

        function changePage(pageNumber) {
            currentPage.value = pageNumber;
        }

        watch(currentPage, () => {
            //If you want the window to scroll up on page change
            //window.scrollTo({
            //     top: 0,
            //     behavior: 'smooth'
            // });
        });


        return {
            currentPage,
            pageCount,
            pages,
            displayedItems,
            changePage
        };
    },
  
};
</script>

<!-- <style>
.red {
    color: red;
}
</style> -->

<style scoped>
@import "./assets/css/main.css"
</style>