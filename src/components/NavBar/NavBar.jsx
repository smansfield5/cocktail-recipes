import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';


export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <nav>
      {/* <Link to="/">Home Page</Link> */}
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/app/index">Recipe Index</Link>
      &nbsp; | &nbsp;
      <Link to="/app/new">Add New Cocktail</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}

