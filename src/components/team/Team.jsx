import { Member } from '../member/Member';
import hexToRgba from 'hex-to-rgba';
import './Team.css'

export const Team = (props) => {

    const { title, background_color, id } = props.data;
    const { members, deleteMember, updateBGColor } = props

    const background = {
        backgroundColor: hexToRgba(background_color, 0.25)
    }

  return <>{ members.length > 0 &&
    <section className='team' style={ background }>
        <input 
          className='input-color'
          type="color"
          value={background_color}
          onChange={ (event) => {
            updateBGColor(event.target.value, id)
          }}
        />
        <h2 className='title' >{ title }</h2>
        <div className='member'>
          {
            members.map( (member, index) => <Member 
              data={member} 
              key={index} 
              background_color={background_color}
              deleteMember={deleteMember}
              />)
          }
        </div>
    </section>
  }</>
}
