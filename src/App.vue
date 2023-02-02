<template>
  <v-app >
    <Topbar @drawerEvent="drawer = !drawer" class=""/>
    <v-container class="py-8 px-6" fluid>
      <router-view></router-view>
    </v-container>
    
  </v-app>
</template>

<script>
import Topbar from './components/template/TopBar.vue';


export default {
  name: 'App',

  components: {
    Topbar
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>

::-moz-selection{
  background-color : #027C69;
  color : #fff
}
::selection{
  background-color : #027C69;
  color : #fff
}
</style>
