const initialState = {
    syncPosts: [],
    fetchedPosts: [],
    isLoaded: false,
    alertForm: false
}


const posts = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_POSTS":
            return {
                ...state,
                syncPosts: [
                    ...state.syncPosts,
                    action.payload
                ]
            }
        case "SET_FETCHED_POSTS":
            return {
                ...state,
                fetchedPosts: action.payload,
                isLoaded: false
            }
        case "SET_LOADER":
            return {
                ...state,
                isLoaded: action.payload
            }
        case "SET_ALERT_FORM":
            return {
                ...state,
                alertForm: action.payload
            }

        default:
            return state;
    }
}

export default posts;