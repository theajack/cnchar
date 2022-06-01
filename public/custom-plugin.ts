
const log = () => console.log('hello!');

const plugin: any = {
    pluginName: 'custom',
    install (cnchar: any) {
        console.log(cnchar);
    },
    customLog: log,
    version: '0.0.1',
    log
};

export default plugin;