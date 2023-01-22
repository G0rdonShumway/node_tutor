const cardDeck = document.getElementById("card-deck");
const cards = cardDeck.getElementsByClassName("card");

let currentCard = 9;

// Получение следующей карточки
function nextCard() {
  if (cards[currentCard])
    cards[currentCard].style.transform = "translateX(-999%)";
  currentCard--;
  if (cards[currentCard]) cards[currentCard].getElementsByClassName("card-input")[0].focus();
}

const buttons = document.querySelectorAll('.digit');
const input = document.getElementById('answer-input');
const dot = document.querySelector('.dot');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Get the value of the button that was clicked
        const buttonValue = this.innerHTML;

        // Check if the button is the backspace button
        if (this.classList.contains('backspace')) {
            input.value = input.value.slice(0, -1);
        } else if (this === dot && input.value.indexOf('.') !== -1) {
            return;
        } else {
            input.value += buttonValue;
        }
    });
});
