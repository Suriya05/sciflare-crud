import AllUsers from './Component/AllUsers';
import AddUser from './Component/Add';
import EditUser from './Component/Edit';
import NavBar from './Component/NavBar';
import Home from './Component/Home';
import Register from './Register'
import Login from './Login'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  const   isLoggedin = JSON.parse(localStorage.getItem('loggedin'));
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={isLoggedin ? Home : Register} />
        <Route exact path="/all" component={isLoggedin ? AllUsers: Register} />
        <Route exact path="/add" component={isLoggedin ?AddUser: Register} />
        <Route exact path="/edit/:id" component={isLoggedin? EditUser: Register} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
