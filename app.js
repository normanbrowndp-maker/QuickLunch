const SHOP_CATALOG = {
  vegetables: {
    title: 'Овощи и фрукты',
    description: 'Свежие овощи и фрукты для ежедневного меню столовой и сбалансированного питания.',
    products: [
      { id: 'potato', name: 'Картофель', unit: 'кг', description: 'Основной овощ для гарниров и горячих блюд.' },
      { id: 'carrot', name: 'Морковь', unit: 'кг', description: 'Популярный корнеплод для салатов и приготовления блюд.' },
      { id: 'onion', name: 'Репчатый лук', unit: 'кг', description: 'Основа для приготовления соусов и заправок.' },
      { id: 'cabbage', name: 'Капуста', unit: 'кг', description: 'Подходит для салатов и горячих блюд.' },
      { id: 'apples', name: 'Яблоки', unit: 'кг', description: 'Свежие фрукты для перекуса и вариантов меню.' },
      { id: 'bananas', name: 'Бананы', unit: 'кг', description: 'Фрукт для быстрого питания и перекусов.' }
    ]
  },
  meat: {
    title: 'Мясо и птица',
    description: 'Базовые мясные продукты для горячих блюд и разнообразного рациона столовой.',
    products: [
      { id: 'chicken-fillet', name: 'Куриное филе', unit: 'кг', description: 'Нежное мясо для запекания, тушения и салатов.' },
      { id: 'chicken-thighs', name: 'Куриные бедра', unit: 'кг', description: 'Подходит для тушения и жарки.' },
      { id: 'beef', name: 'Говядина', unit: 'кг', description: 'Используется для горячих блюд и рагу.' },
      { id: 'mince', name: 'Фарш', unit: 'кг', description: 'Удобный продукт для начинки и блюд из фарша.' },
      { id: 'turkey', name: 'Филе индейки', unit: 'кг', description: 'Лёгкое мясо для второго блюда и сытных блюд.' }
    ]
  },
  fish: {
    title: 'Рыба',
    description: 'Рыбные позиции для разнообразия меню и регулярного снабжения столовой.',
    products: [
      { id: 'salmon', name: 'Филе лосося без костей', unit: 'кг', description: 'Полезное рыбное филе для горячих и холодных блюд.' },
      { id: 'zander', name: 'Филе судака без костей', unit: 'кг', description: 'Более нейтральная рыба для стандартного меню.' },
      { id: 'cod', name: 'Филе минтая', unit: 'кг', description: 'Доступная рыба для регулярных закупок.' },
      { id: 'pollock', name: 'Филе трески', unit: 'кг', description: 'Надёжный вариант для повседневного стола.' },
      { id: 'anchovies', name: 'Сушёные анчоусы', unit: 'кг', description: 'Демонстрационная позиция для дополнительного ассортимента.' }
    ]
  },
  dairy: {
    title: 'Молочные продукты',
    description: 'Основные молочные товары для завтраков, блюд и регулярного потребления.',
    products: [
      { id: 'milk', name: 'Молоко', unit: 'л', description: 'Базовый продукт для напитков и готовки.' },
      { id: 'kefir', name: 'Кефир', unit: 'л', description: 'Для напитков и полезных завтраков.' },
      { id: 'sour-cream', name: 'Сметана', unit: 'кг', description: 'Используется в соусах и блюдах.' },
      { id: 'butter', name: 'Сливочное масло', unit: 'кг', description: 'Базовый ингредиент для кулинарии.' },
      { id: 'cheese', name: 'Твёрдый сыр', unit: 'кг', description: 'Для горячих блюд и салатов.' },
      { id: 'yogurt', name: 'Натуральный йогурт', unit: 'кг', description: 'Подходит для завтрака и закусок.' }
    ]
  },
  grocery: {
    title: 'Бакалея и крупы',
    description: 'Основные продукты для приготовления каш, гарниров, супов и других блюд.',
    products: [
      { id: 'rice', name: 'Рис', unit: 'кг', description: 'Популярный гарнир и основа для блюд.' },
      { id: 'buckwheat', name: 'Гречка', unit: 'кг', description: 'Крупа для комплексного питания.' },
      { id: 'pasta', name: 'Макароны', unit: 'кг', description: 'Базовый продукт для повседневного рациона.' },
      { id: 'flour', name: 'Мука', unit: 'кг', description: 'Используется в выпечке и кулинарии.' },
      { id: 'sugar', name: 'Сахар', unit: 'кг', description: 'Потребность для приготовления и сладких блюд.' },
      { id: 'oil', name: 'Растительное масло', unit: 'л', description: 'Базовый продукт для приготовления блюд.' },
      { id: 'salt', name: 'Соль', unit: 'кг', description: 'Основная приправа для повседневного меню.' }
    ]
  },
  bakery: {
    title: 'Хлеб и хлебобулочные изделия',
    description: 'Позиции для обеспечения стабильного и регулярного снабжения столовой.',
    products: [
      { id: 'bread-white', name: 'Хлеб пшеничный', unit: 'шт', description: 'Базовый хлеб для повседневного питания.' },
      { id: 'bread-rye', name: 'Хлеб ржаной', unit: 'шт', description: 'Формирует разнообразный ассортимент и питание.' },
      { id: 'baton', name: 'Батон', unit: 'шт', description: 'Для завтраков и перекусов.' },
      { id: 'buns', name: 'Булочки', unit: 'шт', description: 'Подходит для быстрых перекусов.' },
      { id: 'lavash', name: 'Лаваш', unit: 'шт', description: 'Продукт для готовки и подачи блюд.' }
    ]
  }
};

const STORAGE_KEYS = {
  user: 'quicklunch_user',
  cart: 'quicklunch_cart',
  orders: 'quicklunch_orders',
  chat: 'quicklunch_chat',
  role: 'quicklunch_role'
};

const getUser = () => JSON.parse(localStorage.getItem(STORAGE_KEYS.user) || 'null') || null;
const setUser = (user) => localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user));
const getCart = () => JSON.parse(localStorage.getItem(STORAGE_KEYS.cart) || '[]');
const setCart = (items) => localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(items));
const getOrders = () => JSON.parse(localStorage.getItem(STORAGE_KEYS.orders) || '[]');
const setOrders = (items) => localStorage.setItem(STORAGE_KEYS.orders, JSON.stringify(items));
const getChatMessages = () => JSON.parse(localStorage.getItem(STORAGE_KEYS.chat) || '[]');
const setChatMessages = (items) => localStorage.setItem(STORAGE_KEYS.chat, JSON.stringify(items));

function showToast(message, type = 'info') {
  const existing = document.getElementById('quicklunch-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'quicklunch-toast';
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3200);
}

function updateCartBadges() {
  const allCounters = document.querySelectorAll('[data-cart-count]');
  const total = getCart().reduce((sum, item) => sum + Number(item.quantity || 0), 0);
  allCounters.forEach((el) => {
    el.textContent = total;
    el.style.display = total > 0 ? 'inline-flex' : 'none';
  });
}

function ensureAuthModal() {
  if (document.getElementById('welcome-modal')) return;
  const existingUser = getUser();
  if (existingUser && existingUser.name) return;

  const modal = document.createElement('div');
  modal.id = 'welcome-modal';
  modal.className = 'auth-modal';
  modal.innerHTML = `
    <div class="auth-modal__backdrop"></div>
    <div class="auth-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="welcome-title">
      <h3 id="welcome-title">Добро пожаловать в QuickLunch</h3>
      <label for="welcome-name">Введите своё имя</label>
      <input id="welcome-name" type="text" maxlength="80" placeholder="Например: Мария" />
      <button type="button" id="welcome-submit">Продолжить</button>
      <p class="auth-error" id="welcome-error"></p>
    </div>
  `;

  document.body.appendChild(modal);

  document.getElementById('welcome-submit').addEventListener('click', () => {
    const input = document.getElementById('welcome-name');
    const value = input.value.trim();
    const error = document.getElementById('welcome-error');

    if (!value) {
      error.textContent = 'Имя обязательно. Пожалуйста, введите своё имя.';
      return;
    }

    setUser({ name: value, email: '' });
    modal.remove();
    showToast('Добро пожаловать, ' + value + '!');
    window.location.reload();
  });
}

function showAuthModalForPage() {
  const user = getUser();
  if (!user || !user.name) {
    ensureAuthModal();
  }
}

function getCategoryData(categoryId) {
  return SHOP_CATALOG[categoryId] || SHOP_CATALOG.vegetables;
}

function addToCart(categoryId, productId, quantity) {
  const item = { categoryId, productId, quantity: Number(quantity) || 0 };
  if (item.quantity <= 0) {
    showToast('Введите корректное количество товара.', 'error');
    return false;
  }

  const cart = getCart();
  const existing = cart.find((entry) => entry.productId === productId && entry.categoryId === categoryId);

  if (existing) {
    existing.quantity = Number(existing.quantity || 0) + Number(item.quantity);
  } else {
    cart.push(item);
  }

  setCart(cart);
  updateCartBadges();
  showToast('Товар добавлен в корзину.', 'success');
  return true;
}

function removeFromCart(productId) {
  const updated = getCart().filter((item) => item.productId !== productId);
  setCart(updated);
  updateCartBadges();
  renderCartPage();
}

function updateCartQuantity(productId, quantity) {
  const next = Number(quantity) || 0;
  const cart = getCart();
  const item = cart.find((entry) => entry.productId === productId);
  if (!item) return;

  if (next <= 0) {
    removeFromCart(productId);
    return;
  }

  item.quantity = next;
  setCart(cart);
  renderCartPage();
  updateCartBadges();
}

function goBackSafely() {
  const ref = document.referrer;
  if (ref && ref.includes(window.location.host) && !ref.includes('catalog-')) {
    window.history.back();
    return;
  }
  if (document.body.dataset.page === 'catalog-page') {
    window.location.href = 'index.html#catalog';
    return;
  }
  window.location.href = 'index.html';
}

function initCatalogPage() {
  const page = document.body.dataset.page;
  if (page !== 'catalog-page') return;

  const categoryId = document.body.dataset.category;
  const category = getCategoryData(categoryId);
  const container = document.querySelector('[data-catalog-list]');
  if (!container) return;

  const selected = new Set();
  const list = category.products.map((product) => {
    return `
      <article class="product-card" data-product-id="${product.id}">
        <div class="product-card__top">
          <div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
          </div>
          <span class="product-unit">${product.unit}</span>
        </div>
        <div class="product-card__actions">
          <label>
            <span>Количество</span>
            <input type="number" min="1" value="1" data-qty-input="${product.id}" />
          </label>
          <button type="button" class="choose-product">Выбрать</button>
        </div>
      </article>
    `;
  }).join('');

  container.innerHTML = list;

  container.querySelectorAll('.choose-product').forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.product-card');
      const productId = card.dataset.productId;
      const quantityInput = card.querySelector('input[data-qty-input]');
      const qty = Number(quantityInput.value) || 1;
      const wasSelected = selected.has(productId);

      if (wasSelected) {
        selected.delete(productId);
        card.classList.remove('selected');
        button.textContent = 'Выбрать';
        return;
      }

      selected.add(productId);
      card.classList.add('selected');
      button.textContent = 'Убрать';
      addToCart(categoryId, productId, qty);
    });
  });

  const addSelectedButton = document.querySelector('[data-add-selected]');
  if (addSelectedButton) {
    addSelectedButton.addEventListener('click', () => {
      if (selected.size === 0) {
        showToast('Выберите хотя бы один товар.', 'error');
        return;
      }

      let totalAdded = 0;
      container.querySelectorAll('.product-card').forEach((card) => {
        const productId = card.dataset.productId;
        if (!selected.has(productId)) return;
        const qtyInput = card.querySelector('input[data-qty-input]');
        const qty = Number(qtyInput.value) || 1;
        if (qty > 0) {
          addToCart(categoryId, productId, qty);
          totalAdded += 1;
        }
      });

      if (totalAdded === 0) {
        showToast('Проверьте корректность количества выбранных товаров.', 'error');
      }
    });
  }

  document.querySelector('[data-back-link]')?.addEventListener('click', (event) => {
    event.preventDefault();
    goBackSafely();
  });

  updateCartBadges();
}

function renderCartPage() {
  const page = document.body.dataset.page;
  if (page !== 'cart-page') return;

  const cart = getCart();
  const container = document.querySelector('[data-cart-items]');
  const empty = document.querySelector('[data-cart-empty]');
  const totals = document.querySelector('[data-cart-summary]');

  if (!container) return;

  if (!cart.length) {
    container.innerHTML = '';
    if (empty) empty.hidden = false;
    if (totals) totals.hidden = true;
    return;
  }

  if (empty) empty.hidden = true;
  if (totals) totals.hidden = false;

  const entries = cart.map((item) => {
    const product = findProductById(item.categoryId, item.productId);
    if (!product) return '';
    return `
      <article class="cart-item" data-item-id="${item.productId}">
        <div>
          <h3>${product.name}</h3>
          <p>${product.description}</p>
        </div>
        <div class="cart-item__meta">
          <label>
            <span>Количество</span>
            <input type="number" min="1" value="${item.quantity}" data-cart-qty="${item.productId}" />
          </label>
          <button type="button" class="remove-item" data-remove-id="${item.productId}">Удалить</button>
        </div>
      </article>
    `;
  }).join('');

  container.innerHTML = entries;

  container.querySelectorAll('[data-cart-qty]').forEach((input) => {
    input.addEventListener('change', (event) => {
      updateCartQuantity(event.target.dataset.cartQty, event.target.value);
    });
  });

  container.querySelectorAll('.remove-item').forEach((button) => {
    button.addEventListener('click', () => removeFromCart(button.dataset.removeId));
  });

  const countNode = document.querySelector('[data-cart-total-count]');
  if (countNode) countNode.textContent = `${cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0)} позиций`;

  const totalNode = document.querySelector('[data-cart-lines]');
  if (totalNode) totalNode.textContent = `${cart.length} наименований`;

  updateCartBadges();
}

function findProductById(categoryId, productId) {
  const category = getCategoryData(categoryId);
  return category.products.find((product) => product.id === productId) || null;
}

function bindOrderForm() {
  const form = document.getElementById('order-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const cart = getCart();
    if (!cart.length) {
      showToast('Корзина пуста. Сначала выберите товары.', 'error');
      return;
    }

    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    const requiredFields = ['college-name', 'responsible-person', 'phone', 'email', 'category', 'products', 'quantity', 'unit', 'delivery-date', 'delivery-address'];
    const trimmedValues = {};
    let invalid = false;

    requiredFields.forEach((key) => {
      const value = (values[key] || '').toString().trim();
      trimmedValues[key] = value;
      if (!value) {
        invalid = true;
        const input = form.elements.namedItem(key);
        if (input) input.focus();
      }
    });

    if (invalid) {
      showToast('Заполните все обязательные поля.', 'error');
      return;
    }

    const emailValue = trimmedValues['email'];
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      showToast('Введите корректный адрес электронной почты.', 'error');
      return;
    }

    const numberValue = Number(trimmedValues.quantity);
    if (!Number.isFinite(numberValue) || numberValue <= 0) {
      showToast('Проверьте количество товара.', 'error');
      return;
    }

    const orders = getOrders();
    const order = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      customer: {
        college: trimmedValues['college-name'],
        responsiblePerson: trimmedValues['responsible-person'],
        phone: trimmedValues.phone,
        email: trimmedValues.email
      },
      delivery: {
        category: trimmedValues.category,
        productList: trimmedValues.products,
        quantity: trimmedValues.quantity,
        unit: trimmedValues.unit,
        desiredDate: trimmedValues['delivery-date'],
        address: trimmedValues['delivery-address'],
        comments: (values.comments || '').toString().trim()
      },
      cart: cart,
      status: 'pending'
    };

    orders.unshift(order);
    setOrders(orders);
    localStorage.removeItem(STORAGE_KEYS.cart);
    updateCartBadges();
    window.location.href = 'order-success.html';
  });
}

function bindProfileForm() {
  const form = document.getElementById('profile-form');
  if (!form) return;

  const user = getUser() || { name: '', email: '' };
  form.querySelector('#profile-name').value = user.name || '';
  form.querySelector('#profile-email').value = user.email || '';

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.querySelector('#profile-name').value.trim();
    const email = form.querySelector('#profile-email').value.trim();

    if (!name) {
      showToast('Имя пользователя обязательно для сохранения профиля.', 'error');
      return;
    }

    const nextUser = { name, email };
    setUser(nextUser);
    showToast('Профиль сохранён.', 'success');
  });

  const logout = document.getElementById('logout-button');
  if (logout) {
    logout.addEventListener('click', () => {
      localStorage.removeItem(STORAGE_KEYS.user);
      localStorage.removeItem(STORAGE_KEYS.role);
      window.location.href = 'index.html';
    });
  }

  const emailButton = document.getElementById('send-test-email');
  if (emailButton) {
    emailButton.addEventListener('click', () => {
      const email = form.querySelector('#profile-email').value.trim();
      if (!email) {
        showToast('Укажите адрес электронной почты, чтобы отправить тестовое письмо.', 'error');
        return;
      }

      const result = `Электронная почта ${email} подготовлена для отправки тестового письма. Для реальной отправки требуется серверная функция JavaScript и настроенный почтовый API, например Resend.`;
      showToast(result, 'info');
    });
  }
}

function bindChatForm() {
  const form = document.getElementById('chat-form');
  if (!form) return;

  const list = document.getElementById('chat-messages');
  if (!list) return;

  const render = () => {
    const messages = getChatMessages();
    if (!messages.length) {
      list.innerHTML = '<p class="chat-empty">Чат пока пуст. Напишите первое сообщение.</p>';
      return;
    }

    list.innerHTML = messages.map((message) => `
      <div class="chat-message chat-message--${message.sender}">
        <strong>${message.sender === 'user' ? 'Вы' : 'Оператор'}</strong>
        <p>${message.text}</p>
        <time>${new Date(message.timestamp).toLocaleString('ru-RU', { dateStyle: 'short', timeStyle: 'short' })}</time>
      </div>
    `).join('');
    list.scrollTop = list.scrollHeight;
  };

  render();

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('chat-message');
    const text = input.value.trim();

    if (!text) {
      showToast('Сообщение не может быть пустым.', 'error');
      return;
    }

    const messages = getChatMessages();
    messages.push({
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toISOString()
    });
    setChatMessages(messages);
    input.value = '';
    render();
    showToast('Сообщение отправлено.', 'success');
  });
}

function bindOperatorPanel() {
  const panel = document.getElementById('operator-panel');
  if (!panel) return;

  const user = getUser();
  const role = localStorage.getItem(STORAGE_KEYS.role) || 'operator';
  if (!user || !user.name) {
    window.location.href = 'index.html';
    return;
  }

  const operatorRole = document.createElement('p');
  operatorRole.className = 'operator-role';
  operatorRole.textContent = 'Роль: ' + role;
  panel.appendChild(operatorRole);

  const list = document.getElementById('operator-users');
  if (list) {
    const users = [{ name: user.name, email: user.email || 'не указано' }];
    list.innerHTML = users.map((person) => `
      <button class="operator-user" type="button" data-user-name="${person.name}">
        ${person.name} <small>${person.email}</small>
      </button>
    `).join('');

    list.querySelectorAll('.operator-user').forEach((button) => {
      button.addEventListener('click', () => {
        const name = button.dataset.userName;
        const messages = getChatMessages();
        const note = `Здравствуйте, ${name}! Мы получили вашу заявку и рассмотрим её в ближайшее время.`;
        const next = [...messages, { id: Date.now().toString(), sender: 'operator', text: note, timestamp: new Date().toISOString() }];
        setChatMessages(next);
        showToast('Ответ оператора добавлен в чат.', 'success');
      });
    });
  }
}

function initSuccessPage() {
  const page = document.body.dataset.page;
  if (page !== 'success-page') return;
  const order = getOrders()[0];
  const meta = document.getElementById('success-order-meta');
  if (meta && order) {
    meta.textContent = 'Номер заявки: #' + order.id + ' • ' + new Date(order.createdAt).toLocaleDateString('ru-RU');
  }
}

function initHomePage() {
  const user = getUser();
  const profileLink = document.querySelector('[data-user-name]');
  if (profileLink) {
    profileLink.textContent = user && user.name ? user.name : 'Профиль';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.body.dataset.page !== 'success-page') {
    showAuthModalForPage();
  }

  updateCartBadges();
  initHomePage();
  initCatalogPage();
  renderCartPage();
  bindOrderForm();
  bindProfileForm();
  bindChatForm();
  bindOperatorPanel();
  initSuccessPage();
});
