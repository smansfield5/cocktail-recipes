import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import HomePage from '../HomePage/HomePage';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NewRecipePage from '../NewRecipePage/NewRecipePage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
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
            <Route path="/app" element={<HomePage />} />
            <Route path="/app/index" element={<RecipeIndex />} />
            <Route path="/app/random" element={<RandomCocktail />} />
            <Route path="/app/new" element={<NewRecipePage />} />
            <Route path="/app" element={<OrderHistoryPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
export default App;




