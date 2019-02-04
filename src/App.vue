<template>
  <main>
    <v-app>
      <v-content>
        <GuestNavigation/>
        <v-container class="mt-3 mb-3">
          <router-view/>
        </v-container>
        <FooterApp></FooterApp>
      </v-content>     
    </v-app>
  </main>
</template>

<script>
import  GuestNavigation  from "@/navigations/guest";
import FooterApp from '@/components/footer';
export default {
  components: {GuestNavigation,FooterApp},
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
