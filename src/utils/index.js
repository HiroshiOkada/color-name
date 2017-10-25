import convert from 'color-convert'
import { hexToNames } from './name-hex'
import { nearColors } from '../utils/color-utils'
import { nameToHex } from '../utils/name-hex'

function nomalizeHex(text) {
  text = text.trim()

  const hex6Match = text.match(/^#?([0-9a-fA-F]{6})$/)
  if (hex6Match) {
    return hex6Match[1]
  }

  const hex3Match = text.match(/^#?([0-9a-fA-F]{3})$/)
  if (hex3Match) {
    return `${hex3Match[1][0]}${hex3Match[1][0]}` +
      `${hex3Match[1][1]}${hex3Match[1][1]}` +
      `${hex3Match[1][2]}${hex3Match[1][2]}`
  }

  return null
}

export function getInfo(hex) {
  const names = hexToNames(hex) || {}
  const color = `#${hex.toUpperCase()}`
  const hsl = convert.hex.hsl(hex)
  const hwb = convert.hex.hwb(hex)
  const title = color + ' ' + Object.keys(names).map(key => names[key].join(', ')).join(', ')

  return {
    title,
    ...names,
    color,
    rgb: `(${convert.hex.rgb(hex).join(', ')})`,
    hsl: `(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`,
    hwb: `(${hwb[0]}, ${hwb[1]}%, ${hwb[2]}%)`,
    cmyk: '(0%, 0%, 100%, 0%)'
  }
}

export function getInfoList(searchText) {
  const hex = nameToHex(searchText) || nomalizeHex(searchText)
  if (!hex) {
    return null
  }
  const hexList = nearColors(hex).slice(0, 7)

  if (hexList[0] !== hex) {
    hexList.unshift(hex)
  }
  return hexList.map(hx => getInfo(hx))
}
