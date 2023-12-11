<script>
import AppCardPlate from '../components/AppCardPlate.vue';
import { store } from '../data/store';



export default {
    name: 'AppSpecificRestaurant',
    data() {
        return {
            store,
            apiUrl : 'http://127.0.0.1:8000/api/restaurant/',
            restaurant: {},

        };
    },
    methods: {
        getRestaurantInfo(id) {
            store.callApi(this.apiUrl+id).then((res) => {
                this.restaurant = res.data.restaurant
                console.log(res.data)
            })
        }
    },
    created() {
        this.getRestaurantInfo(this.$route.params.id)

    },
    mounted() {
    },
    components: { AppCardPlate }
}
</script>

<template>
    <div class="bgSkyBlue">
        <div class="container">
            <div class="row">
                <div class="p-0">
                    <img class="img-fluid picture object-fit-cover"
                        :src="restaurant.photo"
                        :alt="restaurant.name">
                </div>

            </div>
            <div class="row py-3 text-center">
                <h1>{{ restaurant.name }}</h1>
            </div>
            <div class="row">
                MENU
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div v-for="dish in restaurant.dishes" class="col">
                    <AppCardPlate :dish="dish"></AppCardPlate>
                </div>
                <!-- <div class="col">
                    <AppCardPlate></AppCardPlate>
                </div>
                <div class="col">
                    <AppCardPlate></AppCardPlate>
                </div>
                <div class="col">
                    <AppCardPlate></AppCardPlate>
                </div>
                <div class="col">
                    <AppCardPlate></AppCardPlate>
                </div> -->
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
    background-color: royalblue;
    border-radius: 0 0 20px 20px;
}
</style>