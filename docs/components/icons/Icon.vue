<template>
  <div class="icon wrapper">
    <font-awesome-icon :icon="icon" />
  </div>
</template>

<script>
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
Vue.config.productionTip = false

const Icon = {
  props: {
    icon: {
      type: String,
      default: 'user-secret'
    }
  }
}

Vue.component('Icon', Icon)

export default Icon
</script>

<style scoped>
.icon.wrapper {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  vertical-align: middle;
}
</style>
