<script>
import axios from 'axios';


export default {
    name: 'AppMain',
    data() {
        return {
            restaurants: [],
            apiUrl : 'http://127.0.0.1:8000/api/restaurants/',
        }
    },
    methods: {

        getRestaurants(){
            axios.get(this.apiUrl, {
            })
                .then( (response) => {
                    this.restaurants = response.data.results.data;
                    console.log(this.restaurants);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }
    },
    created() {
        this.getRestaurants();
    },
}
    
</script>

<template>
    <div class="home">
        <h1>Home</h1>
        <p class="" v-for="restaurant in restaurants">
            {{ restaurant.name }}
        </p>
    </div>
</template>

<style scoped>
.home {
    background-color: skyblue;
}
</style>
