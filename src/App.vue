<script>
import AppFooter from './components/AppFooter.vue'
import AppNavbar from './components/AppNavbar.vue'

import { store } from './data/store'

export default {
  components: {
    AppNavbar,
    AppFooter, AppNavbar, AppFooter
  },
  data() {
    return {
      store,
    }
  },
  methods: {

  },
  mounted() {

  },
}
</script>

<template>
  <div>
    <header>

      <AppNavbar></AppNavbar>

    </header>
    <main>
      <router-view>

      </router-view>
    </main>
    <footer>
      <AppFooter></AppFooter>
    </footer>
  </div>
</template>

<style scoped></style>
