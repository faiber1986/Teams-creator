import './Form.css'
import PropTypes from "prop-types"
import { useState } from 'react'

export const Form = (props) => {

    const [name, setName] = useState()
    const [position, setPosition] = useState()
    const [photo, setPhoto] = useState()
    const [team, setTeam] = useState()

    // Register member
    const [member, setMember] = useState([])

    const memberRegister = (member) => {
        console.log('Nuevo colaborador: ', member)
    }

    const sendForm = (event) => {
        event.preventDefault()
        let sendData = {
            name,
            position,
            photo,
            team
        }
        memberRegister(sendData)
    }

    return (
        <>
            <section className='formulario'>
                <form onSubmit={sendForm}>
                    <h2>Enter member information</h2>
                    <Inputs
                        title='Name'
                        placeholder='Input full name'
                        value={name}
                        changeValue={setName}
                    />
                    <Inputs
                        title='Position'
                        placeholder='Input position'
                        value={position}
                        changeValue={setPosition}
                    />
                    <Inputs
                        title='Photo'
                        placeholder='Photo URL'
                        value={photo}
                        changeValue={setPhoto}
                    />
                    <ListaOpciones value={team} changeValue={setTeam} />
                    <Boton title='Create Member' />
                </form>
            </section>
        </>
    )
}

export const Inputs = ({ title, placeholder }) => {

    const [value, setValue] = useState()

    const changeValue = (event) => {
        setValue(event.target.value)
    }

    const modifiedPlaceholder = `${placeholder} . . .`

    return (
        <>
            <div className='inputs'>
                <label htmlFor="">{title}</label>
                <input
                    type="text"
                    placeholder={modifiedPlaceholder}
                    value={value}
                    onChange={changeValue}
                />
            </div>
        </>
    )
}

Inputs.propTypes = {
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
}

export const ListaOpciones = ({ value }) => {

    const changeValue = (event) => {
        setValue(event.target.value)
    }

    const equipos = [
        'Front End',
        'Back End',
        'Data Science',
        'Devops',
        'QA',
        'IoT',
    ]
    return (
        <>
            <div className='options'>
                <label htmlFor="">Team</label>
                <select value={value} onChange={changeValue}>
                    <option value="" disabled defaultValue='' hidden >Select team</option>
                    {equipos.map((equipo, index) => {
                        return (
                            <option key={index} value={equipo}>{equipo}</option>
                        )
                    })}
                </select>
            </div>

        </>
    )
}


export const Boton = ({ title }) => {
    return (
        <button className='create' > {title} </button>
    )
}