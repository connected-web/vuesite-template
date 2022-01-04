import Card from './Card.vue'
import Collapsed from './Collapsed.vue'

export default {
  title: 'Formatting/Collapsed',
  component: Collapsed,
  argTypes: {
    title: { control: 'text', defaultValue: '' },
    description: { control: 'text', defaultValue: '' },
    collapsedTitle: { control: 'text', defaultValue: '' },
    collapsedContent: { control: 'text', defaultValue: '' }
  }
}

const Wrapper = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card, Collapsed },
  template: `
  <card :title="title">
    <p v-if="description">{{ description }}</p>
    <collapsed :title="collapsedTitle">
      <p v-if="collapsedContent">{{ collapsedContent }}</p>
    </collapsed>
  </card>`,
  data: () => {
    return {}
  }
})

export const CollapsedWithTitle = Wrapper.bind({})
CollapsedWithTitle.args = {
  title: 'Collapsed with Title',
  description: 'A collapsed section with a title, and hidden content that can be revealed.',
  collapsedTitle: 'Collapsable Section',
  collapsedContent: 'Hidden content which can be revealed.'
}
export const CollapsedWithNoContent = Wrapper.bind({})
CollapsedWithNoContent.args = {
  title: 'Collapsed with No Content',
  description: 'A collapsed section with a title, but with no content, because it was ommitted',
  collapsedTitle: 'Collapsable Section with No Content'
}

export const EmptyCollapsed = Wrapper.bind({})
EmptyCollapsed.args = {}
