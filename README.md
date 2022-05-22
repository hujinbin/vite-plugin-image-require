# vite-plugin-image-require
vite-plugin，图片require的处理

## Install

```bash
npm install vite-plugin-image-require -D
```

```js
// vite.config.js
import { imageRequirePlugin } from 'vite-plugin-image-require'

export default {
  plugins: [
    imageRequirePlugin()
  ],
}
```



### 转化:
```bash
<template>
    <div>
        <img :src="require('./assets/logo.png')"/>
    </div>
</template>
```

will be transformed into
```
<template>
    <div>
        <img :src="new URL('./assets/logo.png', import.meta.url).href"/>
    </div>
</template>
```
