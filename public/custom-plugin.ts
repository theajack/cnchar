
const plugin: any = {
    pluginName: 'custom',
    install (cnchar: any) {
        console.log(cnchar);
        const log = () => console.log('hello!');
        return {
            customLog: log,
            custom: {
                version: '0.0.1',
                log
            }
        };
    }
};

export default plugin;