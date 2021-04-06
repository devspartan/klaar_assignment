import actions from './actions'
import { notification } from 'antd'

const getFromLocalStorage = () => {
  try {
    console.log("i got in funtxoint")
    const tempList = localStorage.getItem('favBanksList')
    if (tempList === undefined || tempList === null) {
      return []
    } else {
      console.log("i got in return function", JSON.parse(tempList))
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
      let idx = -1
      state.favBanksList.map((item, index) => {
        if (item === action.payload.ifsc) {
          idx = index
        }
      })

      if (idx !== -1) {
        state.favBanksList.splice(idx, 1)
      }

      return { ...state, }

    default:
      return state
  }
}
