import convert from 'color-convert'
import { hexToName } from './css-name'

export function getInfo(hex) {
  const cssName = (hexToName(hex) || []).join(', ')
  const color = `#${hex}`
  const hsl = convert.hex.hsl(hex)
  const hwb = convert.hex.hwb(hex)
  return {
    title: color,
    cssName,
    color: color,
    rgb: `(${convert.hex.rgb(hex).join(', ')})`,
    hsl: `(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`,
    hwb: `(${hwb[0]}, ${hwb[1]}%, ${hwb[2]}%)`,
    cmyk: '(0%, 0%, 100%, 0%)',
    otherNames: []
  }
}

export function getInfoList(searchText) {
  const infoList = [
    getInfo(searchText.replace('#',''))
  ]
  return infoList
}
