import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle: string;
  color: string;
}

const MetricCard = ({ icon: Icon, title, value, subtitle, color }: MetricCardProps) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <h3 className="text-2xl font-semibold mt-1">{value}</h3>
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default MetricCard;