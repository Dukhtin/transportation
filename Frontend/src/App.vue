<template>
  <v-app class="sheet-dev">
    <LoginDialog ref="loginmodal"  @logon ='flogon' ></LoginDialog>
    <v-container v-if = "Inlog"> 
      <dToolbar/>
      <dMainMenu/>
      <router-view/>
    </v-container> 
  </v-app>
</template>
<script>
import Vue from 'vue';
import dToolbar  from '@/components/AppToolbar.vue'
import dMainMenu from '@/components/MainMenu.vue'
export default Vue.extend({
  name: 'dApp',
  components:{ dToolbar,dMainMenu },
  data:() => ({
     Inlog:false
  }),
  methods: { 
    flogon()
    {
      this.Inlog = true
    //  console.log("вход в систему") // 
    },  
  },
  mounted(){
//    console.log("create App.vue")
    this.$refs.loginmodal.show = true;
  }
}) 
</script>
