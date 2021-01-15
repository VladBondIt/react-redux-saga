import { takeEvery, put, call } from 'redux-saga/effects';
import { loader, setFetchedPosts } from './actions/fetchPosts'

// TakeEvery обрабатывает экшон входящий в стор
export function* sagaWatcher() {
    yield takeEvery("REQUEST_POSTS", sagaWorker)
}

function* sagaWorker() {
    yield put(loader(true))
    const payload = yield call(fetchedPosts)
    yield put(setFetchedPosts(payload))
    yield put(loader(false))
}

async function fetchedPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    return await res.json();
}