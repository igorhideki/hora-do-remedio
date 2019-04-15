import calculateMedicineTime from './calculateMedicineTime'

describe('calculateMedicineTime', () => {
  const dateNow = new Date()
  const timesInterval = 3

  test('should call the function calculateMedicineTime and receive the result of type "array"', () => {
    expect(Array.isArray(calculateMedicineTime(dateNow, timesInterval))).toBe(true)
  })

  test('should call the function calculateMedicineTime and the length of the result must be equal to the time interval', () => {
    const dateNow = new Date()
    const timesInterval = 3
    expect(calculateMedicineTime(dateNow, timesInterval).length).toEqual(timesInterval)
  })

  test('should call the function calculateMedicineTime and return the correct result', () => {
    const date = new Date(1997, 1, 1, 0, 0)
    const timesInterval = 3
    expect(calculateMedicineTime(date, timesInterval)).toEqual(['00:00', '08:00', '16:00'])
  })
})
