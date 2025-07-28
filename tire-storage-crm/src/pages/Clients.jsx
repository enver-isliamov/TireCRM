import React from 'react';
import { Link } from 'react-router-dom';

const Clients = () => {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Клиенты
      </h1>
      <div className="flex justify-end mb-4">
        <Link
          to="/clients/add"
          className="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Добавить клиента
        </Link>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p className="text-gray-500 dark:text-gray-400">
          Здесь будет таблица клиентов...
        </p>
      </div>
    </div>
  );
};

export default Clients;
