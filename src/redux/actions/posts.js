export const createPosts = (postObj) => ({
    type: "CREATE_POSTS",
    payload: postObj
})


export const setAlertForm = (alertBoolean) => ({
    type: "SET_ALER_FORM",
    payload: alertBoolean
})

