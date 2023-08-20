import React, { useState } from 'react'
import { Header } from './components/header/Header'
import { Org } from './components/Org/Org'
import { Team } from './components/team/Team'


const equipos = [
  {
    title: 'Front End',
    background_color: '#62997a',
    border_color: 'rgb(112, 209, 112)'
  },
  {
    title: 'Back End',
    background_color: '#ab9a89',
    border_color: 'rgb(112, 209, 112)'
  },
  {
    title: 'Data Science',
    background_color: '#a3606d',
    border_color: 'rgb(112, 209, 112)'
  },
  {
    title: 'Devops',
    background_color: '#4f2d4b',
    border_color: 'rgb(112, 209, 112)'
  },
  {
    title: 'QA',
    background_color: '#291e40',
    border_color: 'rgb(112, 209, 112)'
  },
  {
    title: 'IoT',
    background_color: 'black',
    border_color: 'rgb(112, 209, 112)'
  }
]



export const App = () => {

  // Register member
  const [member, setMember] = useState([])

  const memberRegister = (member) => {
    setMember([...member, member])
  }

  return (
    <>
      <Header />
      <Org />
      {
        equipos.map((team) => (<Team data={team} key={team.title} 
        memberRegister = { memberRegister }/>))
      }
    </>
  )
}