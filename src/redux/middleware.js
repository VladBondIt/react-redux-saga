import { setAlertForm } from "./actions/posts"

const forbiddenWords = ['fuck', 'spam', 'ass']

// Деструктурируем диспатч из стейта
export function forbiddenWordsMiddleware({ dispatch }) {
    return function (next) {
        return function (action) {
            if (action.type === "CREATE_POSTS") {

                const found = forbiddenWords.filter(word => word === action.payload.title)
                console.log(found)
                if (found.length) {
                    return dispatch(setAlertForm(true))
                } else {
                    return dispatch(setAlertForm(false))
                }

            }
            return next(action);
        }
    }
}