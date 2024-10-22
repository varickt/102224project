import { DataGrid } from '@mui/x-data-grid';
import { mockTransactions } from "../data/mockData";

export default function TransactionBar() {
  const columns = [
    { field: 'txId', headerName: 'Transaction ID', flex: 1 },
    { field: 'user', headerName: 'User', flex: 1 },
    { field: 'date', headerName: 'Date', flex: 1 },
    { field: 'cost', headerName: 'Cost', flex: 1 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={mockTransactions} columns={columns} pageSize={5} />
    </div>
  );
}
