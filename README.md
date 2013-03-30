# East Asian Width

Get [East Asian Width](http://www.unicode.org/reports/tr11/) from a character.

'F'(Fullwidth), 'H'(Halfwidth), 'W'(Wide), 'Na'(Narrow), 'A'(Ambiguous) or 'N'(Natural).

## Install

    $ npm install eastasianwidth

## Usage

    var eastasianwidth = require('eastasianwidth');
    console.log(eastasianwidth.eastAsianWidth('￦')) // 'F'
    console.log(eastasianwidth.eastAsianWidth('｡')) // 'H'
    console.log(eastasianwidth.eastAsianWidth('뀀')) // 'W'
    console.log(eastasianwidth.eastAsianWidth('a')) // 'Na'
    console.log(eastasianwidth.eastAsianWidth('①')) // 'A'
    console.log(eastasianwidth.eastAsianWidth('ف')) // 'N'
