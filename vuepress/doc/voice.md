## 1. 介绍

cnchar 在 3.1.0 加入了发音、语音合成和语音识别功能, 需要安装 `cnchar-voice`, 该库可以独立于cnchar主库运行

使用cdn引用时，会在window对向上暴露 `CncharVoice` 对象

## 2. voice api

voice api用于发音单个和多个汉字发音，对于句子发音连续效果不佳，但是兼容性好，支持小程序使用

```ts
cnchar.voice(words: string, options: IVoiceOptions): IVoicePlayer;
```

具体参数请参考 [voice.d.ts](https://github.com/theajack/cnchar/blob/master/src/cnchar-types/plugin/voice/index.d.ts)

## 3. speak api

voice.speak 用于汉字语音合成，是借助于浏览器的 speechSynthesis api，[兼容性不佳](https://caniuse.com/?search=speechSynthesis)但是体验较好

该api需要在用户点击等事件后调用才会生效，且仅在https 或 localhost 中起作用

```ts
cnchar.voice.speak(text: string, options?: ISpeakOptions): SpeechSynthesisUtterance;
```

具体参数请参考 [voice.d.ts](https://github.com/theajack/cnchar/blob/master/src/cnchar-types/plugin/voice/index.d.ts)

## 4. regonize api

voice.regonize 用于汉字语音识别，是借助于浏览器的 SpeechRecognition api，[兼容性不佳](https://caniuse.com/?search=SpeechRecognition)但是体验较好

该api需要在用户点击等事件后调用才会生效，且仅在https 或 localhost 中起作用

```ts
cnchar.voice.regonize(options?: IRecognizeOptions): any;
```

具体参数请参考 [voice.d.ts](https://github.com/theajack/cnchar/blob/master/src/cnchar-types/plugin/voice/index.d.ts)

## 5. 实例

```js
cnchar.voice('你好');
window.addEventListener('click', ()=>{
    cnchar.voice.speak('你好');
    cnchar.voice.regonize();
});
```
