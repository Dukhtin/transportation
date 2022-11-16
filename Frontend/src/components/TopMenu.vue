<template>
  <div>
    <v-btn icon color="white" @click="toggleModal">
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
    <v-dialog  v-model='isShowModal' width="500px" >
      <v-card length="500px">
      <v-card-title class="headline grey lighten-2" primary-title>Инфорация </v-card-title>
      <v-card-text> 
        Пользователь: {{loginStore.username}}<br>
        Email       : {{loginStore.email}} <br>
        тек дата    : {{loginStore.curdate}} <br>
        Немного текста<br>
        <p> И еще немного</p>
      </v-card-text>
        <v-card-actions>
          <v-btn color="grey" @click.stop="isShowModal=false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>


</template>
<script>
import { mapState } from 'vuex';

export default ({
  name: 'dTopMenu',
  data: () => ({
  isShowModal:false,  
  modal_account:true,
  duser:''
}),
  methods: { 
    toggleModal() {
      this.isShowModal = true
    }  
  },
  computed:{
    ...mapState(['loginStore'])
  }              
})  
</script>
 <style scoped
       lang="scss">
</style>