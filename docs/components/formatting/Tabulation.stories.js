import Card from './Card.vue'
import Tabulation from './Tabulation.vue'

const sampleData = [{
  fruit: 'apple',
  color: 'red'
}, {
  fruit: 'apple',
  color: 'green'
}, {
  fruit: 'apple',
  color: 'yellow'
}, {
  fruit: 'banana',
  color: 'red'
}, {
  fruit: 'banana',
  color: 'green'
}, {
  fruit: 'banana',
  color: 'yellow'
}, {
  fruit: 'orange',
  color: 'yellow'
}, {
  fruit: 'orange',
  color: 'green'
}, {
  fruit: 'orange',
  color: 'orange'
}, {
  fruit: 'orange',
  color: 'red'
}]

export default {
  title: 'Formatting/Tabulation',
  component: Card,
  argTypes: {
    columns: { control: 'array', defaultValue: [] },
    items: { control: 'array', defaultValue: [] },
    groupItems: { control: 'boolean', defaultValue: false }
  }
}

const Wrapper = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card, Tabulation },
  template: `
  <card :title="title">
    <p v-for="line in description">{{ line }}</p>
    <tabulation :items="items" :columns="columns" :groupItems="groupItems" />
    <card title="Sample Data">
      <pre>{{ { items } }}</pre>
    </card>
  </card>`,
  data: () => {
    return {}
  }
})

export const TabulationWithNoConfig = Wrapper.bind({})
TabulationWithNoConfig.args = {
  title: 'Tabulation using no groupings - just give it a list of objects',
  description: [
    'Check that the table is rendered with a list of fruits, and their associated colors.'
  ],
  items: sampleData
}

export const TabulationByFruitGrouped = Wrapper.bind({})
TabulationByFruitGrouped.args = {
  title: 'Tabulation using fruit as the row collector, and color as the column collector',
  description: [
    'Check that the table is rendered with fruit as the first column, followed by three columns of color.',
    'Because there are four entries that match fruit: orange; there should be an unmapped overflow value on the bottom row.'
  ],
  items: sampleData,
  columns: ['fruit', 'color', 'color', 'color'],
  groupItems: true
}

export const TabulationByColorGrouped = Wrapper.bind({})
TabulationByColorGrouped.args = {
  title: 'Tabulation using color as the row collector, and fruit as the column collector',
  description: [
    'Check that table is rendered with color as the first column, followed by three columns of fruit.',
    'As there is only one entry that matches color: orange; there should be missing two cells on the bottom row.'
  ],
  items: sampleData,
  columns: ['color', 'fruit', 'fruit', 'fruit'],
  groupItems: true
}
const CellWrapper = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card, Tabulation },
  template: `
  <card :title="title">
  <p v-for="line in description">{{ line }}</p>
    <tabulation :items="items" :columns="columns" :groupItems="groupItems">
      <template v-slot="{ cell, column }">{{ renderCell(cell, column) }}</template>
    </tabulation>
    <card title="Sample Data">
      <pre>{{ { items } }}</pre>
    </card>
  </card>`,
  data: () => {
    return {}
  },
  methods: {
    renderCell (cell, column) {
      const lookup = this.columns[column] || column
      if (lookup === 'score') {
        return cell.fruit && cell.color ? (cell.fruit.length * cell.color.length) : cell
      } else {
        return cell[lookup] || cell
      }
    }
  }
})

export const CellTemplateGrouped = CellWrapper.bind({})
CellTemplateGrouped.args = {
  title: 'Tabulation using a custom cell template to render additional information',
  description: ['Check that the table is rendered with fruit as the first column, using a custom cell template to render scores.'],
  items: sampleData,
  columns: ['fruit', 'score', 'score', 'score', 'color'],
  groupItems: true
}

export const CellTemplateUngrouped = CellWrapper.bind({})
CellTemplateUngrouped.args = {
  title: 'Tabulation using a custom cell template to render additional information',
  description: ['Check that the table is rendered with fruit as the first column, using a custom cell template.'],
  items: sampleData,
  columns: ['fruit', 'color', 'score'],
  groupItems: false
}

export const EmptyTabulation = Wrapper.bind({})
EmptyTabulation.args = {
  title: 'Empty Tabulation',
  description: ['Check that no table is rendered for no items.'],
  items: []
}
