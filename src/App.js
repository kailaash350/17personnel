import './App.css';
import LoginCard from './Components/LoginCard';
import Header from './Components/Header';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom';
import Home from './Components/Home';
import RegistertoUs from './Components/RegistertoUs';


function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <Header/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/login" component={LoginCard}/>
      <Route path="/register" component={RegistertoUs}/>
      </Switch>
    </div>

    </BrowserRouter>
  );
}

export default App;
