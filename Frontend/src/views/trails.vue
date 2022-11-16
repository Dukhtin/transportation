<!-- src/components/List.vue -->
<template>
   <v-sheet class='sheet-dev'>
      <DListTable :tbl_headers="headers" :tbl_items="ditems" :tbl_card="tbl_card"/>
  </v-sheet>
</template>

<script>
//import Vue from 'vue';
import DListTable from '@/components/ListTable.vue'
import objApi from '@/services/trails.services.js'
export default {
  name: "dList10",
  components:{ DListTable},
  data() {
    return {
//      tbl_kod: "10",
      tbl_card: "trailcard",        //часть маршрута router 
//      isbig:false,
      ditems: [],
      headers: [
        { text: "Номер", align: "start", sortable: true, value: "trail_number" },
        { text: "Дата", value: "trail_date" },
        { text: "Авто", value: "brand", sortable: true },
        { text: "Гос.номер", value: "gnumber", sortable: false },
        { text: "Водитель", value: "fio", sortable: true },
      ],
    };
  },
  methods: {
    retrievedconst() {
      objApi.getdAll()
        .then((response) => {
          this.ditems = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrievedconst();
  },
};
</script>

<style lang="scss">
.ssbg6 
 {
    position: fixed; left :150px ;
    top: 30px; 
    width:100%; height:100%;
 }
</style>
