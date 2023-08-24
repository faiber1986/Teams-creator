export const OptionList = (props) => {

    const teams = [
        'Front End',
        'Back End',
        'Data Science',
        'Devops',
        'QA',
        'IoT',
    ];

    const sendChange = (event) => {
        props.setTeam(event.target.value)
    }

    return (
        <>
            <div className='options'>
                <label>Teams</label>
                <select value={props.value} onChange={sendChange}>
                    <option value="" disabled defaultValue='' hidden >Select team</option>

                    // Siempre que se trabaje con la función map, debemos tener key (index)
                    {teams.map((team, index) => <option key={index} value={team}>{team}</option>)}
                </select>
            </div>

        </>
    )
}
