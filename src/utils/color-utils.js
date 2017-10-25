import convert from 'color-convert'
import { namedHexes } from './name-hex'

const pow2 = number => number * number

const degreeDifference = (d1, d2) => {
  while (d2 < d1) {
    d2 += 360
  }
  const d = d2 - d1

  if (d < 180) {
    return d
  }
  return 360 - d
}

export const distanceHSV = (hex1, hex2) => {
  const hsv1 = convert.hex.hsv(hex1)
  const hsv2 = convert.hex.hsv(hex2)
  return Math.sqrt(
    pow2(degreeDifference(hsv1[0], hsv2[0])) +
      pow2(hsv1[1] - hsv2[1]) +
      pow2(hsv1[2] - hsv2[2])
  )
}

export const distanceRGB = (hex1, hex2) => {
  const rgb1 = convert.hex.rgb(hex1)
  const rgb2 = convert.hex.rgb(hex2)
  return Math.sqrt(
    pow2(degreeDifference(rgb1[0], rgb2[0])) +
      pow2(rgb1[1] - rgb2[1]) +
      pow2(rgb1[2] - rgb2[2])
  )
}

export const distance = (hex1, hex2) => (Math.min(distanceHSV(hex1, hex2), distanceRGB(hex1, hex2)))

export const nearColors = hex => {
  const cmp = (hex1, hex2) => (distance(hex, hex1) - distance(hex, hex2))
  return namedHexes().sort(cmp)
}
