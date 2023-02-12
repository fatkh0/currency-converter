import './input.sass'


const Input = ({value, onInput}) => {
    return (
        <input className="input" value={value} onInput={onInput} type='number' />
    )
}

export default Input