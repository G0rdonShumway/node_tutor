const linkButtons = document.querySelectorAll('.link-button')
const mainScreen = document.querySelector('#main-index')
const testBackButton = document.querySelector('#test-params__header img')
const testParamsScreen = document.querySelector('#test-params')

let gameCheckedId;

linkButtons.forEach(link => {
  link.addEventListener('click', function () {
    gameCheckedId = link.getAttribute('data-id')
    fetchTestData(gameCheckedId)

    setTimeout(() => {
      document.querySelector('#test-params form input[name=game]').value = link.getAttribute('data-id')
      mainScreen.style.left = '-100vw'
      document.querySelector('#test-params__header h1 span').textContent = link.textContent
    }, 100)
  })
})
document.addEventListener('click', function (e) {
  if (e.target === testBackButton) {
    mainScreen.style.left = '0'
  }

})

function fetchTestData(gameID) {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", `js/data/test-setup.json`, true);
  xhr.onload = function () {
    testSetup = JSON.parse(xhr.response);
    console.log(testSetup)
    testParamsScreen.innerHTML = testSetup[0][gameID]
    testParams = document.querySelector("#test-params form");
  }
  xhr.send();
}