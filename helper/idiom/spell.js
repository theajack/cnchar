const dict = require('../../src/plugin/idiom/idiom.json');
const cnchar = require('../../src/plugin/all/index');
const fs = require('fs');

let last = '';
let lastNoTone = '';

let spellDict = [], spellDictNoTone = [];

dict.forEach((d, index) => {
    let spell = cnchar.spell(d[0], 'tone', 'low');
    let spellNoTone = cnchar._.removeTone(spell).spell;

    if (last !== spell) {
        spellDict.push(spell + ':' + index);
    }

    if (lastNoTone !== spellNoTone) {
        spellDictNoTone.push(spellNoTone + ':' + index);
    }

    last = spell;
    lastNoTone = spellNoTone;
});

fs.writeFileSync('./helper/idiom/spell.json', JSON.stringify(spellDict, null, 4), 'utf8');
fs.writeFileSync('./helper/idiom/spell.notone.json', JSON.stringify(spellDictNoTone, null, 4), 'utf8');