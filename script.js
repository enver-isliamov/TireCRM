const app = document.getElementById('app');

const loginTemplate = `
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center text-gray-900">
        Вход в CRM
      </h2>
      <form class="space-y-6" id="login-form">
        <div>
          <label for="username" class="block mb-2 text-sm font-medium text-gray-900">
            Логин
          </label>
          <input type="text" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900">
            Пароль
          </label>
          <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
        </div>
        <button type="submit" class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
          Войти
        </button>
      </form>
    </div>
  </div>
`;

const dashboardTemplate = `
  <div class="p-6 bg-gray-50 min-h-screen">
    <h1 class="text-3xl font-bold text-gray-900 mb-6">
      Дашборд
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="p-4 bg-white rounded-lg shadow-md">
        <h2 class="text-lg font-medium text-gray-900">Всего клиентов</h2>
        <p class="text-3xl font-bold text-gray-900">125</p>
      </div>
      <div class="p-4 bg-white rounded-lg shadow-md">
        <h2 class="text-lg font-medium text-gray-900">Общая выручка</h2>
        <p class="text-3xl font-bold text-gray-900">1,250,000₽</p>
      </div>
      <div class="p-4 bg-white rounded-lg shadow-md">
        <h2 class="text-lg font-medium text-gray-900">Общая сумма долга</h2>
        <p class="text-3xl font-bold text-gray-900">75,000₽</p>
      </div>
    </div>
  </div>
`;

const clientsTemplate = `
  <div class="p-6 bg-gray-50 min-h-screen">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-gray-900">
        Клиенты
      </h1>
      <a href="#/clients/add" class="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
        Добавить клиента
      </a>
    </div>
    <div class="p-6 bg-white rounded-lg shadow-md">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Имя</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Телефон</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Номер Авто</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Дата окончания хранения</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Долг</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Статус</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Иван Иванов</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">+7 (999) 999-99-99</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">А123ВС777</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-12-31</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">5000₽</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Активен</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
`;

const addClientTemplate = `
  <div class="p-6 bg-gray-50 min-h-screen">
    <h1 class="text-3xl font-bold text-gray-900 mb-6">
      Добавить клиента
    </h1>
    <div class="p-6 bg-white rounded-lg shadow-md">
      <p class="text-gray-500">Здесь будет форма добавления клиента...</p>
    </div>
  </div>
`;

const settingsTemplate = `
  <div class="p-6 bg-gray-50 min-h-screen">
    <h1 class="text-3xl font-bold text-gray-900 mb-6">
      Настройки
    </h1>
    <div class="p-6 bg-white rounded-lg shadow-md">
      <p class="text-gray-500">Здесь будут настройки...</p>
    </div>
  </div>
`;

const routes = {
  '/': dashboardTemplate,
  '/login': loginTemplate,
  '/clients': clientsTemplate,
  '/clients/add': addClientTemplate,
  '/settings': settingsTemplate,
};

const sidebarTemplate = `
  <div class="w-64 h-screen bg-white dark:bg-gray-800 shadow-md flex flex-col justify-between">
    <div>
      <div class="p-6">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">CRM</h2>
      </div>
      <nav class="mt-6">
        <a href="#/" class="flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
          <span class="mx-3">Дашборд</span>
        </a>
        <a href="#/clients" class="flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
          <span class="mx-3">Клиенты</span>
        </a>
        <a href="#/settings" class="flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
          <span class="mx-3">Настройки</span>
        </a>
      </nav>
    </div>
    <div class="p-6">
      <button id="theme-switcher" class="p-2 rounded-full bg-gray-200 dark:bg-gray-700"></button>
      <button id="mobile-emulator" class="p-2 rounded-full bg-gray-200 dark:bg-gray-700 ml-2">📱</button>
    </div>
  </div>
`;

const layoutTemplate = (content) => `
  <div id="main-container" class="flex">
    ${sidebarTemplate}
    <main class="flex-1">
      ${content}
    </main>
  </div>
`;

const router = () => {
  const path = window.location.hash.slice(1) || '/';
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  if (!isAuthenticated && path !== '/login') {
    window.location.hash = '/login';
    return;
  }

  const content = routes[path] || '<h1>404 - Страница не найдена</h1>';
  app.innerHTML = path === '/login' ? content : layoutTemplate(content);

  if (path !== '/login') {
    const themeSwitcher = document.getElementById('theme-switcher');
    const mobileEmulator = document.getElementById('mobile-emulator');
    const mainContainer = document.getElementById('main-container');

    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    themeSwitcher.innerHTML = currentTheme === 'light' ? '🌙' : '☀️';

    themeSwitcher.addEventListener('click', () => {
      const theme = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', theme ? 'dark' : 'light');
      themeSwitcher.innerHTML = theme ? '☀️' : '🌙';
    });

    mobileEmulator.addEventListener('click', () => {
      mainContainer.classList.toggle('mobile-view');
    });
  }


  if (path === '/login') {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = e.target.username.value;
      const password = e.target.password.value;
      if (username === 'Admin' && password === 'Admin123') {
        localStorage.setItem('isAuthenticated', 'true');
        window.location.hash = '/';
      } else {
        alert('Неверный логин или пароль');
      }
    });
  }
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
