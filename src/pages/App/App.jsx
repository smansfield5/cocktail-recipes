import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import HomePage from '../HomePage/HomePage';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import CocktailDetailPage from '../CocktailDetailPage/CocktailDetailPage';
import RecipeIndex from '../RecipeIndex/RecipeIndex'
import RandomCocktail from '../RandomCocktail/RandomCocktail' 


function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/index" element={<RecipeIndex />} />
            <Route path="/random" element={<RandomCocktail />} />
            <Route path="/detail/:idDrink" element={<CocktailDetailPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
export default App;




