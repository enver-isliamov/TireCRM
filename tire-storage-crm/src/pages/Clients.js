import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClientTable from '../components/ClientTable';
import { getClients } from '../utils/api';

const Clients = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getClients()
      .then((clients) => {
        setData(clients);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: 'Имя',
        accessor: 'name',
      },
      {
        Header: 'Телефон',
        accessor: 'phone',
      },
      {
        Header: 'Номер Авто',
        accessor: 'carNumber',
      },
      {
        Header: 'Дата окончания хранения',
        accessor: 'endDate',
      },
      {
        Header: 'Долг',
        accessor: 'debt',
      },
      {
        Header: 'Статус',
        accessor: 'status',
      },
    ],
    []
  );

  if (error) {
    return (
      <div className="p-6 bg-red-100 text-red-700 rounded-lg">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Клиенты
      </h1>
      <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Поиск..."
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          />
          <Link
            to="/clients/add"
            className="ml-4 px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Добавить клиента
          </Link>
        </div>
        <ClientTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Clients;
