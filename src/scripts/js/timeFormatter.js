function timeFormatter (date) {
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const formatIntToString2Digits = (value) => value.toString().padStart(2, '0')
  return `${formatIntToString2Digits(hours)}:${formatIntToString2Digits(minutes)}`
}

export default timeFormatter
