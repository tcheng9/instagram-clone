import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
      <div>
        <h1>Hello from Main/Home page of instagram</h1>

        <ul>
        <Link to = "/"> Main page </Link>
      </ul>
      </div>
    );
  };
  
  export default HomePage;