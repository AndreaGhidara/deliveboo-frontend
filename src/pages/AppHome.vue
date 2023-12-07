<script>
import AppRestaurants from '../components/AppPartialRestaurants.vue'
import AppCategories from '../components/AppPartialCategories.vue'
import AppHero from '../components/AppHero.vue'
import axios from 'axios';


export default {
    name: 'AppMain',
    components: {
        AppHero, AppCategories, AppRestaurants
    },
    data() {
        return {
            
        };
    },
    methods: {

    },
    created() {
        
    },

}

</script>

<template>
    <div class="home">
        <div class="py-5 px-3">
            <AppHero></AppHero>
        </div>
        <div class="py-5">
            <AppCategories></AppCategories>
        </div>
        <div>
            <AppRestaurants></AppRestaurants>
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
