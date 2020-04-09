var cnchar = require('cnchar');
var order = require('cnchar-order');
var trad = require('cnchar-trad');
var poly = require('cnchar-poly');
var draw = require('cnchar-draw');
cnchar.use(order, trad, poly, draw);
module.exports = cnchar;