
import './select.sass'

const Select = ({options, onSelect, selected}) => {
    return (
        <select defaultValue={selected} onChange={onSelect} className="select">
            <option className='select__defaultOption'></option>
            { options.map((currency) => <option key={currency}>{currency}</option>) }
        </select>
    )
}

export default Select