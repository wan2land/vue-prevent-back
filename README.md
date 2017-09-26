Vue Prevent Back
================

[![vue-js](https://img.shields.io/badge/vue.js-2.x-brightgreen.svg?maxAge=604800)](https://vuejs.org/)
[![downloads](https://img.shields.io/npm/dt/vue-prevent-back.svg)](https://www.npmjs.com/package/vue-prevent-back)
[![npm-version](https://img.shields.io/npm/v/vue-prevent-back.svg)](https://www.npmjs.com/package/vue-prevent-back)

Prevent Back Directive for Vue2.

[Demo](http://wan2land.github.io/vue-prevent-back/)

## Installation

```
npm install vue-prevent-back --save
```

## Usage

### ES6

```js
import Vue from 'vue'
import VuePreventBack from 'vue-prevent-back'

Vue.use(VuePreventBack)
```

### Globals

```html
<html>
<head>
  ...
</head>
<body>
  <div id="app">
    <form v-prevent-back>
        ...
    </form>
  </div>

  <script src="path/to/vue.js"></script>
  <script src="path/to/vue-prevent-back.js"></script>
  <script>
    new Vue({
      el: '#app'
    })
  </script>
</body>
</html>
```

### Example

 - [Demo](http://wan2land.github.io/vue-prevent-back/)
 - [Sources](./example-src)

### License

MIT