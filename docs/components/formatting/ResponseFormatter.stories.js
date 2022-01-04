import ResponseFormatter from './ResponseFormatter.vue'

export default {
  title: 'Formatting/ResponseFormatter',
  component: ResponseFormatter,
  argTypes: {
    response: { control: 'object', defaultValue: {} }
  }
}

const Wrapper = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ResponseFormatter },
  template: '<response-formatter :response="response"></response-formatter>',
  data: () => {
    return {}
  }
})

export const ResponseWithData = Wrapper.bind({})
ResponseWithData.args = {
  response: {
    some: {
      data: 'exists'
    },
    message: 'needs formatting'
  }
}

export const ResponseWithEmptyData = Wrapper.bind({})
ResponseWithEmptyData.args = {
  response: {}
}

export const ResponseWithFalseyData = Wrapper.bind({})
ResponseWithFalseyData.args = {
  response: false
}

export const DefaultEmptyBehaviour = Wrapper.bind({})
DefaultEmptyBehaviour.args = {}
