<script>
import { store } from '../data/store';

export default {
    name: 'AppCategories',
    data() {
        return {
            store,
            categories: [],
            apiUrlCategories: 'http://localhost:8000/api/types',
            categoriesSelected:[]
        }
    },
    methods: {
        addToSearch(e){
            // console.log(e.target.alt);

            this.categoriesSelected.map((item,index) => {
                if (item === e.target.alt) {
                    
                }
            })

            this.categoriesSelected.push(e.target.alt)

            // console.log(this.categoriesSelected);
        }
    },
    created() {

    },
    mounted(){
        store.callApi(this.apiUrlCategories)
        .then((response) => {
            // console.log(response.data);
            this.categories = response.data.types
        })
        .catch((err) => {
            console.log(err);
        })
    }
}
</script>

<template>
    
    <div class="d-flex justify-content-center align-items-center">
        <div class="container bgGlass rounded-0">
            <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 justify-content-start row-gap-4 py-3 ">
                <div v-for="category in categories" class="littleSquare col p-0">
                    <button  class="btn border-0 d-flex flex-column align-items-center">
                        <div class="icon">
                            <img @click="addToSearch($event)" class=" img-fluid" :key="category" :src="`/icon/` + category.name + `.png`"
                                :alt=category.name>
                        </div>
                        <p class="m-0">{{ category.name }}</p>
                    </button>
                </div>
            </div>
            <div>
                <div v-for="cat in categoriesSelected">
                    <p>{{ cat }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.icon {
    width: 80px;
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