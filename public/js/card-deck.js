const cardDeck = document.getElementById("card-deck");
const cards = cardDeck.getElementsByClassName("card");

let currentCard = Number(difficulty.split('-')[1]) - 1;

// Получение следующей карточки
function nextCard() {
    if (cards[currentCard])
        cards[currentCard].style.transform = "translateX(-999%)";
    currentCard--;
    if (currentCard < 0) {
        window.location.href = '/'
    }
}

const buttons = document.querySelectorAll('.digit');
const input = document.getElementById('answer-input');
const dot = document.querySelector('.dot');

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Get the value of the button that was clicked
        const buttonValue = this.innerHTML;

        // Check if the button is the backspace button
        if (this.classList.contains('backspace')) {
            input.value = input.value.slice(0, -1);
        } else if (this === dot && input.value.indexOf('.') !== -1) {
            return;
        } else if (this.classList.contains("submit")) {
            saveResult();
        } else {
            input.value += buttonValue;
        }
    });
});

function saveResult() {
    input.value = "";
    nextCard()
}

function hideEmpty() {
    var bet = Array.from(document.querySelectorAll(".bet"));
    bet.forEach((bet) => {
        if (bet.textContent == 0) {
            bet.style.display = "none";
        }
    });
}

function calculation(parent) {
    var bet = Array.from(parent.querySelectorAll(".bet"));
    var sum = 0;
    bet.forEach((bet) => {
        if (bet.dataset.bet === "sixline") {
            sum += bet.textContent * 5;
        }
        if (bet.dataset.bet === "corner") {
            sum += bet.textContent * 8;
        }
        if (bet.dataset.bet === "street") {
            sum += bet.textContent * 11;
        }
        if (bet.dataset.bet === "split") {
            sum += bet.textContent * 17;
        }
        if (bet.dataset.bet === "straight") {
            sum += bet.textContent * 35;
        }
    });

    return sum;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizer(parent, chipCount) {
    var bet = Array.from(parent.querySelectorAll(".bet"))
    var n = bet.length
    var m = chipCount

    var randomNumbers = [];
    var sum = 0;
    for (var i = 0; i < n - 1; i++) {
        var randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * (m - sum));
        } while (randomNumber > m / 5);

        randomNumbers.push(randomNumber);
        sum += randomNumber;
    }
    if (m - sum <= m / 5) {
        randomNumbers.push(m - sum);
    } else {
        var newLastNumber = (m / 5)
        randomNumbers.push(newLastNumber);
        sum += newLastNumber;
        var newSpanOne = Math.floor((m - sum) / 2)
        var newSpanTwo = Math.ceil((m - sum) / 2)

        let sortedNumbers = randomNumbers.sort((a, b) => a - b);
        sortedNumbers[0] += newSpanTwo
        sortedNumbers[1] += newSpanOne

        randomNumbers = sortedNumbers.sort(() => Math.random() - 0.5);
    }

    for (var j = 0; j < n; j++) {
        bet[j].textContent = randomNumbers[j]
    }
    return randomNumbers;
}