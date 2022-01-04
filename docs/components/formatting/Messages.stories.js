import Card from './Card.vue'
import Messages from './Messages.vue'

export default {
  title: 'Formatting/Messages',
  component: Messages,
  argTypes: {
    title: { control: 'text', defaultValue: '' },
    additionalContent: { control: 'text', defaultValue: '' }
  }
}

const Wrapper = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card, Messages },
  template: `
  <card :title="title">
    <messages :messages="messages">
      <p v-if="additionalContent">{{ additionalContent }}</p>
    </messages>
  </card>`,
  data: () => {
    return {}
  }
})

export const SimpeStringMessage = Wrapper.bind({})
SimpeStringMessage.args = {
  title: 'Simple String Message',
  messages: ['Simple string message in array']
}

export const MultiLineStringMessages = Wrapper.bind({})
MultiLineStringMessages.args = {
  title: 'Multi Line String Message',
  messages: ['Simple string message in array', 'Second line of messages', 'Third line of messages']
}

export const MessagesWithAdditionalContent = Wrapper.bind({})
MessagesWithAdditionalContent.args = {
  title: 'Messages with Additional Content',
  messages: ['Simple string message in array', 'Second line of messages', 'Third line of messages - additional content should show below here'],
  additionalContent: '>>> Optional additional content to be rendered after messages <<<'
}

export const EmptyStringAsMessage = Wrapper.bind({})
EmptyStringAsMessage.args = {
  title: 'Empty String Message',
  messages: [' ']
}

export const EmptyMessages = Wrapper.bind({})
EmptyMessages.args = {
  title: 'No Messages'
}
