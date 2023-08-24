import PropTypes from "prop-types"

export const Input = (props) => {

    const { type='text' } = props

    const sendChange = (event) => {
        props.setValue(event.target.value)
    }

    const modifiedPlaceholder = `${props.placeholder} . . .`

    return (
        <>
            <div className={`input_input_${type}`}>
                <label htmlFor="">{props.title}</label>
                <input
                    type={type}
                    placeholder={modifiedPlaceholder}
                    required={props.required}
                    value={props.value}
                    onChange={sendChange}
                />
            </div>
        </>
    )
}

Input.propTypes = {
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
}