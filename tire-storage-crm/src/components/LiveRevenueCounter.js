import React, { useState, useEffect } from 'react';

const LiveRevenueCounter = ({ initialRevenue }) => {
  const [revenue, setRevenue] = useState(initialRevenue);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue((prevRevenue) => prevRevenue + 1); // Increment by 1 every second for demonstration
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
        "Живой" счетчик дохода
      </h3>
      <p className="text-3xl font-bold text-green-500">
        {new Intl.NumberFormat('ru-RU').format(revenue)}₽
      </p>
    </div>
  );
};

export default LiveRevenueCounter;
