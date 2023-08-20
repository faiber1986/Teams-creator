import { Member } from '../member/Member';
import './Team.css'

export const Team = ( {data} ) => {

    const { title, background_color, border_color } = data;
    const background = {
        backgroundColor: background_color
    }

  return (
    <section className='team' style={ background }>
        <h2 className='title'>{ title }</h2>
        <div className='member'>
          <Member />
          <Member />
        </div>
    </section>
  )
}
