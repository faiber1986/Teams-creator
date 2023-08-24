import { useState } from 'react'
import { Button } from '../button/Button'
import { Input } from '../input/Input'
import { OptionList } from '../option-list/OptionList'
import './Form.css'
import { AddTeam } from '../add-team/AddTeam'
import { AddTeamForm } from '../add-team-form/AddTeamForm'

export const Form = (props) => {


    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [photo, setPhoto] = useState('')
    const [team, setTeam] = useState('')
    const [showFormTeam, setShowFormTeam] = useState(false)

    // Function to show or hidde team form
    const changeShowTeam = () => {
        setShowFormTeam(!showFormTeam)
    }

    const { memberRegister, createTeam, teams } = props

    console.log(props)

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

    return (
        <>
            <section className='form'>
                <form onSubmit={sendForm}>
                    <h2>Enter member information</h2>
                    <Input
                        title='Name'
                        placeholder='Input full name'
                        required
                        value={name}
                        setValue={setName}
                    />
                    <Input
                        title='Position'
                        placeholder='Input position'
                        required
                        value={position}
                        setValue={setPosition}
                    />
                    <Input
                        title='Photo'
                        placeholder='Photo URL'
                        required
                        value={photo}
                        setValue={setPhoto}
                    />
                    <OptionList
                        value={team}
                        setTeam={setTeam}
                        teams={teams}
                    />
                    <Button title='Create Member' />
                </form>
                <AddTeam changeShowTeam={changeShowTeam} />
                {
                    showFormTeam && <AddTeamForm
                        createTeam={createTeam}    
                    />
                }

            </section>
        </>
    )
}
