<script>
import { store } from '../data/store';
import AppOrderItem from './AppOrderItem.vue';

export default {
    name: 'AppCart',
    data() {
        return {
            store,
        };
    },
    methods: {
        

    },
    created() {
    },
    components: { AppOrderItem }
}

</script>
        
<template>
    <div class="p-2">
        <button :data-quantity="store.cart.length" class="btn-cart" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <svg class="icon-cart" viewBox="0 0 24.38 30.52" height="30.52" width="24.38"
                xmlns="http://www.w3.org/2000/svg">
                <title>icon-cart</title>
                <path transform="translate(-3.62 -0.85)"
                    d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0">
                </path>
            </svg>
            <span class="quantity">

            </span>
        </button>
    </div>
    <div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content bgGlass">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Carrello</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-2">
                        <p v-if="store.cart.length == 0">Nessun ordine al momento</p>
                        <div v-else class="container">
                            <div v-for="product in store.cart">
                                <AppOrderItem :name="product.name" :quantity="product.quantity" :price="product.price"></AppOrderItem>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer d-flex justify-content-between">
                        {{ store.totalCartPrice.toFixed(2) }}
                        <button type="button" class="btn btn-primary">Vai al pagemnto</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.modal-content {
    max-height: 50%;
}

.btn-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: none;
    background-color: transparent;
    position: relative;
}

.btn-cart::after {
    content: attr(data-quantity);
    width: fit-content;
    height: fit-content;
    position: absolute;
    font-size: 15px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    opacity: 0;
    visibility: hidden;
    transition: .2s linear;
    top: 115%;
}

.icon-cart {
    width: 24.38px;
    height: 30.52px;
    transition: .2s linear;
}

.icon-cart path {
    fill: rgb(240, 8, 8);
    transition: .2s linear;
}

.btn-cart:hover>.icon-cart {
    transform: scale(1.2);
}

.btn-cart:hover>.icon-cart path {
    fill: rgb(186, 34, 233);
}

.btn-cart:hover::after {
    visibility: visible;
    opacity: 1;
    top: 105%;
}

.quantity {
    display: none;
}

.pictureOrder {
    width: 120px;
}
</style>