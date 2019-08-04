import { shallowMount } from '@vue/test-utils'
import btVueButton from '../bt-vue-button.vue'
jest.useFakeTimers()
describe('Component bt-vue-button properties', () => {
  describe('Test properties with defaults', () => {
    let component
    beforeEach(() => {
      component = shallowMount(btVueButton).vm
    })
    it('Check properties type where default value is not null', () => {
      expect(typeof component.btnName).toBe('string')
      expect(typeof component.btnId).toBe('string')
      expect(typeof component.btnValue).toBe('string')
      expect(typeof component.btnDisabled).toBe('boolean')
      expect(typeof component.actionInProgress).toBe('boolean')
    })
    it('Check properties default values', () => {
      expect(component.btnName).toBe('btnVueButton-name')
      expect(component.btnId).toBe('btnVueButton-Id')
      expect(component.btnClass).toBe(null)
      expect(component.btnValue).toBe('Submit')
      expect(component.btnDisabled).toBe(false)
      expect(component.btnFinalState).toBe(null)
      expect(component.actionInProgress).toBe(false)
    })
  })
  describe('Test properties with passed prop values', () => {
    let component
    beforeEach(() => {
      component = shallowMount(btVueButton, {
        propsData: {
          btnName: 'testName',
          btnId: 'testId',
          btnClass: 'testClass',
          btnValue: 'testValue',
          btnDisabled: true,
          btnFinalState: 'success',
          actionInProgress: true
        }
      }).vm
    })
    it('Check properties type where default value is not null', () => {
      expect(typeof component.btnName).toBe('string')
      expect(typeof component.btnId).toBe('string')
      expect(typeof component.btnClass).toBe('string')
      expect(typeof component.btnValue).toBe('string')
      expect(typeof component.btnDisabled).toBe('boolean')
      expect(typeof component.actionInProgress).toBe('boolean')
    })
    it('Check properties default values', () => {
      expect(component.btnName).toBe('testName')
      expect(component.btnId).toBe('testId')
      expect(component.btnClass).toBe('testClass')
      expect(component.btnValue).toBe('testValue')
      expect(component.btnDisabled).toBe(true)
      expect(component.btnFinalState).toBe('success')
      expect(component.actionInProgress).toBe(true)

      expect(component.name).toBe('testName')
      expect(component.id).toBe('testId')
      expect(component.classes).toBe('testClass')
      expect(component.value).toBe('testValue')
      expect(component.disabled).toBe(true)
      expect(component.finalState).toBe('success')
      expect(component.inProgress).toBe(true)
    })
  })
})

describe('Component bt-vue-button methods & events triggered', () => {
  let component
  beforeEach(() => {
    component = shallowMount(btVueButton, {
      attachToDocument: true
    })
  })
  it('When button clicked  "clicked" and "update:actionInProgress" event is triggered.', () => {
    component.find({ ref: 'btVueButton' }).trigger('click')
    expect(component.emitted().clicked).toBeTruthy()
    expect(component.emitted().clicked.length).toBe(1)
    expect(component.vm.inProgress).toBe(true)
    expect(component.emitted()['update:actionInProgress']).toBeTruthy()
    expect(component.emitted()['update:actionInProgress'].length).toBe(1)
  })
})

describe('Component bt-vue-button watchers', () => {
  let component
  beforeEach(() => {
    component = shallowMount(btVueButton, {
      attachToDocument: true,
      propsData: {
        btnFinalstate: null
      }
    })
  })
  it('When btnFinalState, actionInProgress value is changed.', async () => {
    component.setProps({ actionInProgress: true })
    component.setProps({ btnFinalState: 'success' })
    component.vm.$nextTick(() => {
      jest.runOnlyPendingTimers()
      expect(component.emitted()['update:actionInProgress'].length).toBe(1)
      expect(component.emitted()['update:actionInProgress']).toBeTruthy()
      expect(component.vm.inProgress).toBe(false)
    })

    component.setProps({ btnFinalState: '' })
    component.vm.$nextTick(() => {
      jest.runOnlyPendingTimers()
      expect(component.emitted()['update:actionInProgress'].length).toBe(1)
      expect(component.emitted()['update:actionInProgress']).toBeTruthy()
      expect(component.vm.inProgress).toBe(false)
    })
  })
})
