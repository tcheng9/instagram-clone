import {Link} from 'react-router-dom';
import {signInWithGoogle} from "../firebase";

const Login = () => {
    return (
      <div>
        <h1>Hello from Login Page</h1>
        <ul>
        <Link to = "/"> Main page </Link>
      </ul>

        <button onClick = {signInWithGoogle}> Sign in with google</button>
        <h3> {localStorage.getItem("name")}</h3>
        <h3> {localStorage.getItem("email")}</h3>
        <img src = {localStorage.getItem("profilePic")}/>
      </div>
    );
  };
  
  // Lingering issue: Need to auto update the info. Right now, you have to refresh the page to update info.
  export default Login;