import './Member.css';
import { MdCancel } from "react-icons/md";

export const Member = (props) => {

  const { name, position, photo, id} = props.data
  const { background_color, deleteMember } = props

  const border = {
    backgroundColor: background_color
  }

  return (
    <div className='person'>
      <MdCancel className='delete' onClick={() => deleteMember(id)} />
      <div className='header-member' style={border}>
        <img src={photo} alt={name} />
      </div>
      <div className='info'>
        <h4>{name}</h4>
        <h5>{position}</h5>
      </div>
    </div>
  )

}

