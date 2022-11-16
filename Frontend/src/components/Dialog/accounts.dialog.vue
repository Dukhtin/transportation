<template>
    <div v-if="show" class="modal-shadow" @click.self="closeModal">
        <div class="modal">
          <v-row class="ssMenuSelTbl">
          <v-btn icon large class="ml-3" @click="closeModal">&#10006;</v-btn> 
          <v-spacer></v-spacer>
          <v-text-field class="ml-10 mb-2 ssMenuSelTbl"
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            width="60%" 
          ></v-text-field>
          </v-row > 
        <SelTable class="mt-4" @eseltable ='ReturAccount($event)' :tbl_headers="headers" :tbl_items="ditems" :search="search"/> 
        </div>
  </div>
</template>
 
<script>
import Vue from 'vue';
import SelTable from './SelTable.vue'
import objApi from "@/services/accounts.services.js";

export default Vue.extend({
  name: "AccountsDialog",
//        props: [
//         'message',
//        ],
  components:{ SelTable},        
  data: function () {
      return {
        show: false,
        ditems: [],
        search: '',
        headers: [
          { text: "Телефон",align: "start", value : "phone" },
          { text: "Имя",  value: "name", sortable: true },
          { text: "mail", value: "mail"},
        ],
    }
  },
  created(){
    this.pullList();
  },
  methods: {
    pullList() {
      objApi.getAll()
        .then((response) => {
           this.ditems = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    ReturAccount(eitem) {
//      console.log("Да")
      this.$emit('eaccount',eitem);
      this.show = false
    },
    closeModal: function () {
//      console.log("Нет") 
      this.show = false
    },
  },
})
</script>
<style scoped
       lang="scss">

.ssMenuSelTbl{
  background: rgb(241, 231, 227);
}
</style>