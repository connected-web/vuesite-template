<template>
  <div class="paginated-items">
    <p v-if="showFilter">
      <label>Filter contains:</label>
      <input
        v-model="filter"
        type="text"
        @change="resetPageNumber()"
        @keydown="resetPageNumber()"
      >
      <span>Found {{ filteredItems(items).length }} items</span>
    </p>
    <div v-if="items && filteredItems(items).length > 0">
      <p>
        <span v-if="isPaginated(items)" class="pagination-top">
          <span>Page size: {{ pageSize }} items shown</span>
          <button @click="previousPage">&lt; Prev Page</button>
          <span>{{ pageNumber + 1 }} of {{ maxPages }}</span>
          <button @click="nextPage">Next Page &gt;</button>
        </span>
      </p>
      <slot :paginatedItems="paginatedItems">
        <pre>Please provide a template to render <b>paginatedItems</b></pre>
        <pre>{{ paginatedItems }}</pre>
      </slot>
      <span
        v-if="isPaginated(items)"
        class="pagination-bottom"
      >
        <span>End of page</span>
        <button @click="previousPage">&lt; Prev Page</button>
        <span>{{ pageNumber + 1 }} of {{ maxPages }}</span>
        <button @click="nextPage">Next Page &gt;</button>
      </span>
    </div>
    <div v-else>
      <p>No items found for filter ({{ filter }}).</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    },
    showFilter: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      filter: '',
      pageSize: 20,
      pageNumber: 0
    }
  },
  computed: {
    paginatedItems() {
      return this.displayedItems(this.items)
    },
    maxPages() {
      return Math.ceil(this.filteredItems(this.items).length / this.pageSize)
    }
  },
  methods: {
    displayedItems(items) {
      const startItem = this.pageNumber * this.pageSize
      const endItem = startItem + this.pageSize
      return this.filteredItems(items)
          .slice(startItem, endItem)
    },
    filteredItems(items) {
      const filterWord = (this.filter || '').toLowerCase()
      if (filterWord) {
        return items
          .filter(item => {
            return JSON.stringify(item).toLowerCase().includes(filterWord)
          })
      } 
      return items || []
    },
    isPaginated(items) {
      const pagedItems = this.filteredItems(items)
      return pagedItems.length > this.pageSize
    },
    resetPageNumber() {
      this.pageNumber = 0
    },
    nextPage() {
      this.gotoPage(this.pageNumber + 1)
    },
    previousPage() {
      this.gotoPage(this.pageNumber - 1)
    },
    gotoPage(number) {
      number = Math.max(0, number)
      number = Math.min(number, this.maxPages - 1)
      this.pageNumber = number
    }
  }
}

</script>

<style scoped>
pre {
  color: white;
}
.pagination-top {
  display: block;
  padding-bottom: 5px;
  border-bottom: 2px solid #eee;
}

.pagination-bottom {
  display: block;
  padding-top: 5px;
  border-top: 2px solid #eee;
}
</style>
