import React from 'react';
import './App.css';
import Header from './pages/Header';
import Sidebar from './pages/Sidebar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  
} from "react-router-dom";
import Mail from './components/Mail';
import EmailList from './pages/EmailList';

function App() {
  return (
    <Router>
    <div className="app">
      <Header />
      <div className='app__body'>
      <Sidebar />
      <Switch>   {/* Switch is not used anymore with version 6 or higher, I have chosen to use switch -- downgrade your react-router-dom version to 5 or lower. */}
        <Route path='/mail'> {/* This opens when you an email s clicked */}
          <Mail />
        </Route>
        <Route path='/'>   {/* This opens when a user is logged in ( Home Page) */}
          <EmailList />
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
