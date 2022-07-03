import Navbar from './Navbar'
import Home from './Home'

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { auth } from "./firebase.js";
import {Owner} from './Auth'
import SignIn from './Login';
import { useAuthState } from "react-firebase-hooks/auth";
import {BrowserRouter as Router,Route ,Switch} from 'react-router-dom';
import Add from './Add'
import Info from './Info';
import Loading from './Loading';
function App() {

  const [user]= useAuthState(auth);
  return (
    <Owner>
    <Router>
      
    <div >
      
    <Switch>
      <Route exact path="/">
      {user ? <Home/> : <SignIn />}
      </Route>
   
   
    
      <Route exact path="/add">
        <Add />
      </Route>
      
      <Route exact path="/info/:id">
        
          <Info />
      </Route>
      
     
    </Switch>
   
     
    </div>
    
    </Router>
    </Owner>
    
  );
}

export default App;
