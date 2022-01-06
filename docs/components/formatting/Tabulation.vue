<template>
  <table
    v-if="rows.length"
    class="tabulation"
  >
    <thead>
      <tr>
        <th
          v-for="(columnHeading, i) in columnHeadings"
          :key="`colHeading-${columnHeading}-${i}`"
          :class="columnHeadingClass(columnHeading, i)"
          @click="sortByColumnEvent(columnHeading, i)"
        >
          <div>
            <label>{{ columnHeading }}</label>
            <icon :icon="columnIcon(columnHeading)" />
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(rowItem, j) in sortedRows"
        :key="`row-${j}`"
      >
        <td
          v-for="(cell, column) in rowItem"
          :key="`cell-${column}`"
        >
          <slot
            :cell="cell"
            :column="column"
            :columnKey="columnKey(column)"
          >
            {{ contentsOf(cell, column) }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
function removeArrayListeners(data) {
  return JSON.parse(JSON.stringify(data))
}

export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    groupItems: {
      type: Boolean,
      default: false
    },
    sortedColumn: {
      type: String,
      default: ''
    },
    sortAscending: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      internalSortedColumn: '',
      internalSortAscending: true
    }
  },
  computed: {
    firstHeading() {
      return this.items[0]
    },
    columnHeadings() {
      return this.columnKeys.map(n => n.label || n)
    },
    columnKeys() {
      const columns = (this.columns && this.columns.length) ? this.columns : false
      return (columns || this.listAllProperties).map(n => n.key || n)
    },
    groupedRows() {
      const index = this.items.reduce((acc, item) => {
        const lookup = item[this.row]
        const entry = acc[lookup] || []
        entry.push(item)
        acc[lookup] = entry
        return acc
      }, {})
      const result = Object.entries(index).map(([key, values]) => {
        const x = values.map(n => n)
        return [].concat([key], ...x)
      })
      return result
    },
    listAllProperties() {
      const index = this.items.reduce((acc, item) => {
        acc = Object.assign(acc, Object.keys(item))
        return acc
      }, {})
      return Object.values(index)
    },
    plainRows() {
      return this.items.map(item => {
        return this.columnKeys.map(() => item)
      })
    },
    row() {
      return (this.columnKeys)[0]
    },
    rows() {
      return (this.groupItems) ? this.groupedRows : this.plainRows
    },
    computedSortedColumn() {
      return this.sortedColumn || this.internalSortedColumn
    },
    computedSortAscending() {
      return this.sortedColumn ? this.sortAscending : this.internalSortAscending
    },
    sortedRows() {
      const { rows, sortedColumn, internalSortedColumn, internalSortAscending } = this
      const dataPreSorted = sortedColumn ? true : false
      if (dataPreSorted) {
        return rows
      }
      if (!Array.isArray(rows)) {
        return []
      }
      const col = internalSortedColumn
      const asc = internalSortAscending
      const clonedRows = removeArrayListeners(rows)
      if (col) {
        clonedRows.sort((a, b) => {
          const ca = a[0][col]
          const cb = b[0][col]
          if (typeof ca === 'number' && typeof cb === 'number') {
            const result = ca - cb > 0 ? 1 : -1
            return asc ? result * -1 : result
          } else {
            const sa = ca + ''
            const sb = cb + ''
            return asc ? sb.localeCompare(sa) : sa.localeCompare(sb + '')
          }
        })
      }
      return clonedRows
    }
  },
  methods: {
    columnHeadingClass(columnHeading) {
      return columnHeading === this.computedSortedColumn ? 'sorted' : 'unsorted'
    },
    columnIcon(columnHeading) {
      const direction = this.computedSortAscending ? 'sort-amount-up' : 'sort-amount-down'
      return this.computedSortedColumn === columnHeading ? direction : 'sort'
    },
    contentsOf(cell, column) {
      const columnKey = this.columnKeys[column] || column
      return cell[columnKey] || ''
    },
    columnKey(column) {
      return this.columnKeys[column] || column
    },
    sortByColumnEvent(columnHeading) {
      const same = columnHeading === this.computedSortedColumn
      this.sortedHeading = columnHeading
      this.internalSortedColumn = columnHeading
      this.internalSortAscending = same ? !this.internalSortAscending : true
      this.$emit('sortByColumn', {
        columnHeading,
        sortAscending: same ? !this.computedSortAscending : true
      })
    }
  }
}
</script>

<style scoped>
table.tabulation {
  /* border: 2px solid #DDD; */
  margin: 1em 0;
  display: table;
  width: 100%;
}
th {
  outline: 2px solid #FFF;
  background: #EEE;
  padding: 5px;
  user-select: none;
}
th > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
th > div > .icon.wrapper {
  width: 1em;
  height: 1em;
  color: #CCC;
  margin-left: 0.5em;
}
th:hover {
  background: #DDD;
}
th.sorted > div > .icon.wrapper {
  color: #333;
}
td {
  outline: 2px solid #FFF;
  padding: 5px;
}
tr:nth-child(odd) { background: #FAFAFA }
tr:nth-child(even) { background: #F0F0F0 }
</style>
