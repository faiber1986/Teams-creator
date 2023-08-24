import './Org.css'

export const Org = ( {changeShow} ) => {

    return (
      <>
        <section className='org'>
            <h1>My Staff</h1>
            <div>
                <h3>Click on icon to add member</h3>
                <img src="/staff.png" alt="icon" onClick={ changeShow }/>
            </div>
        </section>
      </>
    )
  }