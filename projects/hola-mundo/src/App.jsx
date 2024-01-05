import './App.css'
import TwitterFollowCard from './TwitterFollowCard'


const users = [
    {
        name:"Miguel Angel",
        userName:"midudev",
        isFollowing:true,
    },
    {
        name:"Juan Pablo de la Torre",
        userName:"codigoconjuan",
        isFollowing:true,
    },

    {
        name:"Elon Musk",
        userName:"elonmusk",
        isFollowing:true,
    },

    {
        name:"Vanderhart",
        userName:"vxnder",
        isFollowing:true,
    },
]
const App = () => {

  return (
    <div className='App'>
        <TwitterFollowCard
            
            
            userName="midudev"
            name="Miguel Ángel Durán"/>
        <TwitterFollowCard initialIsFollowing  userName="codigoconjuan" name="Juan Pablo De La Torre"/>
        <TwitterFollowCard   userName="elonmusk" name="Elon Musk"/>
        <TwitterFollowCard   userName="vxnder" name="Vanderhart"/>

        {
            users.map(({ userName, name, isFollowing }) => (
                <TwitterFollowCard
                key={userName}
                userName={userName}
                initialIsFollowing={isFollowing}
                name={name}
                >

                </TwitterFollowCard>
            ))
        }
    </div>
  )
}

export default App