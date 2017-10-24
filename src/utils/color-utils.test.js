import { distanceHSV, distanceRGB, nearColors } from './color-utils'

describe('distanceHSV', () => {
  it('calcte correct distance', () => {
    const hex1 = '804040' // 0, 50, 50
    const hex2 = '994D3D' // 10, 60, 60
    expect(distanceHSV(hex1, hex2)).toBeCloseTo(Math.sqrt(300))
    expect(distanceHSV(hex1, hex1)).toBeCloseTo(0)
    const hex3 = '663D44' // 350, 40, 40
    expect(distanceHSV(hex1, hex3)).toBeCloseTo(Math.sqrt(300))
  })
})

describe('distanceRGB', () => {
  it('calcte correct distance', () => {
    const hex1 = '504650' // 80, 70, 80
    const hex2 = '465046' // 70, 80, 70
    expect(distanceRGB(hex1, hex2)).toBeCloseTo(Math.sqrt(300))
    expect(distanceRGB(hex1, hex1)).toBeCloseTo(0)
    expect(distanceRGB(hex2, hex2)).toBeCloseTo(0)
  })
})

describe('nearColors', () => {
  it('return it if exist match color', () => {
    const ret1 = nearColors('000000')
    expect(ret1[0]).toBe('000000')
    const ret2 = nearColors('ffffff')
    expect(ret2[0]).toBe('ffffff')
    const ret3 = nearColors('0000ff')
    expect(ret3[0]).toBe('0000ff')
  })
  it('return near color', () => {
    const ret1 = nearColors('010101')
    expect(ret1[0]).toBe('000000')
    const ret2 = nearColors('fefefe')
    expect(ret2[0]).toBe('ffffff')
    const ret3 = nearColors('fc00fc')
    expect(ret3[0]).toBe('ff00ff')
  })
})
