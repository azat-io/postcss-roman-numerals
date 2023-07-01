import valueParser from 'postcss-value-parser'
import { toArabic } from 'roman-numerals'

const postcssRomanNumerals = () => ({
  Declaration: decl => {
    let units = [
      'vmin',
      'vmax',
      'rem',
      'em',
      'ex',
      'px',
      'cm',
      'mm',
      'in',
      'pt',
      'pc',
      'ch',
      'vh',
      'vw',
      'vi',
      'vb',
      '%',
    ]

    let declValue = decl.value
    let parsedValue = valueParser(declValue)

    parsedValue.walk(node => {
      for (let i = 0, max = units.length; i < max; i++) {
        let pattern = new RegExp('[IVXLCDM]+' + units[i], 'g')

        if (pattern.test(node.value)) {
          let number = parsedValue.toString().replace(units[i], '')
          node.value = `${toArabic(number)}${units[i]}`
          decl.cloneBefore({ value: parsedValue.toString() })
          decl.remove()
        }
      }
    })
  },
  postcssPlugin: 'postcss-roman-numerals',
})

postcssRomanNumerals.postcss = true

export default postcssRomanNumerals
