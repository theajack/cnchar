/*
 * @Author: chenzhongsheng
 * @Date: 2023-02-04 10:31:48
 * @Description: Coding something
 */
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'entry',
                targets: {
                    esmodules: true,
                    ie: 11,
                },
            },
        ],
    ],
};

