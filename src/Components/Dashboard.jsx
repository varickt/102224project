// src/components/Dashboard.jsx

import Sidebar from './Sidebar';
import TransactionBar from './TransactionBar';
import FAQs from 'FAQs';

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
