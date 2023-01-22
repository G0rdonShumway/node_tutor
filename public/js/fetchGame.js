let testData
function fetchGame(game, mode, range, difficulty) {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", `js/data/${game}.json`, true);

  var cardDeck = document.querySelector('#card-deck')

  xhr.onload = function () {
    testData = JSON.parse(xhr.response);

    console.log(testData);
    var combination

    if (game === "blackjack") {
      combination = 0;
    }

    let betsArr = new Set();
    while(betsArr.size < 10) {
      let randomNum = Math.floor(Math.random() * (500 - 25 + 1) + 25);
      if(randomNum % 5 !== 0) randomNum = Math.round(randomNum/5)*5;
      betsArr.add(randomNum);
    }
    betsArr = [...betsArr];

    for (let i = 0; i < 10; i++) {
      var card = document.createElement('div')
      card.classList.add("card");
      card.setAttribute(
        "data-ranswer",
        betsArr[i] * testData[1][combination].coefficient
      );
      card.innerHTML = `
          <p>${betsArr[i]}</p>
          <input type="number" pattern="[0-9]*" inputmode="decimal" class="card-input" onkeyup="if (event.keyCode === 13) nextCard()" onblur="nextCard()" >
          <span>Bet ${i + 1} of ${betsArr.length}</span>
      `;

      // cardDeck.appendChild(card);
      
      cardDeck.prepend(card);

    }

  };
  xhr.send();
}

