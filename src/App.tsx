import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RobotListPage from "./pages/RobotListPage";
import RobotForm from "./pages/RobotForm";
import { getCurrentUser } from "./api/auth";

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
                element={isAuthenticated ? <RobotListPage /> : <LoginPage />}
              />
              <Route path="/robot" element={<RobotForm />} />
              <Route path="/robot/:id" element={<RobotForm />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
