import React from "react";
import Left from "./home/left/left";
import Right from "./home/right/right";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuth } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import Logout from "./home/left1/Logout";

import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [authUser] = useAuth(); // we don’t need setAuthUser here
  console.log(authUser);

  return (
    <>
      <Routes>
        {/* Protected home route */}
        <Route
          path="/"
          element={
            authUser ? (
              <div className="flex h-screen">
                <Logout />
                <Left />
                <Right />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Login route */}
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />

        {/* Signup route */}
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>

      <Toaster />
    </>
  );
}

export default App;
