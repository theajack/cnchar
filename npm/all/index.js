"use strict";

var cnchar = require('cnchar');

var order = require('cnchar-order');

var trad = require('cnchar-trad');

var poly = require('cnchar-poly');

var draw = require('cnchar-draw');

var idiom = require('cnchar-idiom');

var xhy = require('cnchar-xhy');

cnchar.use(order, trad, poly, draw, idiom, xhy);
module.exports = cnchar;