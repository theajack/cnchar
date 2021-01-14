import EventEmitter from '.';

test('off指定事件', () => {
    const eventEmitter = new EventEmitter();
    const mockCallback = jest.fn();
    eventEmitter.on('abc', mockCallback);
    eventEmitter.off('abc', mockCallback);
    eventEmitter.emit('abc');
    expect(mockCallback.mock.calls.length).toBe(0);
});


test('off所有对应的事件绑定', () => {
    const eventEmitter = new EventEmitter();
    const mockCallback = jest.fn();
    eventEmitter.on('abc', mockCallback);
    eventEmitter.off('abc');
    eventEmitter.emit('abc');
    expect(mockCallback.mock.calls.length).toBe(0);
});

// test('once是否正确?', () => {
//     const eventEmitter = new EventEmitter();
//     const mockCallback = jest.fn();
//     eventEmitter.once('abc', mockCallback);
//     eventEmitter.emit('abc');
//     eventEmitter.emit('abc');
//     expect(mockCallback.mock.calls.length).toBe(1);
// });


// test('off不指定listener运行是否正确?', () => {
//     const mockCallback = jest.fn();
//     const eventEmitter = new EventEmitter();
//     eventEmitter.on('abc', mockCallback);
//     eventEmitter.off('abc');
//     eventEmitter.emit('abc');
//     expect(mockCallback.mock.calls.length).toBe(0);
// });

// test('连续绑定相同事件, 事件触发次数是否正确?', ()=>{
//     const mockCallback = jest.fn();
//     const eventEmitter = new EventEmitter();
//     eventEmitter.on('abc', mockCallback);
//     eventEmitter.on('abc', mockCallback);
//     eventEmitter.emit('abc');
//     expect(mockCallback.mock.calls.length).toBe(2);
// });


test('destory是否生效?', () => {
    const mockCallback = jest.fn();
    const eventEmitter = new EventEmitter();
    eventEmitter.on('abc', mockCallback);
    eventEmitter.destroy();
    eventEmitter.emit('abc');
    expect(mockCallback.mock.calls.length).toBe(0);
});