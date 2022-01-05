<template>
  <card :title="title">
    <remote-data-source :data-source-url="dataSourceUrl">
      <template #default="{ response }">
        <pre language="json">{{ response.data }}</pre>
      </template>
    </remote-data-source>
  </card>
</template>

<script>
import Card from "./Card.vue"
import RemoteDataSource from "../networking/RemoteDataSource.vue"

export default {
  components: { Card, RemoteDataSource },
  props: {
    title: {
      type: String,
      default: ''
    },
    dataSourceUrl: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
pre {
  color: white;
  max-height: 500px;
  overflow-y: auto;
}
</style>
