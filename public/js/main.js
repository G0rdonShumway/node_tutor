const hamburger = document.querySelector('#hamburger');
const sidemenu = document.querySelector('#side-menu');
const linkButtons = document.querySelectorAll('.link-button')
const mainScreen = document.querySelector('#main-index')

const testBackButton = document.querySelector('#test-params__header img')
const testParamHeader = document.querySelector('#test-params__header h1 span')

let gameCheckedId;
hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('hamburger__active');
  sidemenu.classList.toggle('side-menu__active');
});

linkButtons.forEach(link => {
  link.addEventListener('click', function() {
    gameChecked = link.getAttribute('data-id')
    mainScreen.style.left = '-100vw'
    testParamHeader.textContent = link.textContent
  })
})
testBackButton.addEventListener('click', function() {
  mainScreen.style.left = '0'
})

const modeTogglers = document.querySelectorAll('#mode-toggle input[name=mode]')
const modeStatus = document.querySelector('#mode-status')

modeTogglers.forEach(toggler => {
  toggler.addEventListener("change", (event) => {
    const selectedMode = event.target.value;
    const selectedModeInfo = event.target.dataset.info;
    modeStatus.innerHTML = selectedModeInfo;
  });
})

const difficultyTogglers = document.querySelectorAll('#difficulty-toggle input[name=difficultyMode]')
const difficultyStatus = document.querySelector('#difficulty-status')

difficultyTogglers.forEach(toggler => {
  toggler.addEventListener("change", (event) => {
    const selectedMode = event.target.value;
    const selectedModeInfo = event.target.dataset.info;
    difficultyStatus.innerHTML = selectedModeInfo;
  });
})