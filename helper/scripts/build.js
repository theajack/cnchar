const {exec, Packages, writeJsonFile} = require('./tool');
const {plugins, allPackage, mainPackage, npmPackage} = Packages;
const pkg = require('../../package.json');


// plugins 'main' 'npm' 可选
// npm run build: 默认build 全部
// npm run build main poly npm: build三个


async function main () {
    const version = modVersion();
    const webpack = 'node ./node_modules/webpack/bin/webpack.js --config ';
    const buildPlugin = 'webpack-config/build.plugin.js --env.pluginname=';
    const buildMain = `${webpack}webpack-config/build.js`;
    const buildNpm = `node ./helper/scripts/build-npm.js`;
    let cmds = [];
    let cmdConsole = [];
    const packages = process.argv.slice(3);

    packages.forEach(package => {
        if (plugins.includes(package) || package === allPackage) {
            cmds.push(`${webpack} ${buildPlugin}${package}`);
            cmdConsole.push(package);
        } else if (package === mainPackage) {
            cmds.push(buildMain);
            cmdConsole.push(mainPackage);
        } else if (package === npmPackage) {
            cmds.push(buildNpm);
            cmdConsole.push(npmPackage);
        }
    });
    if (cmds.length === 0) {
        cmds = [
            buildMain,
            ...plugins.map(plugin => `${webpack} ${buildPlugin}${plugin}`),
            `${webpack} ${buildPlugin}${allPackage}`,
            buildNpm
        ];
        cmdConsole = [
            mainPackage,
            ...plugins,
            allPackage,
            npmPackage
        ];
    }
    console.log(`Start Building(version = ${version})... [0/${cmds.length}]`);
    for (let i = 0; i < cmds.length; i++) {
        const result = await exec(cmds[i]);
        if (!result.success) {
            console.log(result.stderr);
            return;
        }
        console.log(`${cmdConsole[i]} build success. [${i + 1}/${cmds.length}]`);
    }
    console.log('Finished!');
}

function modVersion () {
    const version = process.argv[2];
    if (version) {
        pkg.version = version;
        writeJsonFile('/package.json', pkg);
    }
    return version;
}

main();