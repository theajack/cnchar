declare type DrawType = 'normal' | 'animation' | 'stroke' | 'test';
declare type TestStatusType = 'mistake' | 'correct' | 'complete';

export declare interface Draw {
    (text:string, option?:DrawOption):Writer;
    TYPE: {
        ANIMATION: 'animation',
        NORMAL: 'normal',
        STROKE: 'stroke',
        TEST: 'test'
    },
    TEST_STATUS: {
        MISTAKE: 'mistake',
        CORRECT: 'correct',
        COMPLETE: 'complete'
    }
}

declare const draw: Draw;

export default draw;