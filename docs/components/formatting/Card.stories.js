import Card from './Card.vue'

export default {
  title: 'Formatting/Card',
  component: Card,
  argTypes: {
    title: { control: 'text', defaultValue: '' },
    description: { control: 'text', defaultValue: '' }
  }
}

const Wrapper = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card },
  template: `
  <card :title="title">
    <p v-if="description">{{ description }}</p>
  </card>`,
  data: () => {
    return {}
  }
})

export const CardWithTitleAndDescription = Wrapper.bind({})
CardWithTitleAndDescription.args = {
  title: 'Card with Title and Description',
  description: 'Check that the card can render a title and a description.'
}

export const CardWithTitle = Wrapper.bind({})
CardWithTitle.args = {
  title: 'Card with Title'
}
export const CardWithDescription = Wrapper.bind({})
CardWithDescription.args = {
  description: 'Check that the card can render a description.'
}

export const CardWithEmptyParagraph = Wrapper.bind({})
CardWithEmptyParagraph.args = {
  description: ' '
}

export const EmptyCard = Wrapper.bind({})
EmptyCard.args = {}
