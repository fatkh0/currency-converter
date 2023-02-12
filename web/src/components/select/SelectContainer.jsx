import React from "react";
import { CURRENCY } from "../constant/currencies";
import Select from "./Select";

class SelectContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: ''
        }

        this._onSelectBound = this._onSelect.bind(this);
    }

    render() {
        return <Select
            {...this.props}
            selected={this.state.selected}
            onSelect={this._onSelectBound}
            options={CURRENCY.ALL_CURRENCIES}
            />
    }

    _onSelect(event) {
        this.setState({ selected: event.target.value }, () => {
            this.props.onSelect(this.state.selected)
        });
    }
}

export default SelectContainer