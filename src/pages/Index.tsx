import { CreditCard, Users, AlertCircle, Building } from "lucide-react";
import Header from "@/components/Header";
import MetricCard from "@/components/MetricCard";
import PieChart from "@/components/PieChart";
import DataTable from "@/components/DataTable";

const pendingReportData = [
  { name: "Clients Team", value: 150, color: "#9b87f5" },
  { name: "AR Team", value: 100, color: "#F97316" },
  { name: "AP Team", value: 50, color: "#0EA5E9" },
  { name: "Billing Team", value: 20, color: "#D946EF" },
  { name: "IT Team", value: 50, color: "#22C55E" },
];

const exceptionsData = [
  { name: "To be Invoiced", value: 50, color: "#9b87f5" },
  { name: "To be Recovered", value: 20, color: "#F97316" },
  { name: "Input Correction", value: 45, color: "#0EA5E9" },
  { name: "To be written off", value: 30, color: "#D946EF" },
];

const tableData = [
  {
    clientId: "XYZ_013456",
    clientName: "HCL",
    mandateType: "123456789",
    month: "15/01/2019",
    corpName: "Corp name 1",
    amount: "40,000.00",
  },
  {
    clientId: "XYZ_013456",
    clientName: "Yellowchalk",
    mandateType: "123456789",
    month: "15/01/2019",
    corpName: "Corp name 2",
    amount: "55,000.00",
  },
  {
    clientId: "SVO_123454",
    clientName: "Wipro",
    mandateType: "123456789",
    month: "15/01/2019",
    corpName: "Corp name 3",
    amount: "20,000.00",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Reports</h2>
          <select className="px-4 py-2 border rounded-md">
            <option>February</option>
            <option>March</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <MetricCard
            icon={CreditCard}
            title="Total Collection For PDC"
            value="2.00 Cr"
            subtitle="Collection"
            color="bg-primary"
          />
          <MetricCard
            icon={AlertCircle}
            title="Received"
            value="1.50 Cr"
            subtitle="Pending"
            color="bg-secondary"
          />
          <MetricCard
            icon={Building}
            title="Outstanding"
            value="0.50 Cr"
            subtitle="Due"
            color="bg-destructive"
          />
          <MetricCard
            icon={Users}
            title="Total Associates"
            value="300"
            subtitle="Active"
            color="bg-green-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <PieChart data={pendingReportData} title="Pending Report" />
          <PieChart data={exceptionsData} title="Exceptions" />
        </div>

        <DataTable data={tableData} />
      </main>
    </div>
  );
};

export default Index;