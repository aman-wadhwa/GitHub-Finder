

function UserItem({user : {login , avatar_url}}) {
  
  return (
    <div className="flex items-center p-4 bg-purple shadow-md rounded-lg space-x-4 hover:shadow-lg transition-shadow">
        <div className="avatar">
            <div className="w-12 h-12 rounded-full border-2 border-gray-300">
            <img src={avatar_url} alt='Loading...' ></img>
            </div>
        </div>
        <div className="text-lg font-semibold text-gray-800">
            {login}
            
        </div>
    </div>
  )
}

export default UserItem
