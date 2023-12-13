<script>
import { store } from '../data/store';

export default {
    name: 'AppCardPlate',
    props: {
        id: Number,
        name: String,
        description: String,
        price: String,
        image: String
    },
    data() {
        return {
            store,
            order: {
                quantity: 1,
                name: this.name,
                price: this.price,
                image: this.image,
                id: this.id
            }
        }
    },
    methods: {
        popAlertMaxQt() {

        },

        calculateCart() {

            let tot = 0

            store.cart.map((item) => {
                tot += item.price;
                console.log(item);

            })

            store.totalCartPrice = tot
        },

        addQuantity() {
            if (this.order.quantity == 5) {
                this.order.quantity = 5
            } else {
                this.order.quantity++;
                // popAlertMaxQt()
            }
        },

        removeQuantity() {
            if (this.order.quantity == 1) {
                this.order.quantity = 1;
            } else {
                this.order.quantity--
            }
        },

        addToCart() {
            const orderCopy = { ...this.order };

            orderCopy.price = orderCopy.price * orderCopy.quantity;

            store.cart.push(orderCopy)
            console.log(store.cart);
            this.calculateCart()
        }
    },
    mounted() {

    },
}
</script>

<template>
    <div>
        <div class="card border-0">
            <img :src="image"
                class="card-img-top fix-height" :alt="image">
            <div class="card-body">
                <h5 class="card-title text-primary">{{ name }}</h5>
                <p class="card-text">
                    {{ description }}
                </p>
                <div class="d-flex justify-content-between">
                    <div class="w-50">
                        {{ Number(price).toFixed(2) }}&euro;
                    </div>
                    <div class="d-flex justify-content-between justify-content-sm-end  w-50">
                        <button @click="removeQuantity()" class="menu__icon text-white position-relative">
                            -
                        </button>
                        <p class="px-3 mx-1 quantity">{{ order.quantity }}</p>
                        <button @click="this.addQuantity()" class="menu__icon text-white">
                            +
                        </button>
                    </div>
                </div>
                <div class="d-flex justify-content-start pt-2">
                    <button @click="addToCart()" class="btn btn-primary">Aggiungi al carrello</button>
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.card-img-top {
    border-radius: 10px;
}

.fix-height {
    height: 234px;
    object-fit: cover;
}

.card-text{
    height: 120px;
    max-height: 120px;
    font-size: 14px;
}

.quantity {
    width: 50px;
    display: flex;
    justify-content: center;
    position: relative;
    transform: translateY(-10px);
}

.menu__icon {
    width: 2rem;
    height: 2rem;
    padding: .25rem;
    backdrop-filter: saturate(180%) blur(20px);
    background-color: rgb(29, 29, 31, .7);
    border: solid 1px rgba(66, 66, 69, 0.7);
    border-radius: 3px;
}

button:hover {
    background-color: rgb(0, 0, 218);
}
</style>