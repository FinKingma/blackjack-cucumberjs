import Car from '@/modules/car'
import AdaptiveCC from '@/modules/adaptiveCC'

describe('adaptive cruise control', () => {
  it('speed should be adapted to front car', () => {
    const frontcar = new Car()
    frontcar.setSpeed(0)

    const originalSpeed = 100
    const newSpeed = AdaptiveCC.adjustToFrontCar(originalSpeed, 280, frontcar)

    expect(newSpeed)
      .toEqual(0)
  })
})
