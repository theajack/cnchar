import originCountDict from './dict/stroke-count-fan.json';
import originOrderDict from './dict/stroke-order-fan.json';
import originTradDict from './dict/trad-simple.json';
import originSparkDict from './dict/spark-simple.json';
import {Json} from 'cnchar/types/common';
 
export const countDict = originCountDict as Json<string>;
export const orderDict = originOrderDict as Json<string>;
export const tradDict = originTradDict as Json<string>;
export const sparkDict = originSparkDict as Json<string>;