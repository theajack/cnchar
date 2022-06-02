
const {exec, Packages} = require('./tool');
const {plugins, allPackage, mainPackage, types, utils} = Packages;

// plugins 'main' 'npm' 'types' 可选
// npm run publish: 默认build 全部
// npm run publish main poly npm: build三个

async function main () {
    // console.log('fake publish');
    // return;
    const publish = 'npm publish ';
    const publishPackage = `${publish}npm/packages/`;
    const publishAll = `${publishPackage}cnchar-all`;
    const publishTypes = `${publishPackage}cnchar-types`;
    const publishMain = `${publishPackage}cnchar`;
    let cmds = [];
    let cmdConsole = [];
    const packages = process.argv.slice(2);

    packages.forEach(package => {
        if (plugins.includes(package) || utils.includes(package)) {
            cmds.push(`${publishPackage}${package}`);
            cmdConsole.push(package);
        } else if (package === mainPackage) {
            cmds.push(publishMain);
            cmdConsole.push(mainPackage);
        } else if (package === allPackage) {
            cmds.push(publishAll);
            cmdConsole.push(allPackage);
        } else if (package === types) {
            cmds.push(publishTypes);
            cmdConsole.push(types);
        }
    });

    if (cmds.length === 0) {
        cmds = [
            publishTypes,
            publishMain,
            ...plugins.map(plugin => `${publishPackage}${plugin}`),
            publishAll,
            ...utils.map(util => `${publishPackage}${util}`)
        ];
        cmdConsole = [
            types,
            mainPackage,
            ...plugins,
            allPackage,
            ...utils
        ];
    }
    console.log(`Start Publish... [0/${cmds.length}]`);
    const errorList = [];
    for (let i = 0; i < cmds.length; i++) {
        const {success, stderr} = await exec(cmds[i]); {
            if (success) {
                console.log(`${cmdConsole[i]} publish success. [${i + 1}/${cmds.length}]`);
            } else {
                console.log(stderr);
                console.log(`${cmdConsole[i]} publish fail!. [${i + 1}/${cmds.length}]`);
                errorList.push(cmdConsole[i]);
            }
        }
    }
    console.log('Finished!');

    if (errorList.length > 0) {
        console.log(`Fail Items: ${cmdConsole.toString()}`);
    }
}

main();

