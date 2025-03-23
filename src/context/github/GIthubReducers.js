    const githubReducer = (state, action) => {
        switch(action.type){
            case 'GET_USERS':
                return {
                    ...state,
                    users:action.payload,
                    loading:false
                }
            case 'GET_USER' :
                return {
                    ...state,
                    user:action.payload,
                    userloading:false
                }
            case 'GET_REPOS' :
                return {
                    ...state,
                    repos:action.payload,
                    loading:false
                }
            case 'SET_LOADING':
                return {
                    ...state,
                    loading:true
                }

            case 'SET_USERLOADING':
                    return {
                        ...state,
                        userloading:true
                }
            case 'CLEAR_USERS':
                return {
                    ...state, 
                    users:[],
                    loading:false,
                    userloading:false
                }
            default :
                return state
        }
    }

export default githubReducer