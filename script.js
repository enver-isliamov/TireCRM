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

const routes = {
  '/': dashboardTemplate,
  '/login': loginTemplate,
  '/clients': '<h1>Клиенты</h1>',
  '/settings': '<h1>Настройки</h1>',
};

const sidebarTemplate = `
  <div class="w-64 h-screen bg-white shadow-md">
    <div class="p-6">
      <h2 class="text-2xl font-bold text-gray-900">CRM</h2>
    </div>
    <nav class="mt-6">
      <a href="#/" class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
        <span class="mx-3">Дашборд</span>
      </a>
      <a href="#/clients" class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
        <span class="mx-3">Клиенты</span>
      </a>
      <a href="#/settings" class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
        <span class="mx-3">Настройки</span>
      </a>
    </nav>
  </div>
`;

const layoutTemplate = (content) => `
  <div class="flex">
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
