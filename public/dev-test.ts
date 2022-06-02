import cnchar from '../src/cnchar/main';
import '../src/cnchar/plugin/order';
import '../src/cnchar/plugin/trad';
import '../src/cnchar/plugin/poly';
import '../src/cnchar/plugin/draw';
import '../src/cnchar/plugin/xhy';
import '../src/cnchar/plugin/radical';
import '../src/cnchar/plugin/words';
import '../src/cnchar/plugin/idiom';
import '../src/cnchar/plugin/voice';
import '../src/cnchar/plugin/explain';
import '../src/cnchar/plugin/random';
import '../src/cnchar/plugin/code';
import '../src/cnchar/plugin/info';
import '../src/cnchar/plugin/input';
import '../src/cnchar/plugin/name';
import custom from './custom-plugin';
import config from '../helper/test/test.config';
import startTest from '../helper/test/test';

cnchar.use(custom);

console.log('****DEV TEST****');
console.log();

startTest({
    config,
    args: cnchar
});
