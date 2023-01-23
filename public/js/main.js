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

function toggleRadio(input) {
  inputData = input.getAttribute('data-info')
  inputName = input.getAttribute('name')
  document.querySelector(`#${inputName}-status`).innerHTML = inputData
} 