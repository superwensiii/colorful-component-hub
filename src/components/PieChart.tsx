import { PieChart as RechartsChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface DataItem {
  name: string;
  value: number;
  color: string;
}

interface PieChartProps {
  data: DataItem[];
  title: string;
}

const PieChart = ({ data, title }: PieChartProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </RechartsChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChart;