let formData = JSON.parse(sessionStorage.getItem("testParams"));
console.log(formData);

const { game, mode, rangeMultiplicity, difficulty } = formData


const readyButton = document.querySelector('#ready-to-test')
const mainScreen = document.querySelector('#main-test')


function startTest() {
    fetchGame(game, mode, rangeMultiplicity, difficulty)
    mainScreen.style.left = '-100vw'
    // sessionStorage.removeItem('testParams');
}