
## 1. 介绍

cnchar 在3.2.0加入了查询汉字编码的功能，启用该功能需要安装 `cnchar-code` 功能库，该库可以独立于cnchar主库运行

支持的编码方式有 `二进制编码、charCode、unicode、url编码、gbk编码、四角编码、仓颉编码、统一汉字编码`

支持编码和解码

## 2. 查询所有编码

直接调用 code 方法可以查询所有支持的汉字编码

使用方式如下：

```ts
code(input: string): Array<{
    binary: string;
    char: string;
    unicode: string;
    url: string;
    gbk: string;
    sijiao: string;
    cangjie: string;
    uniform: string;
}>;
```

js 调用如下

```js
cnchar.code('汉字');
```

## 3. 二进制编解码

返回结果会以空格分割，解码时传入的word也需要以字符串分割每个汉字的编码

```ts
code.binary(word: string, decoce?: boolean): string;
```

## 3. charCode编解码

返回结果会以空格分割，解码时传入的word也需要以字符串分割每个汉字的编码

```ts
code.char(word: string, decoce?: boolean): string;
```

## 4. unicode编解码

```ts
code.unicode(word: string, decoce?: boolean): string;
```

## 5. url编解码

```ts
code.url(word: string, decoce?: boolean): string;
```

## 6. gbk编解码

```ts
code.gbk(word: string, decoce?: boolean): string;
```

## 7. 四角码编解码

返回结果会以空格分割，解码时传入的word也需要以字符串分割每个汉字的编码

```ts
code.sijiao(word: string, decoce?: boolean): string;
```

## 8. 仓颉码编解码

返回结果会以空格分割，解码时传入的word也需要以字符串分割每个汉字的编码

```ts
code.sijiao(word: string, decoce?: boolean): string;
```

## 9. 统一汉字编码编解码

返回结果会以空格分割，解码时传入的word也需要以字符串分割每个汉字的编码

```ts
code.uniform(word: string, decoce?: boolean): string;
```
