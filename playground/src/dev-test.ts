import cnchar from 'cnchar';
import 'cnchar-order';
import 'cnchar-trad';
import 'cnchar-poly';
import 'cnchar-draw';
import 'cnchar-xhy';
import 'cnchar-radical';
import 'cnchar-words';
import 'cnchar-idiom';
import 'cnchar-voice';
import 'cnchar-explain';
import 'cnchar-random';
import 'cnchar-code';
import 'cnchar-info';
import 'cnchar-input';
import 'cnchar-name';
import custom from './custom-plugin';
import config from '../../test/config';
import startTest from '../../test/runner';

cnchar.use(custom);

console.log('****DEV TEST****');
console.log();

startTest({
    config,
    args: cnchar
});
