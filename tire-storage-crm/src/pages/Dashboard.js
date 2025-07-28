import React from 'react';
import MetricCard from '../components/MetricCard';
import LiveRevenueCounter from '../components/LiveRevenueCounter';
import DynamicChart from '../components/DynamicChart';

const Dashboard = () => {
  // Mock data for now
  const totalClients = 125;
  const totalRevenue = '1,250,000₽';
  const totalDebt = '75,000₽';
  const initialRevenue = 1250000;

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Дашборд
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Всего клиентов"
          value={totalClients}
          icon={<span>👥</span>}
        />
        <MetricCard
          title="Общая выручка"
          value={totalRevenue}
          icon={<span>💰</span>}
        />
        <MetricCard
          title="Общая сумма долга"
          value={totalDebt}
          icon={<span>💳</span>}
        />
        <LiveRevenueCounter initialRevenue={initialRevenue} />
      </div>
      <div className="mt-8">
        <DynamicChart />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Сроки хранения
        </h2>
        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <p className="text-gray-500 dark:text-gray-400">
            Здесь будет диаграмма Ганта... (в разработке)
          </p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Скоро заканчивается срок
          </h2>
          <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <p className="text-gray-500 dark:text-gray-400">
              Здесь будет список клиентов... (в разработке)
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Должники
          </h2>
          <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <p className="text-gray-500 dark:text-gray-400">
              Здесь будет список должников... (в разработке)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
