import { Routes, Route, Link } from "react-router-dom";
import RetrievePage from "./pages/RetrievePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import UpdatePage from "./pages/UpdatePage.jsx";

function App() {
  return (
    <>
      <header>
        <h1>Your Own Workout Tracker</h1>
        <p>Choose your workouts and track your progress over time.</p>
      </header>

      <nav>
        <Link to="/">Retrieve</Link>
        <Link to="/create">Create</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<RetrievePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/edit/:id" element={<UpdatePage />} />
        </Routes>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Mykola Lopushenko</p>
      </footer>
    </>
  );
}

export default App;