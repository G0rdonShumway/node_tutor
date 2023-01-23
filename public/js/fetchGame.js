let testData

function fetchGame(game, mode, range, difficulty) {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", `js/data/${game}.json`, true);

  var cardDeck = document.querySelector('#card-deck')

  xhr.onload = function () {
    testData = JSON.parse(xhr.response);
    difficulty = difficulty.split('-')
    var testDIF = Number(difficulty[1])
    if (mode === 'sandbox') timerContainer.outerHTML = ''

    if (game === 'roulette-pictures') {
      var chipCount = [15, 20, 20, 30, 30, 30, 40, 40, 40, 40, 50, 50, 50, 50, 50, 55, 55, 55, 55, 60, 60]

      for (let i = 0; i < testDIF; i++) {
        var card = document.createElement('div')
        card.classList.add("card");
        card.innerHTML =
          testData[1][getRandomIntInclusive(0, 4)] +
          `<span class="card-index">${i + 1}${mode === 'timer' ? ' of ' + testDIF : ''}</span>`

        card.setAttribute("data-ranswer", calculation(card)
        );

        cardDeck.prepend(card);

        randomizer(card, chipCount[i]);


        card.querySelectorAll(".red").forEach((cell) => {
          cell.style.color = "hsl(0deg 100% 48% / 1)";
        });
        card.querySelectorAll(".black").forEach((cell) => {
          cell.style.color = "hsl(0deg 0% 0% / 1)";
        });
        card.querySelectorAll(".green").forEach((cell) => {
          cell.style.color = "hsl(120deg 100% 25% / 1)";
        });
      }
      hideEmpty();
    } else {

      range = range.split('-')
      var testMIN = Number(range[0])
      var testMAX = Number(range[1])
      var testMUL = Number(range[2])

      var combination

      if (game === "blackjack") {
        combination = 0;
      }

      let betsArr = new Set();
      while (betsArr.size < testDIF) {
        let randomNum = Math.floor(Math.random() * (testMAX - testMIN + 1) + testMIN);
        if (randomNum % testMUL !== 0) randomNum = Math.round(randomNum / testMUL) * testMUL;
        betsArr.add(randomNum);
      }
      betsArr = [...betsArr];
      console.log(game, mode, range, difficulty)
      console.log(betsArr);

      for (let i = 0; i < testDIF; i++) {
        var card = document.createElement('div')
        card.classList.add("card");
        card.setAttribute(
          "data-ranswer",
          betsArr[i] * testData[1][combination].coefficient
        );
        card.innerHTML = `
            <p class="card-title">${testData[0].title}</p>
            <p class="card-bet">${betsArr[i]}</p>
            <span class="card-index">${i + 1}${mode === 'timer' ? ' of ' + betsArr.length : ''}</span>
        `;

        cardDeck.prepend(card);

      }
    }





    formData.mode === 'timer' ? startTimer(testData[0].time) : ''
  };
  xhr.send();
}

