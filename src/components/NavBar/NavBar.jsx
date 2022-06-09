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
    <nav className='navb' style={{color:"white"}}>
      {/* <Link to="/">Home Page</Link> */}
      <Link style={{color:"black"}} to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link style={{color:"black"}} to="/index">Cocktail Index</Link>
      &nbsp; | &nbsp;
      <Link style={{color:"black"}} to="/random">Random Cocktail</Link>
      &nbsp; | &nbsp;
      <Link style={{color:"black"}} to="/new">Add New Cocktail</Link>
      &nbsp; | &nbsp;
      <Link style={{color:"black"}} to="/favorites">My Favorite Cocktails</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link style={{color:"black"}} to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}

