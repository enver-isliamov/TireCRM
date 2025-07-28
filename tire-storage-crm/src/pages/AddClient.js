import React from 'react';

const AddClient = () => {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Добавить клиента
      </h1>
      <form className="space-y-8">
        {/* Section 1: Client and Car */}
        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Клиент и Автомобиль
          </h2>
          {/* Add form fields here */}
        </div>

        {/* Section 2: Tires and Services */}
        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Шины и Услуги
          </h2>
          {/* Add form fields here */}
        </div>

        {/* Section 3: Finances */}
        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Финансы
          </h2>
          {/* Add form fields here */}
        </div>

        <button
          type="submit"
          className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Добавить клиента
        </button>
      </form>
    </div>
  );
};

export default AddClient;
