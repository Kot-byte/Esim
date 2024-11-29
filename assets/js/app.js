const cards = document.querySelectorAll('.card-package');
const checkboxes = document.querySelectorAll('.custom-checkbox');

function resetCheckboxes(card) {
    const cardCheckboxes = card.querySelectorAll('.custom-checkbox');
    const priceCards = card.querySelectorAll('.price-card');
    cardCheckboxes.forEach((checkbox, index) => {
        checkbox.checked = false;
        priceCards[index].classList.remove('selected');
    });
}

function handlePriceCardClick(priceCard, correspondingCheckbox) {
    const card = priceCard.closest('.card-package');
    resetCheckboxes(card);
    correspondingCheckbox.checked = true;
    priceCard.classList.add('selected');
}

cards.forEach((card) => {
    const checkboxesInCard = card.querySelectorAll('.custom-checkbox');
    const priceCards = card.querySelectorAll('.price-card');

    priceCards.forEach((priceCard, index) => {
        priceCard.addEventListener('click', () => {
            const correspondingCheckbox = checkboxesInCard[index];
            handlePriceCardClick(priceCard, correspondingCheckbox);
        });
    });
});



function logout() {
    // Логика выхода пользователя
    // Например, очистка токена аутентификации:
    localStorage.removeItem('authToken');  // Удаление токена из хранилища
    // Перенаправление на страницу входа или главную страницу
    window.location.href = 'index.html';
}


