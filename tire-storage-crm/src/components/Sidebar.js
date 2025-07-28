import React from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white dark:bg-gray-800 shadow-md flex flex-col justify-between">
      <div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            CRM
          </h2>
        </div>
      <nav className="mt-6">
        <Link
          to="/"
          className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <span className="mx-3">Дашборд</span>
        </Link>
        <Link
          to="/clients"
          className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <span className="mx-3">Клиенты</span>
        </Link>
        <Link
          to="/settings"
          className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <span className="mx-3">Настройки</span>
        </Link>
      </nav>
      </div>
      <div className="p-6">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
