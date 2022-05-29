// /*
//  * @Author: tackchen
//  * @Date: 2022-05-25 21:20:55
//  * @LastEditors: tackchen
//  * @LastEditTime: 2022-05-26 09:37:41
//  * @FilePath: /cnchar/src/cnchar/plugin/code/index.ts
//  * @Description: 汉字编码支持
//  */

// // unicode 二进制code 仓颉码 四角号码 统一编码 GBK编码 charCode 五行属性

// import {IPlugin} from 'cnchar-types/main/common';
// import {IExplain} from 'cnchar-types/plugin/explain';
// import {explain, setCnchar, args} from './explain';

// const plugin: IPlugin = {
//     pluginName: 'code',
//     install (cnchar) {
//         setCnchar(cnchar);
//         return {explain};
//     },
//     args: args,
// };

// if (typeof window === 'object') {
//     window.CncharCode = code;
//     if (window.CnChar) window.CnChar.use(plugin);
// }

// export default Object.assign(explain, plugin) as IExplain & IPlugin;