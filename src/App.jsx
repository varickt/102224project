import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app-container">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
