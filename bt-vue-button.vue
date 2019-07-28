<script>
export default {
    name: 'bt-vue-button',
    props: {
        btnName: {
            type: String,
            default: 'btnVueButton-name'
        },
        btnId: {
            type: String,
            default: 'btnVueButton-Id'
        },
        btnClass: {
            type: String,
            default: null
        },
        btnValue: {
            type: String,
            default: 'Submit'
        },
        btnDisabled: {
            type: Boolean,
            default: false
        },
        btnFinalState: {
            type: String,
            default: null,
            validator: function (value) {
                // The value must match one of these strings
                return ['success', 'failure', ''].indexOf(value) !== -1
            }
        },
        actionInProgress: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            name: this.btnName,
            id: this.btnId,
            classes: this.btnClass,
            value: this.btnValue,
            disabled: this.btnDisabled,
            finalState: this.btnFinalState,
            inProgress: this.actionInProgress
        }
    },
    watch: {
        btnFinalState(newValue) {
            const finalStateClass = newValue && newValue.toLowerCase() === 'success' ? 'btn-success' : newValue && newValue.toLowerCase() === 'failure' ? 'btn-warning' : null
            if(finalStateClass){
                this.$refs.btVueButton.classList.add(finalStateClass)
                setTimeout(() => {
                    this.updateActionInProgress(false)
                    this.$refs.btVueButton.classList.remove(finalStateClass)
                }, 2000);
            }
        },
        actionInProgress() {
            this.inProgress = this.actionInProgress
        }
    },
    methods: {
        clickAction() {
            this.updateActionInProgress(true)
            this.$emit('clicked')
        },
        updateActionInProgress (status) {
            this.inProgress = status
            this.$emit('update:actionInProgress', this.inProgress)
        }
    },
}
</script>
<template>
        <button
        ref="btVueButton"
        :name="name" 
        :id="id" 
        :class="classes" 
        :value="value"
        :disabled="disabled || inProgress" 
        @click="clickAction">
            <slot name='inProgress' v-if="inProgress">
                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true">Original Slot</span>
            </slot>
            {{value}}
        </button>
</template>