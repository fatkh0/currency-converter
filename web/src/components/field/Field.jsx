import InputContainer from "../input/InputContainer"
import SelectContainer from "../select/SelectContainer"

import './field.sass'

const Field = ({onSelect, onInput, inputValue}) => {

    return (
        <div className='field'>
            <InputContainer onInput={onInput} value={inputValue} />
            <SelectContainer onSelect={onSelect} />
        </div>
    )
}

export default Field