import React from "react";
import Field from "./Field";

class FieldContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            value: ''
        }

        this._onSelectBound = this._onSelect.bind(this);
        this._onInputBound = this._onInput.bind(this);
    }

    get isSelected() {
        return this.props.selectedCurrency === this.state.name
    }

    get inputValue() {
        const { name, value } = this.state
        
        return this.isSelected ? value : this.props.currencies[name];
    }

    render() {
        return <Field
            inputValue={this.inputValue}
            onSelect={this._onSelectBound}
            onInput={this._onInputBound} />
    }

    _onSelect(currencyName) {
        this.setState({name: currencyName}, () => {
            this.props.updateCurrency(this.state);

            if (!this.props.selectedCurrency) {
                this.props.setSelectedCurrency(this.state.name);
            }
        });
    }

    _onInput(value) {
        console.log(value)
        this.setState({ value }, () => {
            this.props.updateCurrency(this.state);
            this.props.setSelectedCurrency(this.state.name);
        })
    }
}

export default FieldContainer
