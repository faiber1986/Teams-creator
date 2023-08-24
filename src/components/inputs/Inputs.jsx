import PropTypes from "prop-types"
import { useState } from "react"

export const Inputs = (props) => {

    const sendChange = (event) => {
        props.setValue(event.target.value)
    }

    const modifiedPlaceholder = `${props.placeholder} . . .`

    return (
        <>
            <div className='inputs'>
                <label htmlFor="">{props.title}</label>
                <input
                    type="text"
                    placeholder={modifiedPlaceholder}
                    required={props.required}
                    value={props.value}
                    onChange={sendChange}
                />
            </div>
        </>
    )
}

Inputs.propTypes = {
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
}