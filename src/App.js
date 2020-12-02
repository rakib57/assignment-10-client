    
import React, { createContext, useState } from 'react';
import './App.css';
import Home from './componet/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import NotFound from './componet/NotFound/NotFound';
import Login from './componet/Login/Login';
import PrivateRoute from './componet/PrivateRoute/PrivateRoute';
import Register from './componet/Register/Register';
import Activities from './componet/Activities/Activities';
import PeopleEvent from './componet/PeopleEvent/PeopleEvent';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/work/:name">
            <Register></Register>
          </Route>
         <PrivateRoute path='/donation'>
           <Activities></Activities>
         </PrivateRoute>
         <PrivateRoute path="/event">
            <PeopleEvent></PeopleEvent>
          </PrivateRoute>
          <PrivateRoute path="/register">
            <Register></Register>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;

