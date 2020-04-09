var cnchar = require('../../main');
var order = require('../order');
var trad = require('../trad');
var poly = require('../poly');
var draw = require('../draw');
cnchar.use(order, trad, poly, draw);
module.exports = cnchar;