import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../myFirebase";
import { useState } from "react";


const SignIn = (props) => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };
    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    };
    const handleLogin = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, enteredEmail, enteredPassword); 
    };
    const handleRegister = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
    };
    return (
        < div >
            <h1>Please Log In</h1>
            <form>
                <label>
                    <p>Email</p>
                    <input type="text" value={enteredEmail} onChange={emailChangeHandler} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" value={enteredPassword} onChange={passwordChangeHandler} />
                </label>
                <div>
                    <button onClick={handleRegister}>Sign Up</button>
                    <button onClick={handleLogin}>Log In</button>
                </div>
            </form>
        </div >
    )
}
export default SignIn;