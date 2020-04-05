var cnchar = require('cnchar');
var order = require('cnchar-order');
var trad = require('cnchar-trad');
var poly = require('cnchar-poly');
cnchar.use(order, trad, poly);
module.exports = cnchar;