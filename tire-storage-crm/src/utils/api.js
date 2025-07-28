const SCRIPT_URL = localStorage.getItem('scriptUrl');

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const getClients = () => {
  if (!SCRIPT_URL) {
    return Promise.reject('URL Google Apps Script не указан в настройках');
  }
  return fetch(SCRIPT_URL, {
    method: 'POST',
    body: JSON.stringify({ action: 'getClients' }),
  }).then(handleResponse);
};

// Add more API methods as needed
