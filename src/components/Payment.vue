<template>
    <div class="modal-backdrop fade show"></div>
    <div class="modal-wrap">
                <div class="doc-modal p-4">
            <h1 class="text-center text-doc-blue fs-2">Dati fatturazione</h1>
            <div class="row">
                <div class="col-6">
                    <label class="form-label">Nome</label>
                    <input v-model="guestToSend.name" type="text" class="form-control">
                </div>
                <div class="mb-3 col-6">
                    <label class="form-label">Cognome</label>
                    <input v-model="guestToSend.surname" type="text" class="form-control">
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <label class="form-label">Indirizzo</label>
                    <input v-model="guestToSend.address" type="text" class="form-control">
                </div>
                <div class="mb-3 col-6">
                    <label class="form-label">Cellulare</label>
                    <input v-model="guestToSend.phone" type="number" class="form-control">
                </div>
            </div>

            <p>Prezzo totale: {{ store.totalCartPrice }} &euro;</p>


            <div class="content container-fluid">
                <div id="dropin-container"></div>
                <form id="payment-form" action="" method="post">
                    <!-- Putting the empty container you plan to pass to
        'braintree.dropin.create' inside a form will make layout and flow
        easier to manage -->
                    <div class="d-flex justify-content-center align-items-center gap-2">
                        <button id="payment-button" type="submit" class="btn btn-primary"
                            :class="{ 'disabled': loadingBrain }">{{ !paymentAdded ? 'Aggiungi carta' : 'Paga' }}</button>
                        <span></span>
                    </div>


                </form>
            </div>
        </div>
    </div>
    <div>
    </div>

</template>
  
<script>
import axios from 'axios';
import { store } from '../data/store';




export default {
    data() {
        return {
            token: '',
            nonce: '',
            store,
            paymentAdded: false,
            addedCard: false,
            loadingBrain: true,
            paying: false,
            baseAPI: 'http://127.0.0.1:8000/api/',
            guest: {
                name: '',
                surname: '',
                address: '',
                phone: '',
            },
            guestToSend: {},
            products: []

        }
    },

    methods: {
        initializePayment(token) {
            const form = document.querySelector('#payment-form')
            braintree.dropin.create({
                authorization: token,
                container: '#dropin-container',
                locale: 'it_IT',

            }, (error, dropinInstance) => {
                if (error) console.error(error);

                this.loadingBrain = false

                store.cart.map((dish) => {
                    dish = {
                        id: dish.id,
                        qty: dish.quantity
                    }
                    this.products.push(dish)
                })

                form.addEventListener('submit', event => {
                    event.preventDefault();


                    dropinInstance.requestPaymentMethod((error, payload) => {
                        if (error) console.error(error);

                        if (this.paymentAdded) {
                            this.pay()

                        }
                        else {

                            // Step four: when the user is ready to complete their
                            //   transaction, use the dropinInstance to get a payment
                            //   method nonce for the user's selected payment method, then add
                            //   it a the hidden field before submitting the complete form to
                            //   a server-side integration
                            this.nonce = payload.nonce;
                            this.paymentAdded = true;
                            this.addedCard = true;

                        }

                    });
                });
            });
        },
        getToken() {
            axios.get(this.baseAPI + 'payment/initialize/')
                .then((res) => {
                    this.token = res.data.token
                    this.initializePayment(this.token)


                }).catch((err) => {


                })
        },
        pay() {
            this.paying = true
            const paymentData = {
                amount: this.store.totalCartPrice,
                payment_method_nonce: this.nonce,
                name: this.guestToSend.name,
                last_name: this.guestToSend.surname,
                address: this.guestToSend.address,
                phone: this.guestToSend.phone,
                products: this.products

            };
            axios.post(this.baseAPI + 'payment/process', paymentData)
                .then(response => {
                    // Elaborazione della risposta dal backend
                    const success = response.data.success;
                    if (success) {
                        this.store.paymentSession = false;
                        console.log('Pagamento riuscito')
                        this.guestToSend = { ...this.guest }
                        store.cart = []


                    } else {
                        const error = response.data.success;
                        console.error(error);
                    }
                })
                .catch(error => {
                    // Gestione degli errori di comunicazione con il backend
                    console.error(error)
                })
        },
    },
    components: {
    },
    mounted() {
        this.getToken()
        this.guestToSend = { ...this.guest }


    }
}
</script>
  
<style lang="scss" scoped>
.modal-wrap {
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: grid;
    place-items: center;
    z-index: 999999;
}

.doc-modal {
    background-color: white;
    width: 500px;
    position: relative;
    border-radius: 10px;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
    }
}


[data-braintree-id="toggle"] {
    display: none;
}
</style>