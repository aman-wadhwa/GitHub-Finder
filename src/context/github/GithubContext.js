import { createContext, useReducer} from "react" 
import githubReducer from "./GIthubReducers"

const GithubContext = createContext()

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const GITHUB_URL = 'https://api.github.com'

export const GithubProvider = ({children}) => {
    // const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true);

    const initialState = {
        users : [],
        user : {},
        repos : [],
        loading : false,
        userloading : false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)
    
    const setloading = () => dispatch({type: 'SET_LOADING'})

    const setuserloading = () => dispatch({type: 'SET_USERLOADING'})

    // const fetchUsers = async () => {
    //     setloading();
    //     const response = await fetch(`${GITHUB_URL}/users`)
    //         // , 
    //         // {
    //         //     headers : {
    //         //     Authorization : `token ${GITHUB_TOKEN}`
    //         // }
    //         // }
    //     // )
    //     const data = await response.json();
    //     // setUsers(data)
    //     // setLoading(false)
    //     dispatch({
    //         type: 'GET_USERS',
    //         payload:data,
    //     })
    // }

    const searchUsers = async (text) => {
        setloading()

        const params = new URLSearchParams({
            q: text
        })

        const response = await fetch (`${GITHUB_URL}/search/users?${params}`)

        const {items} = await response.json()

        dispatch({
            type:'GET_USERS',
            payload:items
        })
    }

    //getting a single user
    const getUser = async (login) => {
        setuserloading()

        const response = await fetch (`${GITHUB_URL}/users/${login}`)

        if(response.status===404){
            window.location = '/notfound'
        }
        else{
            const data = await response.json()
            dispatch({
                type:'GET_USER',
                payload:data
            })
        }
 
    }

    //get repos of user
    const getUserRepos = async (login) => {
        setloading()

        const params = new URLSearchParams({
            sort: 'created',
            per_page:10,
        }) 

        const response = await fetch (`${GITHUB_URL}/users/${login}/repos?${params}`)

        const data = await response.json()

        dispatch({
            type:'GET_REPOS',
            payload:data
        })
    }

    const clearUsers = () => {
        dispatch({
            type: 'CLEAR_USERS'
        })
    }

    return <GithubContext.Provider  value={{
        users:state.users,
        loading:state.loading,
        user:state.user,
        userloading:state.userloading,
        repos:state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext