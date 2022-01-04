import Card from './Card.vue'
import Expiry from './Expiry.vue'

export default {
  title: 'Formatting/Expiry',
  component: Expiry,
  argTypes: {
    title: { control: 'text', defaultValue: '' },
    description: { control: 'text', defaultValue: '' },
    date: { control: 'Date', defaultValue: false },
    context: { control: 'Date', defaultValue: false }
  }
}

const Wrapper = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card, Expiry },
  template: `
  <card :title="title">
    <p v-if="description">{{ description }}</p>
    <p><expiry :date="date" :context="context" /></p>
  </card>`,
  data: () => {
    return {}
  }
})

export const ExpiringNow = Wrapper.bind({})
ExpiringNow.args = {
  title: 'Expiring Now',
  description: 'Check that something expiring now is presented as something that is happening now.',
  date: new Date(),
  context: new Date()
}

export const ExpiredYesterday = Wrapper.bind({})
ExpiredYesterday.args = {
  title: 'Expired Yesterday',
  description: 'Check that something that expired yeterday is presented as something that expired in the past.',
  date: new Date(Date.parse('Sun, 16 Feb 2017 23:08:56 GMT')),
  context: new Date(Date.parse('Sun, 17 Feb 2017 23:08:56 GMT'))
}

export const ExpiresTomorrow = Wrapper.bind({})
ExpiresTomorrow.args = {
  title: 'Expires Tomorrow',
  description: 'Check that something that expires tomorrow is presented as something that expires in the future.',
  date: new Date(Date.parse('Sun, 18 Feb 2017 23:08:56 GMT')),
  context: new Date(Date.parse('Sun, 17 Feb 2017 23:08:56 GMT'))
}

export const ExpiresThisWeek = Wrapper.bind({})
ExpiresThisWeek.args = {
  title: 'Expires This Week',
  description: 'Check that something that expires this week is presented as something that expires in the future.',
  date: new Date(Date.parse('Sun, 23 Feb 2017 23:08:56 GMT')),
  context: new Date(Date.parse('Sun, 17 Feb 2017 23:08:56 GMT'))
}

export const ExpiredLastWeek = Wrapper.bind({})
ExpiredLastWeek.args = {
  title: 'Expired Last Week',
  description: 'Check that something that expired last week is presented as something that expired in the past.',
  date: new Date(Date.parse('Sun, 13 Feb 2017 23:08:56 GMT')),
  context: new Date(Date.parse('Sun, 17 Feb 2017 23:08:56 GMT'))
}

export const ExpiresThisMonth = Wrapper.bind({})
ExpiresThisMonth.args = {
  title: 'Expires This Month',
  description: 'Check that something that expires this month is presented as something that expires in the future.',
  date: new Date(Date.parse('Sun, 23 Mar 2017 23:08:56 GMT')),
  context: new Date(Date.parse('Sun, 17 Feb 2017 23:08:56 GMT'))
}

export const ExpiredLastMonth = Wrapper.bind({})
ExpiredLastMonth.args = {
  title: 'Expired Last Month',
  description: 'Check that something that expired last month is presented as something that expired in the past.',
  date: new Date(Date.parse('Sun, 23 Jan 2017 23:08:56 GMT')),
  context: new Date(Date.parse('Sun, 17 Feb 2017 23:08:56 GMT'))
}

export const ExpiresThisYear = Wrapper.bind({})
ExpiresThisYear.args = {
  title: 'Expires This Year',
  description: 'Check that something that expires this year is presented as something that expires in the future.',
  date: new Date(Date.parse('Sun, 23 Jan 2018 23:08:56 GMT')),
  context: new Date(Date.parse('Sun, 17 Feb 2017 23:08:56 GMT'))
}

export const ExpiredLastYear = Wrapper.bind({})
ExpiredLastYear.args = {
  title: 'Expired Last Year',
  description: 'Check that something that expired last year is presented as something that expired in the past.',
  date: new Date(Date.parse('Sun, 23 Mar 2016 23:08:56 GMT')),
  context: new Date(Date.parse('Sun, 17 Feb 2017 23:08:56 GMT'))
}

export const ExpiresInTwoYears = Wrapper.bind({})
ExpiresInTwoYears.args = {
  title: 'Expires in Two Years',
  description: 'Check that something that expires in two years is presented as something that expires in the future.',
  date: new Date(Date.parse('Sun, 23 Apr 2019 23:08:56 GMT')),
  context: new Date(Date.parse('Sun, 17 Feb 2017 23:08:56 GMT'))
}

export const EmptyExpiring = Wrapper.bind({})
EmptyExpiring.args = {}
