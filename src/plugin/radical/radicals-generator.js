function buildData() {
    const { createReadStream, promises: fsPromises } = require('fs');
    const { join } = require('path');
    const { createInterface } = require('readline');
    const wordRegex = /"word": "(?<word>.*)"/;
    const radicalsRegex = /"radicals": "(?<radicals>.*)"/;
    // https://raw.githubusercontent.com/pwxcoo/chinese-xinhua/master/data/word.json
    const inputPath = join(__dirname, 'word.json');
    const outputPath = join(__dirname, 'radicals.json');
    return new Promise((resolve, reject) => {
        const words = new Map();
        let word = null;
        let radicals = null;
        const readStream = createReadStream(inputPath, {
            encoding: 'utf8',
            autoClose: true,
            emitClose: true,
        });
        const readLine = createInterface({ input: readStream });
        readStream.on('error', (err) => reject(err));
        readLine.on('close', () => resolve(words));
        readLine.on('line', (line) => {
            let matches = wordRegex.exec(line);
            if (matches && matches.groups) {
                word = matches.groups.word;
                radicals = null;
            } else {
                matches = radicalsRegex.exec(line);
                if (matches && matches.groups) {
                    radicals = matches.groups.radicals;
                    if (word && word.length > 0 && radicals && radicals.length > 0) {
                        words.set(word, radicals);
                    }
                    word = null;
                    radicals = null;
                }
            }
        });
    }).then(async (words) => {
        const output = await fsPromises.open(outputPath, 'w');
        await output.write('{\n');
        let first = true;
        for (const [word, radicals] of words) {
            if (first) {
                first = false;
                await output.write(`  "${word}": "${radicals}"`);
            } else {
                await output.write(`,\n  "${word}": "${radicals}"`);
            }
        }
        await output.write('\n}\n');
    });
}

buildData().then(
    () => console.log('完成'),
    (err) => console.error(err)
);
