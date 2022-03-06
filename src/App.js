import logo from './logo.svg';
import './App.css';
import Chat from './Components/Chat';
import SignIn from './Components/SignIn';
import { auth } from './myFirebase';
import { useState } from 'react';



const App = () => {
  const [user, setUser] = useState(null);

  auth.onAuthStateChanged( (user) => {
    if (user) {
      setUser(user);
    } 
    else {
      setUser(null);
    }
  });
    return (
    <div className="App">
      {user && <button onClick={() => auth.signOut()}>Log out</button>}
      {user ? <Chat /> : <SignIn />}

    </div>
  );
}

export default App;
