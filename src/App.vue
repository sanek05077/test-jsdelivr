<template>
  <v-app>
    <v-main>
      <search-form/>
      <package-list/>
    </v-main>
    <footer-global/>
  </v-app>
</template>

<script>

import FooterGlobal from './layouts/FooterGlobal'
import SearchForm from './components/SearchForm'
import PackageList from './components/PackageList'
export default {
  name: 'App',

  components: {
    SearchForm,
    FooterGlobal,
    PackageList
  }
}
</script>
