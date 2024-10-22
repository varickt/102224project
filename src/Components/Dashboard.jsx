// src/components/Dashboard.jsx

import Sidebar from './Components/Sidebar';
import TransactionBar from './Components/TransactionBar';
import FAQs from './Components/FAQs';

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <TransactionBar />
      <FAQs />
    </div>
  );
};

export default Dashboard;
