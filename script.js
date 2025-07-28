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
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-8">Дашборд</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="card p-6">
        <h3 class="text-lg font-medium text-[var(--muted-foreground)]">Всего клиентов</h3>
        <p class="text-3xl font-bold mt-2">125</p>
      </div>
      <div class="card p-6">
        <h3 class="text-lg font-medium text-[var(--muted-foreground)]">Общая выручка</h3>
        <p class="text-3xl font-bold mt-2">1,250,000₽</p>
      </div>
      <div class="card p-6">
        <h3 class="text-lg font-medium text-[var(--muted-foreground)]">Общая сумма долга</h3>
        <p class="text-3xl font-bold mt-2">75,000₽</p>
      </div>
      <div class="card p-6">
        <h3 class="text-lg font-medium text-[var(--muted-foreground)]">"Живой" счетчик дохода</h3>
        <p id="live-revenue" class="text-3xl font-bold mt-2 text-green-500">1,250,000₽</p>
      </div>
    </div>
    <div class="mt-8 card p-6">
      <canvas id="dynamic-chart"></canvas>
    </div>
    <div class="mt-8 card p-6">
      <h2 class="text-2xl font-bold mb-4">Сроки хранения (Диаграмма Ганта)</h2>
      <svg id="gantt"></svg>
    </div>
    <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="card p-6">
        <h2 class="text-2xl font-bold mb-4">Скоро заканчивается срок</h2>
        <ul>
          <li class="flex justify-between items-center py-3 border-b border-[var(--border)]">
            <span>Петр Петров (осталось 5 дней)</span>
            <div>
              <button class="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 mr-2">Напомнить</button>
              <button class="google-calendar-btn px-4 py-2 text-sm text-white bg-yellow-500 rounded-lg hover:bg-yellow-600" data-name="Петр Петров" data-date="2025-02-10">В Календарь</button>
            </div>
          </li>
          <li class="flex justify-between items-center py-3">
            <span>Анна Сидорова (осталось 12 дней)</span>
            <div>
              <button class="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 mr-2">Напомнить</button>
              <button class="google-calendar-btn px-4 py-2 text-sm text-white bg-yellow-500 rounded-lg hover:bg-yellow-600" data-name="Анна Сидорова" data-date="2025-02-17">В Календарь</button>
            </div>
          </li>
        </ul>
      </div>
      <div class="card p-6">
        <h2 class="text-2xl font-bold mb-4">Должники</h2>
        <ul>
          <li class="flex justify-between items-center py-3 border-b border-[var(--border)]">
            <span>Максим Максимов (долг: 3000₽)</span>
            <button class="px-4 py-2 text-sm text-white bg-red-600 rounded-lg hover:bg-red-700">Напомнить о долге</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
`;

const clientsTemplate = `
  <div class="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold">
        Клиенты
      </h1>
      <a href="#/clients/add" class="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
        Добавить клиента
      </a>
    </div>
    <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div class="flex justify-between items-center mb-4">
        <input type="text" id="client-search" placeholder="Поиск по клиентам..." class="w-1/3 p-2 border rounded dark:bg-gray-700 dark:border-gray-600">
        <div>
          <button id="save-view" class="px-4 py-2 text-sm text-white bg-green-600 rounded hover:bg-green-700 mr-2">Сохранить вид</button>
          <button id="bulk-delete" class="px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-700">Удалить выбранные</button>
        </div>
      </div>
      <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead class="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"><input type="checkbox" id="select-all-clients"></th>
            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Имя</th>
            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Телефон</th>
            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Номер Авто</th>
            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Дата окончания хранения</th>
            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Долг</th>
            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Статус</th>
          </tr>
        </thead>
        <tbody id="clients-table-body" class="bg-white dark:bg-gray-800 divide-y divide-gray-700">
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm"><input type="checkbox" class="client-checkbox"></td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">Иван Иванов</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">+7 (999) 999-99-99</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">А123ВС777</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">2024-12-31</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">5000₽</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">Активен</td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm"><input type="checkbox" class="client-checkbox"></td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">Петр Петров</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">+7 (888) 888-88-88</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">В456ОР199</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">2025-01-15</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">0₽</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">Активен</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
`;

const addClientTemplate = `
  <div class="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
    <h1 class="text-3xl font-bold mb-6">
      Добавить клиента
    </h1>
    <form id="add-client-form" class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md space-y-4">
      <div>
        <label for="name" class="block mb-2 text-sm font-medium">Имя</label>
        <input type="text" id="name" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" required>
      </div>
      <div>
        <label for="phone" class="block mb-2 text-sm font-medium">Телефон</label>
        <input type="tel" id="phone" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" required>
      </div>
      <div>
        <label for="carNumber" class="block mb-2 text-sm font-medium">Номер Авто</label>
        <input type="text" id="carNumber" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" required>
      </div>
      <div>
        <label for="storage-months" class="block mb-2 text-sm font-medium">Срок хранения (месяцев)</label>
        <input type="number" id="storage-months" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" value="6" required>
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium">Общая сумма к оплате</label>
        <p id="total-amount" class="text-lg font-bold">3000₽</p>
      </div>
      <button type="submit" class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
        Добавить
      </button>
    </form>
  </div>
`;

const settingsTemplate = `
  <div class="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
    <h1 class="text-3xl font-bold mb-6">
      Настройки
    </h1>
    <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md space-y-4">
      <form id="settings-form" class="space-y-4">
        <div>
          <label for="script-url" class="block mb-2 text-sm font-medium">URL Google Apps Script</label>
          <input type="url" id="script-url" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600">
        </div>
        <div>
          <label for="telegram-token" class="block mb-2 text-sm font-medium">Токен Telegram бота</label>
          <input type="text" id="telegram-token" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600">
        </div>
        <button type="submit" class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
          Сохранить
        </button>
      </form>
      <div class="mt-8">
        <h2 class="text-2xl font-bold mb-4">Шаблоны сообщений</h2>
        <div class="space-y-4">
          <div>
            <label for="reminder-template" class="block mb-2 text-sm font-medium">Напоминание об окончании срока</label>
            <textarea id="reminder-template" rows="4" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"></textarea>
          </div>
          <button id="save-templates" class="w-full px-5 py-3 text-base font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700">
            Сохранить шаблоны
          </button>
        </div>
      </div>
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
  <div class="w-64 h-screen bg-[var(--card)] shadow-lg flex flex-col justify-between">
    <div>
      <div class="p-6 flex items-center space-x-2">
        <ion-icon name="car-sport-outline" class="text-3xl text-[var(--primary)]"></ion-icon>
        <h2 class="text-2xl font-bold">TireCRM</h2>
      </div>
      <nav class="mt-6 space-y-2">
        <a href="#/" class="flex items-center px-6 py-3 text-[var(--muted-foreground)] hover:bg-[var(--secondary)] rounded-lg transition-all duration-200">
          <ion-icon name="grid-outline" class="text-xl"></ion-icon>
          <span class="mx-3">Дашборд</span>
        </a>
        <a href="#/clients" class="flex items-center px-6 py-3 text-[var(--muted-foreground)] hover:bg-[var(--secondary)] rounded-lg transition-all duration-200">
          <ion-icon name="people-outline" class="text-xl"></ion-icon>
          <span class="mx-3">Клиенты</span>
        </a>
        <a href="#/settings" class="flex items-center px-6 py-3 text-[var(--muted-foreground)] hover:bg-[var(--secondary)] rounded-lg transition-all duration-200">
          <ion-icon name="settings-outline" class="text-xl"></ion-icon>
          <span class="mx-3">Настройки</span>
        </a>
      </nav>
    </div>
    <div class="p-6 flex space-x-2">
      <button id="theme-switcher" class="p-3 rounded-full bg-[var(--secondary)] hover:bg-[var(--border)] transition-all duration-200"></button>
      <button id="mobile-emulator" class="p-3 rounded-full bg-[var(--secondary)] hover:bg-[var(--border)] transition-all duration-200">
        <ion-icon name="phone-portrait-outline"></ion-icon>
      </button>
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
    // ... existing code for theme switcher and mobile emulator ...
    const themeSwitcher = document.getElementById('theme-switcher');
    const mobileEmulator = document.getElementById('mobile-emulator');
    const mainContainer = document.getElementById('main-container');

    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    themeSwitcher.innerHTML = currentTheme === 'light' ? '<ion-icon name="moon-outline"></ion-icon>' : '<ion-icon name="sunny-outline"></ion-icon>';

    themeSwitcher.addEventListener('click', () => {
      const theme = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', theme ? 'dark' : 'light');
      themeSwitcher.innerHTML = theme ? '<ion-icon name="sunny-outline"></ion-icon>' : '<ion-icon name="moon-outline"></ion-icon>';
    });

    mobileEmulator.addEventListener('click', () => {
      mainContainer.classList.toggle('mobile-view');
    });
  }

  if (path === '/settings') {
    const settingsForm = document.getElementById('settings-form');
    const scriptUrlInput = document.getElementById('script-url');
    const telegramTokenInput = document.getElementById('telegram-token');
    const reminderTemplateInput = document.getElementById('reminder-template');
    const saveTemplatesButton = document.getElementById('save-templates');

    // Load saved values
    scriptUrlInput.value = localStorage.getItem('scriptUrl') || '';
    telegramTokenInput.value = localStorage.getItem('telegramToken') || '';
    reminderTemplateInput.value = localStorage.getItem('reminderTemplate') || 'Здравствуйте, {name}! Напоминаем, что срок хранения ваших шин истекает {endDate}.';

    settingsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      localStorage.setItem('scriptUrl', scriptUrlInput.value);
      localStorage.setItem('telegramToken', telegramTokenInput.value);
      alert('Настройки сохранены!');
    });

    saveTemplatesButton.addEventListener('click', () => {
      localStorage.setItem('reminderTemplate', reminderTemplateInput.value);
      alert('Шаблоны сохранены!');
    });
  }

  if (path === '/clients/add') {
    const form = document.getElementById('add-client-form');
    const storageMonthsInput = document.getElementById('storage-months');
    const totalAmountElement = document.getElementById('total-amount');
    const pricePerMonth = 500;

    const calculateTotal = () => {
      const months = parseInt(storageMonthsInput.value) || 0;
      totalAmountElement.textContent = `${months * pricePerMonth}₽`;
    };

    storageMonthsInput.addEventListener('input', calculateTotal);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // This is a mock implementation. In a real app, you'd send this to a server.
      const newClient = {
        name: e.target.name.value,
        phone: e.target.phone.value,
        carNumber: e.target.carNumber.value,
        endDate: 'N/A',
        debt: '0₽',
        status: 'Новый'
      };
      // For demonstration, we'll just log it and redirect.
      console.log('New Client:', newClient);
      alert('Клиент добавлен (в моковом режиме)!');
      window.location.hash = '/clients';
    });
  }

  if (path === '/clients') {
    const searchInput = document.getElementById('client-search');
    const tableBody = document.getElementById('clients-table-body');
    const selectAllCheckbox = document.getElementById('select-all-clients');
    const deleteButton = document.getElementById('bulk-delete');
    const saveViewButton = document.getElementById('save-view');

    selectAllCheckbox.addEventListener('change', (e) => {
      const checkboxes = tableBody.querySelectorAll('.client-checkbox');
      checkboxes.forEach(checkbox => checkbox.checked = e.target.checked);
    });

    deleteButton.addEventListener('click', () => {
      const checkboxes = tableBody.querySelectorAll('.client-checkbox:checked');
      if (confirm(`Вы уверены, что хотите удалить ${checkboxes.length} клиентов?`)) {
        checkboxes.forEach(checkbox => checkbox.closest('tr').remove());
      }
    });

    saveViewButton.addEventListener('click', () => {
      const viewName = prompt('Введите название для этого вида:');
      if (viewName) {
        localStorage.setItem(`view_${viewName}`, searchInput.value);
        alert(`Вид "${viewName}" сохранен!`);
      }
    });

    const rows = tableBody.getElementsByTagName('tr');
    const modal = document.getElementById('client-modal');
    const closeModal = document.getElementById('close-modal');
    const modalClientName = document.getElementById('modal-client-name');
    const modalClientDetails = document.getElementById('modal-client-details');
    const tabButtons = document.querySelectorAll('.modal-tab-button');
    const tabContents = document.querySelectorAll('.modal-content');

    closeModal.addEventListener('click', () => {
      modal.classList.add('hidden');
    });

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('text-blue-600', 'border-blue-600'));
        button.classList.add('text-blue-600', 'border-blue-600');
        tabContents.forEach(content => content.classList.add('hidden'));
        document.getElementById(`modal-content-${button.dataset.tab}`).classList.remove('hidden');
      });
    });

    for (const row of rows) {
      row.addEventListener('click', (e) => {
        if (e.target.type === 'checkbox') return;
        const cells = row.getElementsByTagName('td');
        modalClientName.textContent = cells[1].textContent;
        modalClientDetails.innerHTML = `
          <strong>Телефон:</strong> ${cells[2].textContent}<br>
          <strong>Номер Авто:</strong> ${cells[3].textContent}<br>
          <strong>Дата окончания:</strong> ${cells[4].textContent}<br>
          <strong>Долг:</strong> ${cells[5].textContent}<br>
          <strong>Статус:</strong> ${cells[6].textContent}
        `;
        modal.classList.remove('hidden');
      });
    }

    searchInput.addEventListener('keyup', () => {
      const filter = searchInput.value.toUpperCase();
      for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let textValue = '';
        for (let j = 0; j < cells.length; j++) {
          textValue += cells[j].textContent || cells[j].innerText;
        }
        if (textValue.toUpperCase().indexOf(filter) > -1) {
          rows[i].style.display = '';
        } else {
          rows[i].style.display = 'none';
        }
      }
    });
  }

  if (path === '/') {
    // Google Calendar integration
    document.querySelectorAll('.google-calendar-btn').forEach(button => {
      button.addEventListener('click', (e) => {
        const name = e.target.dataset.name;
        const date = e.target.dataset.date.replace(/-/g, '');
        const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=Забрать+шины+(${name})&dates=${date}/${date}&details=Не+забыть+забрать+шины+клиента+${name}`;
        window.open(url, '_blank');
      });
    });

    // Gantt Chart
    const tasks = [
      { id: '1', name: 'Иван Иванов', start: '2024-10-01', end: '2025-04-01', progress: 60 },
      { id: '2', name: 'Петр Петров', start: '2024-11-15', end: '2025-05-15', progress: 40 },
      { id: '3', name: 'Анна Сидорова', start: '2024-09-01', end: '2025-03-01', progress: 80 },
    ];
    new Gantt("#gantt", tasks);

    // Live Revenue Counter
    const liveRevenueElement = document.getElementById('live-revenue');
    let currentRevenue = 1250000;
    setInterval(() => {
      currentRevenue += Math.floor(Math.random() * 10);
      liveRevenueElement.textContent = `${currentRevenue.toLocaleString('ru-RU')}₽`;
    }, 2000);

    // Dynamic Chart
    const ctx = document.getElementById('dynamic-chart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        datasets: [{
          label: 'Выручка',
          data: [12000, 19000, 3000, 5000, 2000, 3000, 7000],
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
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
