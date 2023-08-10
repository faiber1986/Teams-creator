import './Formulario.css'
import PropTypes from "prop-types"

export const Formulario = () => {

    const sendForm = ( event ) => {
        event.preventDefault()
    }

    return (
        <>
            <section className='formulario'>
                <form onSubmit={ sendForm }>
                    <h2>Enter member information</h2>
                    <Inputs title='Name' placeholder='Input full name' />
                    <Inputs title='Position' placeholder='Input position' />
                    <Inputs title='Photo' placeholder='Photo URL' />
                    <ListaOpciones />
                    <Boton title='Create Member' />
                </form>
            </section>
        </>
    )
}

export const Inputs = ({ title, placeholder }) => {
    const modifiedPlaceholder = `${placeholder} . . .`
    return (
        <>
            <div className='inputs'>
                <label htmlFor="">{title}</label>
                <input type="text" placeholder={modifiedPlaceholder} />
            </div>
        </>
    )
}

Inputs.propTypes = {
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
}

export const ListaOpciones = () => {

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
                <select name="" id="">
                    { equipos.map( (equipo, index) => {
                        return (
                            <option key={ index }>{ equipo }</option>
                        )
                    })}
                </select>
            </div>

        </>
    )
}


export const Boton = ( { title } ) => {
    return (
        <button className='create'> { title } </button>
    )
  }