
export const AddTeam = ( {changeShow} ) => {

    return (
      <>
        <section className='org'>
            <div>
                <h3>Click on icon to add team</h3>
                <img src="/add_team.png" alt="icon" onClick={ changeShow }/>
            </div>
        </section>
      </>
    )
  }