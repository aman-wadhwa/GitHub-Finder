import { useContext} from "react"
import Loading from "../layout/Loading";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";
function UserResults() { 
    // const {fetchUsers} = useContext(GithubContext);
    // console.log(users);
    // co nsole.log(loading)
    
    const {users,loading} = useContext(GithubContext)
    console.log(loading)

    
    if(!loading){
        return (
            <>
            {/* <Loading/> */}
                <div>
                    {users.map((user)=>{
                       
                        return <UserItem key={user.id} user={user}/>
                    })}
                </div>
            </>
        )
    }

    else{
        return <Loading/>
    }
  
}

export default UserResults
