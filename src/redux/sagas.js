/* eslint-disable no-plusplus */
/* eslint-disable object-shorthand */
/* eslint-disable dot-notation */
/* eslint-disable prefer-const */
import { all, takeEvery, put, call, select } from 'redux-saga/effects'
import { notification, message } from 'antd'
import { fetchData } from './services'
import actions from './actions'

export function* GET_DATA() {
    yield put({
        type: 'SET_STATE',
        payload: {
            loading: false,
            error: null,
        },
    })

    yield put({
        type: 'FETCH_DATA',
        payload: {
            city: "MUMBAI"
        },
    })
}

export function* FETCH_DATA({ payload }) {
    yield put({
        type: 'SET_STATE',
        payload: {
            loading: true,
        },
    })

    const response = yield call(fetchData, payload)
    console.log("in response", response)

    if (response && response.data) {
        yield put({
            type: 'SET_STATE',
            payload: {
                loading: false,
                error: null,
                bankList: response.data
            },
        })
    } else {
        notification.error({
            message: 'Something went wrong',
            description: 'Request failed with status code 404'
        })
        yield put({
            type: 'SET_STATE',
            payload: {
                loading: false,
                error: "Request failed with status code 404"
            },
        })
    }
}


export default function* rootSaga() {
    yield all([
        takeEvery(actions.GET_DATA, GET_DATA),
        takeEvery(actions.FETCH_DATA, FETCH_DATA),
    ])
}
