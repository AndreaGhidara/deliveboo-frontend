<script>
import AppCardPlate from '../components/AppCardPlate.vue';


export default {
    name: 'AppSpecificRestaurant',
    data() {
        return {};
    },
    methods: {},
    created() {
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
                        src="https://www.settimoristorante.it/wp-content/uploads/sites/106/2020/01/slide_home_sofitel_settimo_ristorante_terrazza2.jpg"
                        alt="">
                </div>

            </div>
            <div class="row py-3 text-center">
                <h1>Nome ristorante</h1>
            </div>
            <div class="row">
                MENU
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div class="col">
                    <AppCardPlate></AppCardPlate>
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