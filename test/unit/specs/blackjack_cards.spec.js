import Card from '@/modules/card'

describe('blackjack cards', () => {
  it('should throw if an incorrect rank is requested', () => {
    expect(() => {
      new Card('blaat');
    }).toThrowError('blaat could not be converted to points');
  })
})
