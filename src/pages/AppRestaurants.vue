<script>
import axios from 'axios';

export default {
    name: 'AppRestourants',
    data() {
        return {
            restaurants: [],
            apiUrl : 'http://127.0.0.1:8000/api/restaurants/',
        }
    },
    methods: {

        // getRestaurants(){
        //     axios.get(this.apiUrl, {
        //     })
        //         .then( (response) => {
        //             this.restaurants = response.data.results.data;
        //             console.log(this.restaurants);
        //         })
        //         .catch(function (error) {
        //             // handle error
        //             console.log(error);
        //         });
        // },
        // getTypes(restaurant) {
        //     return restaurant.types.map(type => type.name).join(', ');
        // }
    },
    created() {
        // this.getRestaurants();
    },
}
</script>

<template>
    <!-- <div>
        <h1>Home</h1>
        <div class="row justify-content-between">
            <div class="card col-4 mb-4" v-for="restaurant in restaurants" :key="restaurant.id">
                <img class="img-top img-restaurant p-0" :src="restaurant.photo" alt="">
                <p>Nome Ristorante: {{ restaurant.name }}</p>
                <p>Tipologia di Cucina: {{ getTypes(restaurant) }}</p>
            </div>
        </div>
        <h1>Restaurants</h1>
    </div> -->
</template>

<style lang="scss" scoped>
.img-restaurant {
    height: 300px;
    width: 300px;
}
</style>