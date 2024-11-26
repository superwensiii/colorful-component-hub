import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface DataTableProps {
  data: any[];
}

const DataTable = ({ data }: DataTableProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Reports</h3>
          <div className="flex space-x-2">
            <select className="px-3 py-1 border rounded-md text-sm">
              <option>Select Month</option>
              <option>January</option>
              <option>February</option>
            </select>
            <button className="px-4 py-1 bg-primary text-white rounded-md text-sm">
              Download
            </button>
          </div>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Client ID</TableHead>
            <TableHead>Client Name</TableHead>
            <TableHead>Mandate Type</TableHead>
            <TableHead>Month</TableHead>
            <TableHead>Corp Name</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              <TableCell>{row.clientId}</TableCell>
              <TableCell>{row.clientName}</TableCell>
              <TableCell>{row.mandateType}</TableCell>
              <TableCell>{row.month}</TableCell>
              <TableCell>{row.corpName}</TableCell>
              <TableCell>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;