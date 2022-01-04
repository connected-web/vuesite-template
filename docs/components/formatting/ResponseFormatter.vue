<template>
  <pre v-if="response">{{ formatJson(response) }}</pre>
</template>

<script>
export default {
  props: {
    response: {
      type: Object,
      default: () => { return {} }
    }
  },
  data() {
    return {}
  },
  methods: {
    formatJson(data) {
      return JSON.stringify(data, null, 2)
    }
  }
}
</script>
