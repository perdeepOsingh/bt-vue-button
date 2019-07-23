# Installation
`npm i bt-vue-button --save`

# Getting Started
## Import Component Globally
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

## Import Component inside individual component
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