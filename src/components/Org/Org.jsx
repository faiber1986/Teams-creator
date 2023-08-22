import './Org.css'
import { Form } from "../form/Form";
import { useState } from "react";



export const Org = ( ) => {

  const [showForm, updateShow] = useState( true )

  const changeShow = () => {
      updateShow(!showForm)
  }

  const memberRegister = (member) => {
    console.log('Nuevo colaborador: ', member)
  }

    return (
      <>
        <section className='org'>
            <h1>My Staff</h1>
            <div>
                <h3>Click on icon to add member</h3>
                <img src="/staff.png" alt="icon" onClick={ changeShow }/>
            </div>
        </section>
        { ( !showForm ) ? <Form 
            memberRegister = { memberRegister }/> : null }
      </>
    )
  }