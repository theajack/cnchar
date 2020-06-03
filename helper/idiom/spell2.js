const spellDict = require('./spell.json');
const cnchar = require('../../src/plugin/all/index');
const spellDictNoTone = require('./spell.notone.json');
const fs = require('fs');

let spellDictArr = spellDict.map(spell => {
    let arr = spell.split(':');
    arr[0] = cnchar._.removeTone(arr[0]).spell;
    return [arr[0], arr[1]];
});


let uselessIndexes = [];

for (let i = 1; i < spellDictArr.length - 1; i++) {
    let prevSpell = spellDictArr[i - 1][0][0];
    let nextSpell = spellDictArr[i + 1][0][0];
    let spell = spellDictArr[i + 1][0][0];
    if (prevSpell === nextSpell && prevSpell !== spell) {
        uselessIndexes.push(i);
    }
}


let spellDictArrNoTone = spellDictNoTone.map(spell => {
    return spell.split(':');
});

let uselessIndexesNoTone = [];

for (let i = 1; i < spellDictArrNoTone.length - 1; i++) {
    let prevSpell = spellDictArrNoTone[i - 1][0][0];
    let nextSpell = spellDictArrNoTone[i + 1][0][0];
    let spell = spellDictArrNoTone[i + 1][0][0];
    if (prevSpell === nextSpell && prevSpell !== spell) {
        uselessIndexesNoTone.push(i);
    }
}

for (let i = uselessIndexes.length - 1; i >= 0; i--) {
    spellDict.splice(uselessIndexes[i], 1);
}
for (let i = uselessIndexesNoTone.length - 1; i >= 0; i--) {
    spellDictNoTone.splice(uselessIndexesNoTone[i], 1);
}
fs.writeFileSync('./helper/idiom/spell2.json', JSON.stringify(spellDict, null, 4), 'utf8');
fs.writeFileSync('./helper/idiom/spell2.notone.json', JSON.stringify(spellDictNoTone, null, 4), 'utf8');
fs.writeFileSync('./helper/idiom/spell2.min.json', JSON.stringify(spellDict), 'utf8');
fs.writeFileSync('./helper/idiom/spell2.min.notone.json', JSON.stringify(spellDictNoTone), 'utf8');