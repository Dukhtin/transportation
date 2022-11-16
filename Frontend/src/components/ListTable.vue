<template>
    <div >
    <v-app-bar :style={background:$store.getters.ftable_bar_color}>
      <h2> {{$dStore.list_name}} </h2>
      <v-btn class="ml-15 " icon  @click="fAddRow">
        <v-icon>mdi-plus-thick</v-icon> 
      </v-btn>
      <v-btn class="ml-15" icon color="black" @click="toggleModal">
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <v-btn class="ml-16 px-105" 
        v-on:click="freport"
        :disabled="!selected.length"
        icon 
      >
        <v-icon >mdi-printer</v-icon>
      </v-btn>      
      <template v-if="selected.length">
        отмечено: {{ selected.length }}
      </template>
      <v-card  tile class="ml-16" :style={background:$store.getters.ftable_bar_color}>
       <v-text-field 
         v-model="search"
         append-icon="mdi-magnify"
         label="Search"
         single-line
         hide-details
       ></v-text-field>
      </v-card>
      <template>{{it_name}} </template>
      </v-app-bar > 
      <v-data-table
        v-model="selected"
       :single-select="singleSelect"
        show-select
       :headers="tbl_headers"
       :items="tbl_items"
       :items-per-page="10"
       :search="search"
       :sort-by="['demand_date','demand_number']"
       :sort-desc="[false, true]"
        @click:row="editItem"
        @item-selected="itemselected"
        :footer-props="{
        showFirstLastPage: true,
        firstIcon: 'mdi-arrow-collapse-left',
        prevIcon: 'mdi-chevron-left',
        nextIcon: 'mdi-chevron-right'
      }"
      >                              :sort-desc="[false, true]"         <!--1 поле из sort-by false по возрастанию, 2 по убываю -->
      </v-data-table>
    </div>
</template>
<script>
//import modal_account from '@/views/modal/modal_account.vue'
import Vue from 'vue';

export default Vue.extend({
  name: 'dTopMenu',
  props: [
    'tbl_headers',
    'tbl_items',
    'tbl_card'
  ],
//  components: {
//    modal_account
//  },
  data: () => ({
//  dcolorTable: 'rgb(218, 199, 199)',  //'rgb(218, 199, 199)',
  selected: [],
  item:[],
  isShowModal:false,  
  modal_account:true,
  inStock:false,
  singleSelect: false,
  search: '',
  it_name:'',
  dname   :'ЛистТ',
  path_tbl_card:''
//path_tbl_card :"/"+this.tbl_card

}),
  methods: { 
    fAddRow() {
      console.log("Add row ")
//      console.log(this.$store.getters.fcount)
      this.$router.push({name:this.tbl_card, path:this.path_tbl_card ,params:{Objrow:this.item }})
    },
    toggleModal() {
      this.isShowModal = true
    },
    editItem(item) {
      let path_tbl_card = "/"+this.tbl_card

      this.$router.push({name:this.tbl_card, path:path_tbl_card ,params:{Objrow:item }})
//      this.$router.push({name:'Card9', path:'/Cd9' ,params:{id:this.tbl_kod,cardname:this.dname,Objrow:item }})
    },
    itemselected()           // событие на  выбор
    {
      console.log(this.selected)
//      console.log(this.selected.length)
    },  
    freport()
    {
      console.log("rep")
    }  
  },
})  
</script>
