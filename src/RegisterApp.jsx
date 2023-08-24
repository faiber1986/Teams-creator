import React, { useState } from 'react'
import { Header } from './components/header/Header'
import { Org } from './components/org/Org'
import { Footer } from './components/footer/Footer'
import { Form } from './components/form/Form'
import { Team } from './components/team/Team'
import { v4 as uuidv4 } from "uuid";

export const RegisterApp = () => {

    const [showForm, useShowForm] = useState(true)
    const [members, setMembers] = useState([
        {
        id: uuidv4(),
        team: 'Front End',
        photo: 'https://scontent.feoh4-3.fna.fbcdn.net/v/t31.18172-8/16177507_10154288561473310_8911166474959536167_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHzAyXpt1UJfvZmbVw2vUnK5gsxtTAIaZrmCzG1MAhpmnBk9danWD6n0EKnMohUu7c&_nc_ohc=s1JFikrxnwwAX_ECmuB&_nc_ht=scontent.feoh4-3.fna&oh=00_AfC2LpmvNHhhySkGn8PpwRGNT8pA3gM08G6Lr6vjoANIVA&oe=650E11C5',
        name: 'Andres Montes',
        position: 'Sr React Developer'
        },
        {
            id: uuidv4(),
            team: 'Back End',
            photo: 'https://scontent.feoh4-4.fna.fbcdn.net/v/t1.6435-9/172539840_4198226353562309_691095403147225271_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFdH-NQHbfDYpHSONbqds4X_aIZvzT1bT_9ohm_NPVtP1gCTPbumr-seuXqJscJJS8&_nc_ohc=crdKaN_dfb8AX-XE4jl&_nc_ht=scontent.feoh4-4.fna&oh=00_AfA-tCyr8uZ8gIuAiQKW0FFz0KaPFEZQJkX1ixNwDsYg4w&oe=650E3107',
            name: 'Robinson Montes',
            position: 'Sr Python Developer'
        }
    ])

    const [teams, setTeams] = useState([
        {
            id: uuidv4(),
            title: 'Front End',
            background_color: '#62997a',
        },
        {
            id: uuidv4(),
            title: 'Back End',
            background_color: '#ab9a89',
        },
        {
            id: uuidv4(),
            title: 'Data Science',
            background_color: '#a3606d',
        },
        {
            id: uuidv4(),
            title: 'Devops',
            background_color: '#4f2d4b',
        },
        {
            id: uuidv4(),
            title: 'QA',
            background_color: '#291e40',
        },
        {
            id: uuidv4(),
            title: 'IoT',
            background_color: '#6f6f71',
        }
    ])

    // Function to show or hidde form
    const changeShow = () => {
        useShowForm(!showForm)
    }

    // Function to register member
    const memberRegister = (member) => {
        setMembers([...members, member])
    }

    // Function to delete member
    const deleteMember = (id) => {
        const newMembers = members.filter((member) => member.id !== id )
        setMembers(newMembers)
    }

    // Function to update color of team
    const updateBGColor = (color, id) => {
        const updateTeams = teams.map((team) => {
            if(team.id === id){
                team.background_color = color
            }
            return team
        })
        setTeams(updateTeams)
    }

    // Function to create team
    const createTeam = (newTeam) => {
        setTeams([...teams, { ...newTeam, id: uuidv4() }])
    }

    return (
        <>
            <Header />
            <Org changeShow={changeShow} />
            {
                showForm && <Form
                    teams={teams.map((team) => team.title)}
                    memberRegister={memberRegister}
                    createTeam={createTeam}
                />
            }
            {
                teams.map((team) => (<Team 
                    data={team} 
                    key={team.title}
                    members={members.filter( member => member.team === team.title)}
                    deleteMember={deleteMember}
                    updateBGColor={updateBGColor}
                    />))
            }
            <Footer />
        </>
    )
}
