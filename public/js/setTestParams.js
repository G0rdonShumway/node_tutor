let formData = JSON.parse(sessionStorage.getItem("testParams"));

const {game, mode, rangeMultiplicity, difficultyMode} = formData

fetchGame(game, mode, rangeMultiplicity, difficultyMode)

const readyButton = document.querySelector('#ready-to-test')
const mainScreen = document.querySelector('#main-test')

readyButton.addEventListener('click', () => {
    mainScreen.style.left = '-100vw'
    formData.mode === 'timer' ? startTimer(testData[0].time) : ''
})

