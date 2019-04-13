import timeFormatter from './timeFormatter'

describe('timeFormatter', () => {
  test('should return time formatted when to pass date parameters', () => {
    const hours = 0
    const minutes = 0
    const datetime = new Date(1970, 1, 1, hours, minutes)
    const timeFormatted = '00:00'
    expect(timeFormatter(datetime)).toEqual(timeFormatted)
  })
})
