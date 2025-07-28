import React, { useState } from 'react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('main');

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Настройки
      </h1>
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setActiveTab('main')}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'main'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Основные
        </button>
        <button
          onClick={() => setActiveTab('templates')}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'templates'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Шаблоны
        </button>
        {/* Add more tabs */}
      </div>
      <div className="mt-6">
        {activeTab === 'main' && (
          <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <p className="text-gray-500 dark:text-gray-400">
              Здесь будут основные настройки...
            </p>
          </div>
        )}
        {activeTab === 'templates' && (
          <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <p className="text-gray-500 dark:text-gray-400">
              Здесь будут шаблоны...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
