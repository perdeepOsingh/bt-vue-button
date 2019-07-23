# Installation
`npm i bt-vue-button --save`

# Getting Started
## Import component Globally
Inside main.js
```
import Vue from 'vue'
import App from './App.vue'
import btVueButton from 'bt-vue-button'

Vue.use(btVueButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
```

Inside your component

`<btVueButtonTest></btVueButtonTest>`

## Import component inside individual component
Inside HelloWorld.vue

```
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <btVueButtonTest></btVueButtonTest>
  </div>
</template>

<script>
import btVueButton from 'bt-vue-button'
export default {
  name: 'HelloWorld',
  components: { btVueButton },
  props: {
    msg: String
  }
}
</script>

<style scoped>
</style>
```

# Props
- **btnName:**  Sets name (*String*) of the button, default value is `btnVueButton-name`.
- **btnId:** Sets id (*String*) of the button, default value is `btnVueButton-Id`.
- **btnClass:** Sets classe/s (*String*) for button, default value is `null`.
- **btnValue:** Sets value (*String*) from button, default value is `Submit`.
- **btnDisabled:** Sets button as disabled (*Boolean*), default value is `false`.
- **btnFinalState:** Sets final state (*String*) of button after button is pressed, default value is `null`. Allowed values are `success, failure or ''`

# Events
`clicked` event is emitted to each time button is pressed.