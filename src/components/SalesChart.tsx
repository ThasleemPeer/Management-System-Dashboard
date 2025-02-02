import React from 'react';
import { SalesData } from '../types';
import { TrendingUp } from 'lucide-react';

interface SalesChartProps {
  data: SalesData[];
}

export const SalesChart: React.FC<SalesChartProps> = ({ data }) => {
  const maxAmount = Math.max(...data.map(d => d.amount));
  const totalSales = data.reduce((sum, d) => sum + d.amount, 0);
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Sales Overview</h2>
        <div className="flex items-center text-green-600">
          <TrendingUp className="w-5 h-5 mr-2" />
          <span className="font-medium">+12.5%</span>
        </div>
      </div>
      
      <div className="text-3xl font-bold text-gray-800 mb-6">
        ${totalSales.toLocaleString()}
        <span className="text-sm font-normal text-gray-500 ml-2">total sales</span>
      </div>

      <div className="relative h-64">
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between h-48">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center w-1/6">
              <div
                className="w-12 bg-blue-500 rounded-t"
                style={{
                  height: `${(item.amount / maxAmount) * 100}%`,
                  transition: 'height 0.3s ease-in-out',
                }}
              />
              <span className="text-sm text-gray-600 mt-2">{item.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};