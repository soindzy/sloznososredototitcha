// Получаем кнопки темы
const themeButtons = document.querySelectorAll('.header__theme-menu-button');

// Добавляем обработчик клика на кнопки
themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Удаляем активный класс и атрибут disabled со всех кнопок
    themeButtons.forEach((btn) => {
      btn.classList.remove('header__theme-menu-button_active');
      btn.removeAttribute('disabled');
    });

    // Определяем тип темы по классу кнопки
    const themeType = button.classList.contains('header__theme-menu-button_type_light')
      ? 'light'
      : button.classList.contains('header__theme-menu-button_type_dark')
      ? 'dark'
      : 'auto';

    // Меняем тему
    changeTheme(themeType);

    // Добавляем активный класс и атрибут disabled на нажатую кнопку
    button.classList.add('header__theme-menu-button_active');
    button.setAttribute('disabled', true);
  });
});

// Функция для смены темы
function changeTheme(theme) {
  // Удаляем все классы темы с body
  document.body.className = 'page';
  // Добавляем новый класс темы
  document.body.classList.add(`theme_${theme}`);
  // Сохраняем тему в localStorage
  localStorage.setItem('theme', theme);
}

// Функция для инициализации темы
function initTheme() {
  // Получаем сохраненную тему из localStorage
  const theme = localStorage.getItem('theme');
  if (theme) {
    // Меняем тему
    changeTheme(theme);
    // Удаляем активный класс и атрибут disabled со всех кнопок
    themeButtons.forEach((btn) => {
      btn.classList.remove('header__theme-menu-button_active');
      btn.removeAttribute('disabled');
    });
    // Добавляем активный класс и атрибут disabled на кнопку соответствующей теме
    document
      .querySelector(`.header__theme-menu-button_type_${theme}`)
      .classList.add('header__theme-menu-button_active');
    document
      .querySelector(`.header__theme-menu-button_type_${theme}`)
      .setAttribute('disabled', true);
  }
}

// Инициализируем тему
initTheme();
