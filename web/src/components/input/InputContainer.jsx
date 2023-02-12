import React from "react";
import Input from "./Input";

class InputContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }

        this._onInputBound = this._onInput.bind(this);
    }

    get value() {
        const { value: propsValue } = this.props;
        const { value: stateValue } = this.state;

        return propsValue || stateValue;
    }

    render() {
        return <Input onInput={this._onInputBound} value={this.value} />
    }

    _onInput(event) {
        const { value } = event.target;
        this.setState({ value }, () => {
            this.props.onInput(value)
        })
    }
}

export default InputContainer;