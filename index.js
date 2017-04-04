var postcss = require('postcss');
var toArabic = require('roman-numerals').toArabic;

module.exports = postcss.plugin('postcss-roman-numerals', function () {
    var units = ['%', 'px', 'rem', 'em', 'vh', 'vw'];

    return function (root) {
        for (var i = 0, max = units.length; i < max; i++) {
            var pattern = new RegExp('[IVXLCDM]+' + units[i], 'g');

            root.replaceValues(pattern, { fast: units[i] }, function (string) {
                string = string.replace(units[i], '');
                return toArabic(string) + units[i];
            });
        }
    };
});
