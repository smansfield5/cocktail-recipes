import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import NewRecipePage from '../NewRecipePage/NewRecipePage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import RecipeIndex from '../RecipeIndex/RecipeIndex'

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/app/index" element={<RecipeIndex />} />
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




