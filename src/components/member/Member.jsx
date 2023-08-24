import './Member.css';
import { MdCancel } from "react-icons/md";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

export const Member = ({ background_color, deleteMember, like, data }) => {

  const { name, position, photo, id, fav } = data

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
        <div className='like'>
          {fav ? <AiFillLike className='icon-like' color='green' onClick={() => like(id)} /> : <AiOutlineLike className='icon-like' onClick={() => like(id)} />}
        </div>
      </div>
    </div>
  )

}

