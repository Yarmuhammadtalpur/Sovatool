import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import Login from "./components/LogIn/Login";
import ProtectedRoutes from "./Utils/ProtectedRoutes";
function App() {
  const [error, setError] = useState({ boolean: null, message: null });

  return (
    <>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route
          path="/login"
          element={<Login error={error} setError={setError} />}
        />
      </Routes>
    </>
  );
}

export default App;
