<script>

export default {
    name: 'AppCategories',
    data() {
        return {
            categories: [
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
            <p class="m-0">Categories</p>
            <p class="m-0">See All &#8594;</p>
        </div>
        <div class="row row-cols-3 row-cols-md-4 justify-content-start row-gap-4 py-3 ">

            <div v-for="category in categories" class="littleSquare col p-0">
                <button class="btn border-0">
                    <img :key="category" class="icon" :src=category.image :alt=category.name>
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
