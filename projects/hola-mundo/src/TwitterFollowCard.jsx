import { useState } from "react"

const TwitterFollowCard = ({ userName, name, initialIsFollowing}) => {
   const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
  
  return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' src={`https://unavatar.io/twitter/${userName}`} alt="avatar" />
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>@{userName}</span>
            </div>
        </header>
        <aside>
            <button onClick={handleClick} className={buttonClassName}>
                <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-stopFollow">Dejar de seguir</span>
            </button>
        </aside>
    </article>
  )
}

export default TwitterFollowCard