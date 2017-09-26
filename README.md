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

Vue.use(VuePreventBack, options)
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

## Install Options

Option  |Type  |Default         |Description
--------|------|----------------|-----
name    |String|`'prevent-back'` |change directive name.
message |String|`'You have unsaved work. Are you sure you want to leave this page?'` |change default message.

**`name` Example.**

```js
import VuePreventBack from 'vue-prevent-back'

Vue.use(VuePreventBack, {
    name: "my-prevent-back",
})
```

Now, you can use directive below.

```html
<form v-my-prevent-back></form>
```

**`message` Example.**

```js
import VuePreventBack from 'vue-prevent-back'

Vue.use(VuePreventBack, {
    message: "Are you OKay?",
})
```

## Value

Key     |Type    |Default         |Description
--------|--------|----------------|-----
message |String  |install options's message |change confirm message.
tester  |Function|`() => true`|checking that form is changing.

**`message` Example.**

```html
<form v-prevent-back="'Are you Okay?'"></form>
<form v-prevent-back="{message: 'Are you Okay?'}"></form>
```

**`tester` Example.**

```html
<form v-prevent-back="{tester: () => !isChange)}">
  <CustomInput @change="isChange = true" />
</form>
```

```js
export default {
  data() {
    return {
      isChange: false,
    };
  },
};
```

## Modifier

Key     |Description
--------|-------------
vue-router-disable | not prevent, when vue router changes.
beforeunload-disable  | not prevent, when `beforeunload` event occured.
tester-only | using tester only. `vue-prevent-back` check all input's changing. if turn on this modifier, only check `tester` method.

### License

MIT