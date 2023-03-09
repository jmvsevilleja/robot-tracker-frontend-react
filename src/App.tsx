import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { getCurrentUser } from "./api/api";

function App() {
  const currentUser = getCurrentUser();
  const isAuthenticated = Boolean(currentUser);
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <main className="">
            <Routes>
              <Route
                path="*"
                element={isAuthenticated ? <></> : <LoginPage />}
              />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
