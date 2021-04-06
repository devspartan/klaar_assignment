import './App.css';
import "antd/dist/antd.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/index'
import Profile from './Profile/index'

function App() {
  return (
    <BrowserRouter>
      <Switch >
        <Route path='/' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
