import './Org.css'
import { Formulario } from "../formulario/Formulario";
import { useState } from "react";



export const Org = ( ) => {

  const [showForm, updateShow] = useState( true )

  const changeShow = () => {
      updateShow(!showForm)
  }
    return (
      <>
        <section className='org'>
            <h1>My Staff</h1>
            <img src="/staff.png" alt="icon" onClick={ changeShow }/>
        </section>
        { ( !showForm ) ? <Formulario /> : null }
      </>
    )
  }