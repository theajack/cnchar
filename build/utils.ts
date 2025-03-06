
export function upcaseFirstLetter (str) {
    return str.split('-').map(s => s[0].toUpperCase() + s.substring(1)).join('');
}


/*
! test
console.log('-----------------', deepAssign(
    { a: { x: [1], b: 1, f: 'xx' }, c: 1 },
    { a: { x: [2], b: 2 }, x: { a: 1 } },
    { a: { c: 3 }, d: 2 }
));
*/
export function deepAssign<T extends Record<string, any>> (...args: T[]): T {
    if (args.length === 0) {throw new Error('deepAssign 必须有值');}
    if (args.length === 1) {return args[0];}
    if (args.length > 2) {
        const head = args.shift() as T;
        return deepAssign(head, deepAssign(...args));
    }
    const assign2 = (o1: T, o2: T): T => {
        const isObj = v => (typeof v === 'object' && v !== null);
        const isArr = v => Array.isArray(v);
        for (const k in o2) {
            const v1 = o1[k], v2 = o2[k];
            if (isArr(v1) && isArr(v2)) {
                // @ts-ignore
                v1.push(...v2);
            } else if (isObj(v1) && isObj(v2)) {
                // @ts-ignore
                o1[k] = deepAssign(v1, v2);
            } else {
                o1[k] = v2;
            }
        }
        return o1;
    };
    const [ head, tail ] = args;
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return assign2(assign2({} as T, head), tail);
}