export const OptionList = ({teams, value, setTeam}) => {

    const sendChange = (event) => {
        setTeam(event.target.value)
    }

    return (
        <>
            <div className='options'>
                <label>Teams</label>
                <select value={value} onChange={sendChange}>
                    <option value="" disabled defaultValue='' hidden >Select team</option>
                    {teams.map((team, index) => <option key={index} value={team}>{team}</option>)}
                </select>
            </div>

        </>
    )
}
