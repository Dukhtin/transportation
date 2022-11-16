<template>
    <div v-if="show" class="modal-shadow">
        <div class="login-modal">
          <v-row >
          <v-card class="cardinfo" >
              <v-icon large >mdi-account-circle</v-icon>
              <v-card-title >Информация </v-card-title>
              <v-card-text> 
              Версия: 5<br>
              Сборка: 5.001<br>
              </v-card-text> 
          </v-card>
          <v-card class="cardlog">
            <v-col cols="12">
              <h3>Авторзация</h3>
              <v-text-field ref="login" v-model='inputLogin' label="Логин"></v-text-field>
              <v-text-field  v-model="inputpassword" label="Пароль"></v-text-field>
              <div class="mt-3">
              <v-btn  v-if="!alert"  @click="findlogin">Войти</v-btn>
              <v-btn  v-if="alert"   @click="falert">
                 Не найден Логин. Повторить? 
              </v-btn>
              </div>
            </v-col>
          </v-card>
          </v-row>
        </div>
      </div>
</template>
 
<script>
import Vue from 'vue';
import objApi from "@/services/login.services.js";
export default Vue.extend({
  name: "ModalLogin",
  data: function () {
      return {
          inputLogin   :'',
          inputpassword:'',
          show: true,
          alert:false
      }
  },
  methods: {
    findlogin: function () {
//              this.$store.dispatch('mtlogin');
    objApi.getuser(this.inputLogin,this.inputpassword)
      .then((response) => {
//        this.ditems = response.data.map(this.getDisplaydconst);
//      console.log(response.data);
      if(response.data.length > 0){
          this.$store.commit('mtlogin',this.inputLogin);
          this.$emit('logon');
          this.show = false
        }
        else{
          this.alert=true
        }
      })
     .catch((err) => {
//        console.log(err);
        console.log(err.response.data);
      });
    },
    falert: function(){
      this.alert = false
      this.$refs.login.focus()
    }  
  }
})
</script>
<style scoped
       lang="scss">
    .cardlog{
        background:white;
        height: 280px;
        width: 55%;
    }    
    .cardinfo{
        background:rgb(218, 199, 199);
        height: 280px;
        width: 45%;
    }
    .v-btn{
          left: 5px;
          padding: 5px;
          color:rgb(66, 53, 53)  
    }
    .login-modal {
        background: rgb(218, 199, 199);
        border-radius: 10px;
        padding: 20px;
        width: 600px;
        min-width: 350px;
        max-width: 750px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

</style>