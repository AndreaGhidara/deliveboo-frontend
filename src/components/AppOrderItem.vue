<script>
import { store } from '../data/store';

export default {
    name: 'AppOrderItem',
    props:{
        name:String,
        quantity:Number,
        price:Number,
    },
    data() {
        return {
            store,
        };
    },
    methods: {
        calculate(num1,num2){
            const tot = num1 * num2;
            return tot.toFixed(2);
        }

    },
    created() {
    },
}

</script>
        
<template>
    <div class="row">
        <p class="ps-2 m-0">{{name}}</p>
        <div class="col d-flex justify-content-between">
            <div class="pictureOrder d-flex">
                <img class="img-fluid rounded-2"
                    src="https://image-tc.galaxy.tf/wijpeg-6vjfv3a8pbx39l41ud7x73arb/cover_wide.jpg?crop=0%2C0%2C1200%2C675"
                    alt="">
                
            </div>
            <div class="d-flex flex-column justify-content-end">
                <p class="m-0 text-end">x {{quantity}}</p>
                <p class="m-0">{{price.toFixed(2)}} &euro;</p>
            </div>
        </div>
    </div>
    <hr>
</template>


<style lang="scss" scoped>
.pictureOrder {
    width: 120px;
}
</style>