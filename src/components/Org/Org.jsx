import './Org.css'
import { useState } from "react";


const [showForm, updateShow] = useState( true )

const changeShow = () => {
    updateShow(!showForm)
}

export const Org = ( {changeShow} ) => {
    return (
      <>
        <section className='org'>
            <h1>My Staff</h1>
            <img src="/public/staff.png" alt="icon" onClick={ changeShow }/>
        </section>
      </>
    )
  }