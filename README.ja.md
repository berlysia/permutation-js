# Permutation JS

配列から順列を得るためのライブラリです。

[English README is here](./README.md)

## インストール

```sh
npm install permutation-js
```

## 使用方法

### ライブラリのインポート

#### ES Modules

```javascript
import {
	permutations,
	permutationsReadonly,
	allPermutations,
	allPermutationsReadonly,
	allPermutationsDFS,
} from "permutation-js";
```

#### CommonJS

```javascript
const {
	permutations,
	permutationsReadonly,
	allPermutations,
	allPermutationsReadonly,
	allPermutationsDFS,
} = require("permutation-js");
```

### 順列の生成

#### `permutations`

指定された比較関数によって定まる順序に基づいて、順列を辞書順で生成します。

```javascript
const input = [1, 2, 3];
for (const perm of permutations(input)) {
	console.log(perm);
}
// 出力:
// [1, 2, 3]
// [1, 3, 2]
// [2, 1, 3]
// [2, 3, 1]
// [3, 1, 2]
// [3, 2, 1]

// Spread syntaxを使って配列に展開することもできます
const result = [...permutations(input)];
console.log(result);
```

入力配列に重複が含まれている場合、順列もそれを考慮します：

```javascript
const input = [1, 2, 2];
for (const perm of permutations(input)) {
	console.log(perm);
}
// 出力:
// [1, 2, 2]
// [2, 1, 2]
// [2, 2, 1]
```

#### `permutationsReadonly`

指定された比較関数によって定まる順序に基づいて、順列を辞書順で生成します。TypeScriptの`ReadonlyArray`を活かし、コピーコストを省略します。

```javascript
const input = [1, 2, 3];
for (const perm of permutationsReadonly(input)) {
	console.log(perm);
}
// 出力:
// [1, 2, 3]
// [1, 3, 2]
// [2, 1, 3]
// [2, 3, 1]
// [3, 1, 2]
// [3, 2, 1]
```

#### `allPermutations`

順列を全パターン列挙します。

```javascript
const input = [1, 2, 3];
for (const perm of allPermutations(input)) {
	console.log(perm);
}
// 出力:
// [1, 2, 3]
// [1, 3, 2]
// [2, 1, 3]
// [2, 3, 1]
// [3, 1, 2]
// [3, 2, 1]
```

入力配列に重複が含まれている場合、順列はそれを考慮しません：

```javascript
const input = [1, 2, 2];
for (const perm of allPermutations(input)) {
	console.log(perm);
}
// 出力:
// [1, 2, 2]
// [1, 2, 2]
// [2, 1, 2]
// [2, 2, 1]
// [2, 1, 2]
// [2, 2, 1]
```

#### `allPermutationsReadonly`

指定された比較関数によって定まる順序に基づいて、順列を辞書順で生成します。TypeScriptの`ReadonlyArray`を活かし、コピーコストを省略します。

```javascript
const input = [1, 2, 3];
for (const perm of allPermutationsReadonly(input)) {
	console.log(perm);
}
// 出力:
// [1, 2, 3]
// [1, 3, 2]
// [2, 1, 3]
// [2, 3, 1]
// [3, 1, 2]
// [3, 2, 1]
```
