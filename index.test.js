var postcss = require('postcss');

var plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('Works with percents', () => {
    return run('img{ width: L% }', 'img{ width: 50% }', { });
});

it('Works with pixels', () => {
    return run('p{ line-height: XIVpx }', 'p{ line-height: 14px }', { });
});

it('Works with sizes of elements', () => {
    return run('p{ font-size: IIem }', 'p{ font-size: 2em }', { });
});

it('Works with height of the viewport', () => {
    return run('.app{ min-height: Cvh }', '.app{ min-height: 100vh }', { });
});
