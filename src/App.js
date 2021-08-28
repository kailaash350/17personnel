import './App.css';
import LoginCard from './Components/LoginCard';
import Header from './Components/Header';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import RegistertoUs from './Components/RegistertoUs';
import PersonnelPage from './Components/PersonnelPage';
import ForgotPassword from './Components/ForgotPassword';

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <Header/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/login" component={LoginCard}/>
      <Route path="/register" component={RegistertoUs}/>
      <Route path = "/Auth=true" exact component={PersonnelPage}/>
      <Route path="/resetPwd=true" component={ForgotPassword}/>

      </Switch>
    </div>

    </BrowserRouter>
  );
}

export default App;
