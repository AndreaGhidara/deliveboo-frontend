<script>

export default {
    name: 'AppHero',
    setup() {


        return {

        }
    }
}
</script>

<template>
    <div>
        <div
            class="bgGlass position-relative rounded-3 w-full p-5 m-2 d-flex flex-column align-items-center justify-content-center">
            <h1 class="title">
                DeliveBoo
            </h1>
            <div class=" position-absolute bottom-0 end-0 pe-3">
                <p>Piatti rapidi in consegna</p>
            </div>
            <div class="containerFries">
                <img class="img-fluid" src='/icon/Fries.png' alt="">
            </div>
            <div class="containerBurger">
                <img class="img-fluid" src='/icon/Burger_Final.png' alt="">
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>



@import url('https://fonts.googleapis.com/css2?family=Agbalumo&display=swap');


.title {
    font-family: 'Agbalumo', sans-serif;
    font-size: 32px;
}

.containerFries {
    position: absolute;
    left: -50px;
    bottom: -20px;
    width: 100px;
    height: 100px;
}

.containerBurger {
    position: absolute;
    right: -50px;
    top: -20px;
    width: 80px;
    height: 80px;
}

@media screen and (min-width:800px) {

    .title {
    font-size: 50px;
}
    .containerFries {
        left: -70px;
        bottom: -30px;
        width: 150px;
        height: 150px;
    }

    .containerBurger {
        right: -70px;
        top: -30px;
        width: 130px;
        height: 130px;
    }
}

@media screen and (min-width:1000px) {

.title {
font-size: 120px;
}
.containerFries {
    left: -70px;
    bottom: -30px;
    width: 150px;
    height: 150px;
}

.containerBurger {
    right: -70px;
    top: -30px;
    width: 130px;
    height: 130px;
}
}
</style>