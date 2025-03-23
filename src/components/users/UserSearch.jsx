import { useState , useContext} from "react"
import GithubContext from '../../context/github/GithubContext'
import AlertContext from "../../context/alert/AlertContext";
import Alert from "../layout/Alert";

function UserSearch() {
  const {users, searchUsers, clearUsers} = useContext(GithubContext)
  const [text,settext] = useState('');

  const {setAlert} = useContext(AlertContext)
  const handleChange = (evt) => settext(evt.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if(text===''){
      setAlert('Field cannot be empty', 'error')
    }
    else{
      searchUsers(text)
      settext('')
    }
  }


  return (
    <>
    <Alert/>
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md-grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input value={text} onChange={handleChange} type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black" placeholder="Search"/>

              <button type='submit' className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
               >Go</button>
            </div>
          </div>
        </form>
      </div>
      {users.length>0 && (
        <div>
        <button className="btn btn-ghost btn-lg" onClick={clearUsers}>Clear</button>
      </div>
      )}
      
    </div>
    </>
  )
}

export default UserSearch
