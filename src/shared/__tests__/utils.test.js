import { getFormattedValue } from '../utils'
test('should format the value', () => {
  expect(getFormattedValue('1234.234')).toBe('1,234.234')
})
