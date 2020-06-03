var cnchar = require('../../main');
var order = require('../order');
var trad = require('../trad');
var poly = require('../poly');
var draw = require('../draw');
var idiom = require('../idiom');
var xhy = require('../xhy');
cnchar.use(order, trad, poly, draw, idiom, xhy);
module.exports = cnchar;