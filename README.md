# Installation
```shell
npm i bt-vue-button --save
```

# Getting Started
## Import component Globally
Inside main.js
```javascript
import Vue from 'vue'
import App from './App.vue'
import btVueButton from 'bt-vue-button'

Vue.use(btVueButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
```

Inside your component

```html
<btVueButtonTest></btVueButtonTest>
```

## Import component inside individual component
Inside HelloWorld.vue

```html
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
- **actionInProgress:** Sets if currently an action is in progress or not, default value is `false`.

# Events
`clicked` event is emitted to each time button is pressed.
`actionInProgress` event is emitted after btnFinalState visual representation process is completed.

# How to use events and props in Parent
- In parent component define 3 data values 

```javascript
data() {
        return {
            actionInProgress: null,
            isDisabled: null,
            finalState: null
        }
    }
```

- In parent template section add btVueButton template

```html
<btVueButton v-on:clicked="someAction()" 
            :actionInProgress.sync="actionInProgress" 
            :isDisabled="isDisabled" 
            :btnFinalState="finalState">
            <template #inProgress>
              <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            </template>
</btVueButton>
```

- Now define someAction methods

```javascript
methods: {
        someAction() {
            this.actionInProgress=true

            // some validation failure
            // setTimeout(()=>{
            //     this.actionInProgress=false    
            // }, 2000)

            // validation passed and some axios call made
            // if success result
            //this.finalState = 'success'

            // if success failed
            //this.finalState = 'failure'
        
        }
    }
```