import Card from './Card.vue'
import Icon from './Icon.vue'

export default {
  title: 'Formatting/Icon',
  component: Icon,
  argTypes: {
    title: { control: 'text', defaultValue: '' }
  }
}

const Wrapper = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card, Icon },
  template: `
  <card :title="title">
    <icon />
  </card>`,
  data: () => {
    return {}
  }
})

export const SimpleIconTest = Wrapper.bind({})
SimpleIconTest.args = {
  title: 'Test Icons'
}
