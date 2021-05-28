const postcss = require('postcss')

const plugin = require('./')

async function run (input, output, opts = { }) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('adds the comments at the top and bottom of the sheet', async () => {
  await run('a { color: red; }', '/* ! purgecss start ignore */\na { color: red; } /* ! purgecss end ignore */', { });
})
