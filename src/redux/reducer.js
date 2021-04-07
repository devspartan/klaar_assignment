import actions from './actions'
import { notification } from 'antd'

const getFromLocalStorage = () => {
  try {
    const tempList = localStorage.getItem('favBanksList')
    if (tempList === undefined || tempList === null) {
      return []
    } else {
      return JSON.parse(tempList)
    }
  } catch (e) {
    notification.error({
      message: 'Something went wrong',
      description: JSON.parse(e)
    })
    return []
  }
}

const initialState = {
  loading: false,
  error: null,
  favBanksList: getFromLocalStorage(),
  bankList: [],
}

export default function bankReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }

    case actions.APPEND_FAV_LIST:
      return {
        ...state,
        favBanksList: [action.payload.ifsc, ...state.favBanksList],
      }
    case actions.REMOVE_FROM_FAV_LIST:
      const tempArr = []
      state.favBanksList.forEach(item => {
        if (item !== action.payload.ifsc) {
          tempArr.push(item)
        }
      })
      return { ...state, favBanksList: tempArr }

    default:
      return state
  }
}
