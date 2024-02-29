

<template>
    <div>
        <div class="grid">
            <!-- <Card v-for="(item, index) in displayedItems" :key="`${item.id}--${index}`" :item="item" /> -->
            <li v-for="(item, index) in displayedItems">
                {{ item.name }}
            </li>
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
                { name: 'Davido', genre: 'afrobeats', country: 'Nigeria', id: 1 },
                { name: 'Burna Boy', genre: 'afrobeats', country: 'Nigeria', id: 2 },
            ],
        },
        itemsPerPage: {
            type: Number,
            default: 10
        },
    },
    setup(props) {


        const displayedItems = computed(() => {
            const startIndex = (currentPage.value - 1) * props.itemsPerPage;
            const endIndex = startIndex + props.itemsPerPage;

            return props.items;
        });

        // function changePage(pageNumber) {
        //     currentPage.value = pageNumber;
        // }

        // watch(currentPage, () => {
        //     //If you want the window to scroll up on page change
        //     //window.scrollTo({
        //     //     top: 0,
        //     //     behavior: 'smooth'
        //     // });
        // });


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