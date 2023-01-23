let formData = JSON.parse(sessionStorage.getItem("testParams"));

const { game, mode, rangeMultiplicity, difficultyMode } = formData


const readyButton = document.querySelector('#ready-to-test')
const mainScreen = document.querySelector('#main-test')


function startTest() {
    fetchGame(game, mode, rangeMultiplicity, difficultyMode)
    mainScreen.style.left = '-100vw'
    // sessionStorage.removeItem('testParams');
}