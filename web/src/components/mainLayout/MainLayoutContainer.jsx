import React from "react";
import { currencyApi } from "../../api/api";
import { CURRENCY } from "../constant/currencies";
import MainLayout from "./MainLayout";

class MainLayoutContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            selectedCurrency: '',
            currencies: {},
            prices: {}
        }

        this._updateCurrencyBound = this._updateCurrency.bind(this);
        this._selectCurrencyBound = this._selectCurrency.bind(this);
    }

    async componentDidMount() {
        const data = await currencyApi.getAllCurrencies(CURRENCY.ALL_CURRENCIES);

        this.setState(state =>({ prices: {...state.prices, ...data }}));
    }

    render() {
        return <MainLayout
            {...this.props}
            {...this.state}
            updateCurrency={this._updateCurrencyBound}
            setSelectedCurrency={this._selectCurrencyBound}
            />
    }

    _selectCurrency(selectedCurrency) {
        this.setState({ selectedCurrency })
    }

    _updateCurrency({ name, value}){
        if (name.length) {
            this.setState( state => ({ currencies: {...state.currencies, [name]: value }}), this._convert);
        }
    }

    _convert() {
        const { selectedCurrency, currencies, prices } = this.state;

        if(Object.keys(currencies).length < 2) {
            return;
        }

        const convertedCurrencies = {}

        Object.keys(currencies).forEach(currency => {

            const amount = prices[currency] / prices[selectedCurrency] * currencies[selectedCurrency];

            Object.assign(convertedCurrencies, {
                [currency]: amount.toFixed(2)
            })
        })

        this.setState({currencies: convertedCurrencies});
    }
}

export default MainLayoutContainer