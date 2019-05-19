import timeFormatter from './timeFormatter'
import calculateMedicineTime from './calculateMedicineTime'

const inputHour = document.getElementById('input-hour')
const inputMin = document.getElementById('input-min')
const buttonAddHour = document.getElementById('button-add-hour')
const buttonRemoveHour = document.getElementById('button-remove-hour')
const buttonAddMin = document.getElementById('button-add-min')
const buttonRemoveMin = document.getElementById('button-remove-min')
const buttonCalc = document.getElementById('button-calc')

function init () {
  console.log('Running app...')
  const dateNow = new Date()
  const [hourFormatted, minFormatted] = timeFormatter(dateNow).split(':')
  inputHour.value = hourFormatted
  inputMin.value = minFormatted
  buttonAddHour.addEventListener('click', increment)
  buttonRemoveHour.addEventListener('click', decrement)
  buttonAddMin.addEventListener('click', increment)
  buttonRemoveMin.addEventListener('click', decrement)
  buttonCalc.addEventListener('click', calculateResult)
}

function increment (event) {
  const name = event.target.name
  switch (name) {
    case 'incrementHour': {
      const value = parseInt(inputHour.value)
      if (value < 23) {
        inputHour.value = (value + 1).toString().padStart(2, '0')
      } else {
        inputHour.value = '00'
      }
      break
    }
    case 'incrementMin': {
      const value = parseInt(inputMin.value)
      if (value < 59) {
        inputMin.value = (value + 1).toString().padStart(2, '0')
      } else {
        inputMin.value = '00'
      }
      break
    }
  }
}

function decrement (event) {
  const name = event.target.name
  switch (name) {
    case 'decrementHour': {
      const value = parseInt(inputHour.value)
      if (value !== 0) {
        inputHour.value = (value - 1).toString().padStart(2, '0')
      } else {
        inputHour.value = '23'
      }
      break
    }
    case 'decrementMin': {
      const value = parseInt(inputMin.value)
      if (value !== 0) {
        inputMin.value = (value - 1).toString().padStart(2, '0')
      } else {
        inputMin.value = '59'
      }
      break
    }
  }
}

function calculateResult () {
  const date = new Date()
  date.setHours(inputHour.value)
  date.setMinutes(inputMin.value)
  const interval = document.querySelector('input[name="interval"]:checked').value
  const result = calculateMedicineTime(date, parseInt(interval))
  renderResult(result)
}

function renderResult (result) {
  const resultElement = document.getElementById('result')
  if (resultElement.hasChildNodes) {
    while (resultElement.firstChild) {
      resultElement.removeChild(resultElement.firstChild)
    }
  }
  result.forEach((item) => {
    const element = document.createElement('div')
    const text = document.createTextNode(item)
    element.appendChild(text)
    resultElement.appendChild(element)
  })
}

init()
