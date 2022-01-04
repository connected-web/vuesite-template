import ErrorFormatter from './ErrorFormatter.vue'

export default {
  title: 'Formatting/ErrorFormatter',
  component: ErrorFormatter,
  argTypes: {
    error: { control: 'object', defaultValue: {} }
  }
}

const Wrapper = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ErrorFormatter },
  template: '<error-formatter :error="error"></error-formatter>',
  data: () => {
    return {}
  }
})

export const ErrorWithUrl = Wrapper.bind({})
ErrorWithUrl.args = {
  error: {
    config: {
      url: 'http://some.url'
    }
  }
}

export const ErrorWithMessage = Wrapper.bind({})
ErrorWithMessage.args = {
  error: {
    message: 'This error worked exactly as expected'
  }
}

export const EmptyError = Wrapper.bind({})
EmptyError.args = {}
