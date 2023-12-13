import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({

    cart:[],
    totalCartPrice : 0,
    paymentSession: false,
    
    callApi(url){
        return axios.get(url)
    }

});