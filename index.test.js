import { describe, expect, it } from 'vitest'
import postcss from 'postcss'

import postcssRomanNumerals from './index'

let testPlugin = async (input, output) => {
  let result = await postcss([postcssRomanNumerals()]).process(input)
  expect(result.css).toBe(output)
  expect(result.warnings).toHaveLength(0)
}

describe('postcss-roman-numerals', () => {
  it('works with percents', async () => {
    await testPlugin('img{ width: L% }', 'img{ width: 50% }')
  })

  it('works with pixels', async () => {
    await testPlugin('p{ line-height: XIVpx }', 'p{ line-height: 14px }')
  })

  it('works with sizes of elements', async () => {
    await testPlugin('p{ font-size: IIem }', 'p{ font-size: 2em }')
  })

  it('works with height of the viewport', async () => {
    await testPlugin('.app{ min-height: Cvh }', '.app{ min-height: 100vh }')
  })
})
