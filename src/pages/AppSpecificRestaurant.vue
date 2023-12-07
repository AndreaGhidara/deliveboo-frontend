<script>
import AppCardPlate from '../components/AppCardPlate.vue';
import { store } from '../data/store';


export default {
    name: 'AppSpecificRestaurant',
    computed: {
        ApiRestaurant() {
            return `http://localhost:8000/api/restaurant/${this.$route.params.id}`;
        }
    },
    data() {
        return {
            store,
            restaurant: {},
        };
    },
    methods: {

    },
    mounted() {
        store.callApi(this.ApiRestaurant)
            .then((response) => {
                this.restaurant = response.data.restaurant
                console.log(this.restaurant);
            })
            .catch((err) => {
                console.log(err);
            })

    },
    components: {
        AppCardPlate,
    }
}
</script>

<template>
    <div class="bgSkyBlue">
        <div class="container">
            <div class="row">
                <div v-if=this.restaurant.photo class="p-0">
                    <img class="img-fluid picture object-fit-cover" :src=this.restaurant.photo alt="">
                </div>
                <div v-else=this.restaurant.photo class="p-0">
                    <div class="picture d-flex justify-content-center align-items-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>

            </div>
            <div class="row py-3 text-center">
                <h1>{{ restaurant.name }}</h1>
            </div>
            <div class="row text-primary">
                MENU
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div v-for="dish in this.restaurant.dishes" class="col">
                    <AppCardPlate :price="dish.price" :name="dish.name" :description="dish.description"></AppCardPlate>
                </div>
            </div>
            <div class="">

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.pictureOrder {
    width: 120px;
}

.picture {
    width: 100%;
    height: 200px;
    background-color: rgba(117, 118, 121, 0.432);
    border-radius: 0 0 20px 20px;
}
</style>