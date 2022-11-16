<!-- src/components/List.vue -->
<template>
   <v-sheet class='sheet-dev'>
      <DListTable :tbl_headers="headers" :tbl_items="ditems" :tbl_card="tbl_card"/>  <!--:dedit_card="name_edit_card"-->
  </v-sheet>
</template>

<script>
//import Vue from 'vue';
import DListTable from '@/components/ListTable.vue'
import objApi from "@/services/demands.services.js";
export default {
  name: "dList9",
  components:{ DListTable},
  data() {
    return {
      ditems: [],
      tbl_card: "demandcard",
      headers: [
        { text: "Номер", align: "start", sortable: true, value: "demand_number" },
        { text: "Дата", value : "demand_date" },
        { text: "Время", value: "time", sortable: true },
        { text: "Телефон", value: "phone", sortable: true },
        { text: "Отуда", value: "from_adress", sortable: false },
        { text: "Куда", value : "to_address", sortable: false },
        { text: "Тип", value  : "type", sortable: true },
        { text: "Статус", value : "status", sortable: true },
        { text: "Источик", value: "source", sortable: true },
      ],
    };
  },
  methods: {
    retrievedconst() {
      objApi.getAll()
        .then((response) => {
           this.ditems = response.data;
//          this.ditems = response.data.map(this.getDisplaydconst);
        })
        .catch((e) => {
          console.log(e);
        });
    },

//    getDisplaydconst(objApi) {
//      return {
//        number      : objApi.demand_number,
//        date        : objApi.demand_date,
//        time        : objApi.demand_time,
//        type        : objApi.type,
//        status      : objApi.status,
//        source      : objApi.source
//      };
//    },
  },
  mounted() {
    this.retrievedconst();
  },
};
</script>
