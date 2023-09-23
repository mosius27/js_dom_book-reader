// Находим элементы управления размером шрифта
const fontControls = document.querySelectorAll('.font-size');

// Находим элемент читалки
const bookElement = document.getElementById('book');

// Функция для изменения размера шрифта
function changeFontSize(event) {
    // Отменяем стандартное действие ссылки (переход по ссылке)
    event.preventDefault();

    // Удаляем класс font-size_active у всех элементов управления
    fontControls.forEach(control => {
        control.classList.remove('font-size_active');
    });

    // Устанавливаем класс font-size_active на элементе, по которому был клик
    event.target.classList.add('font-size_active');

    // Получаем значение data-size из элемента, по которому был клик
    const fontSize = event.target.getAttribute('data-size');

    // Удаляем все классы book_fs-*
    bookElement.classList.remove('book_fs-small', 'book_fs-big');

    // Если выбран маленький размер шрифта, добавляем класс book_fs-small
    if (fontSize === 'small') {
        bookElement.classList.add('book_fs-small');
    }

    // Если выбран большой размер шрифта, добавляем класс book_fs-big
    if (fontSize === 'big') {
        bookElement.classList.add('book_fs-big');
    }
}

// Добавляем обработчик клика на каждый элемент управления
fontControls.forEach(control => {
    control.addEventListener('click', changeFontSize);
});