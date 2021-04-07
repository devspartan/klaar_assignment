import './App.css';
import "antd/dist/antd.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Profile from './Profile/index'
import Error from './Error'
import { Provider } from 'react-redux'
import BankReducer from './redux/reducer'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import Sagas from './sagas'
import { notification } from 'antd';
import WithCache from './Home/withCache';

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('favBanksList', JSON.stringify(state.banks.favBanksList))
  } catch (e) {
    notification.error({
      message: 'Something went wrong',
      description: JSON.parse(e)
    })
  }
}

const rootReducer = combineReducers({ banks: BankReducer })
const sagaMiddleware = createSagaMiddleware()
const middlewares = [thunk, logger, sagaMiddleware]
const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)))
sagaMiddleware.run(Sagas)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch >
          <Route path='/' exact component={WithCache} />
          <Route path='/profile/' component={Profile} exact />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

store.subscribe(() => saveToLocalStorage(store.getState()))

export default App;
