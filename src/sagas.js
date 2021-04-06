import {all} from 'redux-saga/effects'
import banks from './redux/sagas'

export default function * rootSaga() {
    yield all([banks()])
}