import {testStrictEqualCase} from 'testUtils';
import ICnChar from 'cnchar-types';
import trad from '@cnchar-plugin/trad';

const testCases = [
    {
        name: '测试 spellToWord 繁体',
        test (cnchar: ICnChar) {
            return [
                cnchar.spellToWord('shàng'),
                cnchar.spellToWord('shàng', 'alltone'),
                cnchar.spellToWord('shang4', 'alltone'),
                cnchar.spellToWord('shang4', 'alltone', 'trad'),
                cnchar.spellToWord('lv2', 'simple')
            ];
        },
        expect: [
            '上尚绱鞝',
            '上伤汤尚垧殇晌商绱觞赏墒熵裳傷湯殤鞝觴賞',
            '上伤汤尚垧殇晌商绱觞赏墒熵裳傷湯殤鞝觴賞',
            '傷湯殤鞝觴賞',
            '驴闾榈'
        ]
    },
];

testStrictEqualCase({
    testCases,
    plugins: [trad]
});