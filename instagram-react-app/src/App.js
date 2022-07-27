
import {Link} from 'react-router-dom';
import RouteSwitch from './components/RouteSwitch';

function App() {
  return (
    <div className="App">
      Temporary main page for all pages  - WILL BE REPLACED BY LOGIN PAGE/INSTAGRAM HOME PAGE
      
      <ul> 
        <li> 
          <Link to = "/Profile"> Profile </Link>  
        </li>

        <li> 
          <Link to = "/addPicture"> Importing Picture </Link>  
        </li>

        <li> 
          <Link to = "/home"> Home </Link>  
        </li>

        <li> 
          <Link to = "/login"> login </Link>  
        </li>

      </ul>

      
    </div>
  );
}

export default App;
