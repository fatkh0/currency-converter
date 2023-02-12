import axios from "axios";

const BASE_URL = 'https://min-api.cryptocompare.com/data/price?';

export const currencyApi = {
    getAllCurrencies(...currencies) {
        if(!currencies.length) {
            return;
        }

        const stringifyCurrencies = currencies.join(',');

        return axios
            .get(`${BASE_URL}fsym=USD&tsyms=${stringifyCurrencies}`)
            .then(response => response.data)
    }
}
