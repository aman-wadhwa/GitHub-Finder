import { createContext, useReducer} from "react" 
import githubReducer from "./GIthubReducers"

const GithubContext = createContext()

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

// const GITHUB_URL = 'https://api.github.com'

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
    
    // const setloading = () => dispatch({type: 'SET_LOADING'})

    // const setuserloading = () => dispatch({type: 'SET_USERLOADING'})

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


    // const clearUsers = () => {
    //     dispatch({
    //         type: 'CLEAR_USERS'
    //     })
    // }

    return <GithubContext.Provider  value={{
        ...state,
        dispatch,
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext