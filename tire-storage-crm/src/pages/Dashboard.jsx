import React from 'react';
import MetricCard from '../components/MetricCard';

const Dashboard = () => {
  // Mock data for now
  const totalClients = 125;
  const totalRevenue = '1,250,000₽';
  const totalDebt = '75,000₽';

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Дашборд
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </div>
  );
};

export default Dashboard;
