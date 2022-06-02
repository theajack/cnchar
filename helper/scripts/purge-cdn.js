const https = require('https');

function main () {
    const list = [
        'cnchar',
        'cnchar-order', 'cnchar-poly', 'cnchar-trad', 'cnchar-draw', 'cnchar-idiom', 'cnchar-xhy', 'cnchar-radical',
        'cnchar-words', 'cnchar-explain', 'cnchar-voice', 'cnchar-random', 'cnchar-input', 'cnchar-code', 'cnchar-info', 'cnchar-name',
        'cnchar-all', 'hanzi-util', 'hanzi-util-base'
    ];

    const getFileName = (name) => {
        if (name === 'hanzi-util-base') {
            return 'hanzi.base';
        }
        return name.replace(/-/g, '.');
    };

    let num = 0;
    const checkFinish = (name) => {
        num ++;
        console.log(`${name} done.(${num}/${list.length})`);
        if (num >= list.length) {
            console.log('Finished.');
        }
    };
    
    for (let i = 0; i < list.length; i++) {
        const name = list[i];

        https.get(`https://purge.jsdelivr.net/npm/${name}/${getFileName(name)}.min.js`, () => {
            checkFinish(name);
        });
    }
}

main();

