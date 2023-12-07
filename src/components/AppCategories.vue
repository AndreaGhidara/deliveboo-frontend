<script>
import { store } from '../data/store';

export default {
    name: 'AppCategories',
    data() {
        return {
            store,
            categories: [],
            apiUrlCategories: 'http://localhost:8000/api/types',
        };
    },
    methods: {
        removeItem(item) {
            if (item.length >= 9) {
                item.splice(-1);
            } else {

            }
        }
    },
    mounted() {
        store.callApi(this.apiUrlCategories)
        .then((response) => {
            // console.log(response.data);
            this.categories = response.data.types
        })
        .catch((err) => {
            console.log(err);
        })
    },
    updated(){
        this.removeItem(this.categories);
    } 
}

</script>

<template>
    <div class="container">
        <div class="d-flex justify-content-between align-items-center p-2 bgGlass rounded-2">
            <p class="m-0">Categories</p>
            <router-link class="nav-link" :to="{ name: 'categories' }">See All &#8594;</router-link>
        </div>
        <div class="row row-cols-2 row-cols-md-4 justify-content-start row-gap-4 py-3 ">

            <div v-for="category in categories" class="littleSquare col p-0">
                <button class="btn border-0 d-flex flex-column align-items-center">
                    <div class="icon">
                        <img class=" img-fluid" :key="category" :src="`/icon/` + category.name + `.png`" :alt=category.name>
                    </div>
                    <p class="m-0">{{ category.name }}</p>
                </button>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
.icon {
    width: 80px;
    background-color: rgb(0, 174, 255);
    border-radius: 10px;

    img {
        &:hover {
            scale: 1.5;
        }

    }
}


col {
    padding: 0 !important;
}

.littleSquare {
    display: flex;
    justify-content: center;
    align-items: center;
}

.littleSquare img {
    padding: 10px;
}
</style>
