<script>
import axios from 'axios';
import { store } from '../data/store';

export default {
    name: 'AppRestourants',
    data() {
        return {
            store,
            restaurants: [],
            apiUrlRestaurants: 'http://127.0.0.1:8000/api/restaurants/',
        };
    },
    methods: {
        getTypes(restaurant) {
            return restaurant.types.map(type => type.name).join(', ');
        },

        goToSpecificRestaurant(index) {
            this.$router.push({
                name: 'specificRestaurant',
                params: { id: index }
            })
        }
    },
    mounted() {
        store.callApi(this.apiUrlRestaurants)
            .then((response) => {
                this.restaurants = response.data.results.data
                console.log(this.restaurants);
            })
            .catch((err) => {
                console.log(err);
            })
    },
}
</script>

<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-lg-2">
            <div class="col" v-for="restaurant in restaurants">
                <div class="containerRestaurant w-100 py-3">
                    <div class="pt-2">
                        <button @click="goToSpecificRestaurant(restaurant.id)" class="btn w-100">
                            <div class="logoRestaurant rounded">
                                <img class="p-2" :src=restaurant.photo :alt=restaurant.name>
                            </div>
                        </button>
                    </div>
                    <div class="w-100 ps-2">
                        <h3 class="m-0">🛵{{ restaurant.name }}</h3>
                        <div class="d-flex justify-content-end align-items-center m-0">
                            <p class="m-0 px-2">4.5</p>
                            <div class="containerStar">
                                <img class="img-fluid" src="/icon/star.png" alt="">
                            </div>
                        </div>
                        <div class="descriptionRestaurant d-flex flex-column gap-2 bgGlass rounded overflow-hidden p-1">
                            <p>{{ restaurant.address }}</p>
                            <div class="d-flex">
                                <p v-for="test in restaurant.types" class="px-2">
                                    <span class="badge rounded-pill text-bg-light">{{ test.name }}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.containerRestaurant {
    width: 100%;
}

.logoRestaurant {
    width: 100%;
    height: 150px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
    }
}

.descriptionRestaurant {
    font-size: 12px;
    height: 80px;
    text-overflow: ellipsis;
}

.containerStar {
    width: 25px;
}

@media screen and (min-width:800px) {
    .containerStar {
        width: 30px;
    }
}
</style>