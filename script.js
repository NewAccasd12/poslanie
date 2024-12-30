// Ваш пароль
const correctPassword = "Sani59092485"; // Здесь напишите свой пароль
const correctDate = "08.11.24"; // Дата начала общения
const birthday = "14.02.07"; // Твоя дата рождения
const yourName = "Даулет"; // Твое имя

document.getElementById("submitPassword").addEventListener("click", () => {
    const passwordInput = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    if (passwordInput === correctPassword) {
        errorMessage.classList.add("hidden");
        loadNextStep();
    } else {
        errorMessage.textContent = "Неверный пароль. Попробуй снова!";
        errorMessage.classList.remove("hidden");
    }
});

function loadNextStep() {
    document.body.innerHTML = `
        <div class="container">
            <h1>Когда мы начали общаться? (Формат: YYYY-MM-DD)</h1>
            <input type="text" id="dateInput" placeholder="Введите дату">
            <button id="submitDate">Продолжить</button>
            <p id="errorMessage" class="hidden">Неверная дата. Попробуй снова!</p>
        </div>
    `;

    document.getElementById("submitDate").addEventListener("click", () => {
        const dateInput = document.getElementById("dateInput").value;
        const errorMessage = document.getElementById("errorMessage");

        if (dateInput === correctDate) {
            loadBirthdayStep();
        } else {
            errorMessage.textContent = "Неверная дата. Попробуй снова!";
            errorMessage.classList.remove("hidden");
        }
    });
}

function loadBirthdayStep() {
    document.body.innerHTML = `
        <div class="container">
            <h1>Когда у меня день рождения? (Формат: YYYY-MM-DD)</h1>
            <input type="text" id="birthdayInput" placeholder="Введите дату">
            <button id="submitBirthday">Продолжить</button>
            <p id="errorMessage" class="hidden">Неверная дата. Попробуй снова!</p>
        </div>
    `;

    document.getElementById("submitBirthday").addEventListener("click", () => {
        const birthdayInput = document.getElementById("birthdayInput").value;
        const errorMessage = document.getElementById("errorMessage");

        if (birthdayInput === birthday) {
            loadNameStep();
        } else {
            errorMessage.textContent = "Неверная дата. Попробуй снова!";
            errorMessage.classList.remove("hidden");
        }
    });
}

function loadNameStep() {
    document.body.innerHTML = `
        <div class="container">
            <h1>Как зовут любящего тебя?</h1>
            <input type="text" id="nameInput" placeholder="Введите имя">
            <button id="submitName">Продолжить</button>
            <p id="errorMessage" class="hidden">Неверное имя. Попробуй снова!</p>
        </div>
    `;

    document.getElementById("submitName").addEventListener("click", () => {
        const nameInput = document.getElementById("nameInput").value;
        const errorMessage = document.getElementById("errorMessage");

        if (nameInput === yourName) {
            loadFinalMessage();
        } else {
            errorMessage.textContent = "Неверное имя. Попробуй снова!";
            errorMessage.classList.remove("hidden");
        }
    });
}

function loadFinalMessage() {
    document.body.innerHTML = `
        <div class="container">
            <h1>Моё письмо тебе:</h1>
            <p>
                Жаным, спасибо тебе за то, что общаешься со мной, я даже
                представить не мог, насколько ты станешь для меня особенной, и любимой.
                Я даже удивляюсь, как такая девушка как ты, полюбила такого парня как я.
                Люблю тебя! ❤
            </p>
        </div>
    `;
}
