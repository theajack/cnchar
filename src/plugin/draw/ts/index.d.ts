import {IDraw} from './types/common';
declare const draw: IDraw;
declare module 'cnchar' {
    interface CnCharStatic {
        draw: IDraw;
    }
}
export default draw;