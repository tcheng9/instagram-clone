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
        <h3> {localStorage.getItem("profilePic")}</h3>
      </div>
    );
  };
  
  export default Login;