import './App.css';
import LoginCard from './Components/LoginCard';
import Header from './Components/Header';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom';
import Home from './Components/Home';
import RegistertoUs from './Components/RegistertoUs';
import Success from './Components/Success';
import AuthCheck from './Components/AuthCheck';

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <Header/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/login" component={LoginCard}/>
      <Route path="/register" component={RegistertoUs}/>
      <AuthCheck path = "/success" exact component={Success}/>

      </Switch>
    </div>

    </BrowserRouter>
  );
}

export default App;
