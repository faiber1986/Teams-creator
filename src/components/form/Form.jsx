import { useState } from 'react'
import { Button } from '../button/Button'
import { Inputs } from '../inputs/Inputs'
import { OptionList } from '../option-list/OptionList'
import './Form.css'
import { AddTeam } from '../add-team/AddTeam'

export const Form = (props) => {


    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [photo, setPhoto] = useState('')
    const [team, setTeam] = useState('')
    const [teamName, setTeamName] = useState('')
    const [teamColor, setTeamColor] = useState('')


    const { memberRegister, createTeam } = props

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

    const sendTeam = (event) => {
        event.preventDefault()
        createTeam({ title:teamName, background_color:teamColor })
    }

    return (
        <>
            <section className='form'>
                <form onSubmit={sendForm}>
                    <h2>Enter member information</h2>
                    <Inputs
                        title='Name'
                        placeholder='Input full name'
                        required
                        value={name}
                        setValue={setName}
                    />
                    <Inputs
                        title='Position'
                        placeholder='Input position'
                        required
                        value={position}
                        setValue={setPosition}
                    />
                    <Inputs
                        title='Photo'
                        placeholder='Photo URL'
                        required
                        value={photo}
                        setValue={setPhoto}
                    />
                    <OptionList
                        value={team}
                        setTeam={setTeam}
                    />
                    <Button title='Create Member' />
                    <AddTeam />
                </form>
                <form onSubmit={sendTeam}>
                    <h2>Enter team information</h2>
                    <Inputs
                        title='Team Name'
                        placeholder='Input team name'
                        required
                        value={teamName}
                        setValue={setTeamName}
                    />
                    <Inputs
                        title='Team color'
                        placeholder='Input team color in Hex format'
                        required
                        value={teamColor}
                        setValue={setTeamColor}
                    />
                    <Button title='Create Team' />
                </form>
            </section>
        </>
    )
}
