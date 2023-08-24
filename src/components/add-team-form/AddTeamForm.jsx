import { Button } from "../button/Button";
import { Input } from "../input/Input";
import React, { useState } from 'react'

export const AddTeamForm = ({createTeam}) => {

    const [teamName, setTeamName] = useState('')
    const [teamColor, setTeamColor] = useState('')

    const sendTeam = (event) => {
        event.preventDefault()
        createTeam({ title: teamName, background_color: teamColor })
    }

    return (
        <form onSubmit={sendTeam}>
            <h2>Enter team information</h2>
            <Input
                title='Team Name'
                placeholder='Input team name'
                required
                value={teamName}
                setValue={setTeamName}
            />
            <Input
                type='color'
                title='Choose team color: '
                placeholder='Input team color in Hex format'
                required
                value={teamColor}
                setValue={setTeamColor}
            />
            <Button title='Create Team' />
        </form>
    )
}

