<script>
export default {
    name: 'AppCategories',
    data() {
        return {
            restaurants: [
                {
                    name: "FastFood",
                    image: "/icon/hamburger.png",
                },
                {
                    name: "Pizza",
                    image: "/icon/pizza.png",
                },
                {
                    name: "Kebab",
                    image: "/icon/kebab.png",
                },
                {
                    name: "Noodles",
                    image: "/icon/noodles.png",
                },
                {
                    name: "Pollo Fritto",
                    image: "/icon/fried-chicken.png",
                },
                {
                    name: "Bevande",
                    image: "/icon/fried-potatoes.png",
                },
                {
                    name: "Dolci",
                    image: "/icon/donut.png",
                },
                {
                    name: "Developer",
                    image: "/icon/soda.png",
                },

            ]
        };
    },

}
</script>

<template>
    <div class="container">
        <div class="d-flex justify-content-between align-items-center p-2 bgGlass rounded-2">
            <p class="m-0">Restaurants</p>
            <p class="m-0">See All &#8594;</p>
        </div>
        <div v-for="restaurant in restaurants">

            <div class="containerRestaurant w-100 py-3">
                <div class="pt-2">
                    <div class="logoRestaurantVariant rounded">
                        <img class="p-2" :src=restaurant.image :alt=restaurant.name>
                    </div>
                </div>
                <div class="w-100 ps-2">
                    <button class="btn ps-0">
                        <h3 class="m-0">{{ restaurant.name }} -></h3>
                    </button>
                    <div class="d-flex justify-content-end align-items-center m-0">
                        <p class="m-0 px-2">4.5</p>
                        <div class="containerStar">
                            <img class="img-fluid"  src="/icon/star.png" alt="">
                        </div>
                    </div>
                    <div class="descriptionRestaurant bgGlass rounded overflow-hidden p-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, id similique. Iusto iure hic et, assumenda odio doloremque deleniti minima quam esse reiciendis corporis, ratione dolore, molestiae maxime quia voluptatem!
                    </div>
                </div>
            </div>
        </div>

        <hr>

        <div v-for="restaurant in restaurants">

            <div class="containerRestaurant d-flex py-3">
                <div class="pt-2">
                    <div class="logoRestaurant rounded">
                        <img class="img-fluid p-2" :src=restaurant.image :alt=restaurant.name>
                    </div>
                </div>
                <div class="w-100 ps-2">
                    <button class="btn ps-0">
                        <h3 class="m-0">{{ restaurant.name }} -></h3>
                    </button>
                    <div class="d-flex justify-content-end align-items-center m-0">
                        <p class="m-0 px-2">4.5</p>
                        <div class="containerStar">
                            <img class="img-fluid"  src="/icon/star.png" alt="">
                        </div>
                    </div>
                    <div class="descriptionRestaurant bgGlass rounded overflow-hidden p-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, id similique. Iusto iure hic et, assumenda odio doloremque deleniti minima quam esse reiciendis corporis, ratione dolore, molestiae maxime quia voluptatem!
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
    width: 80px;
    height: 80px;
    background-color: aqua;
}
.logoRestaurantVariant {
    width: 100%;
    height: 80px;
    background-color: aqua;
    
    img{
        height: 80px;
        object-fit: cover;
    }
}

.descriptionRestaurant {
    font-size: 12px;
    height: 80px;
    text-overflow: ellipsis;
}
.containerStar{
    width: 25px;
}

@media screen and (min-width:800px) {
    .containerStar{
    width: 30px;
}
}

</style>