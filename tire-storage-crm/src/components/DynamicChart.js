import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = {
  '7d': [
    { name: 'Пн', Выручка: 4000, Клиенты: 24, Долг: 2400 },
    { name: 'Вт', Выручка: 3000, Клиенты: 13, Долг: 2210 },
    { name: 'Ср', Выручка: 2000, Клиенты: 98, Долг: 2290 },
    { name: 'Чт', Выручка: 2780, Клиенты: 39, Долг: 2000 },
    { name: 'Пт', Выручка: 1890, Клиенты: 48, Долг: 2181 },
    { name: 'Сб', Выручка: 2390, Клиенты: 38, Долг: 2500 },
    { name: 'Вс', Выручка: 3490, Клиенты: 43, Долг: 2100 },
  ],
  // Add more data for 30d, 6m, 1y, all
};

const DynamicChart = () => {
  const [dataType, setDataType] = useState('Выручка');
  const [timeRange, setTimeRange] = useState('7d');
  const [chartType, setChartType] = useState('bar');

  const chartData = data[timeRange] || data['7d'];

  const ChartComponent = chartType === 'bar' ? BarChart : LineChart;
  const ChartElement = chartType === 'bar' ? Bar : Line;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          Аналитика
        </h3>
        <div className="flex space-x-2">
          <select
            value={dataType}
            onChange={(e) => setDataType(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          >
            <option value="Выручка">Выручка</option>
            <option value="Клиенты">Клиенты</option>
            <option value="Долг">Долг</option>
          </select>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          >
            <option value="7d">7 дней</option>
            {/* Add more options */}
          </select>
          <select
            value={chartType}
            onChange={(e) => setChartType(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          >
            <option value="bar">Гистограмма</option>
            <option value="line">Линейный</option>
          </select>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <ChartComponent data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ChartElement dataKey={dataType} fill="#8884d8" />
        </ChartComponent>
      </ResponsiveContainer>
    </div>
  );
};

export default DynamicChart;
