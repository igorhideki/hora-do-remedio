import timeFormatter from './timeFormatter'

function calculateMedicineTime (date = new Date(), timesInterval = 1) {
  const arrayOfIntervals = Array(timesInterval).fill('')
  const durationInterval = 24 / timesInterval
  const minutes = date.getMinutes()
  return arrayOfIntervals.map((time, index) => {
    const hours = date.getHours() + durationInterval * index
    const datetime = new Date(1970, 1, 1, hours, minutes)
    return timeFormatter(datetime)
  })
}

export default calculateMedicineTime
