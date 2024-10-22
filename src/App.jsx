import { useState } from "react";
import Sidebar from "Sidebar";
import Navbar from "Navbar";
import Dashboard from 'Dashboard';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} />
      <Dashboard />
    </div>
  );
}
