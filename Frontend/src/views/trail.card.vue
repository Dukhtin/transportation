<template>
   <v-sheet class="sheet-dev overflow-y-auto">
    <v-row class="card-header">
      <v-btn class="ma-2 " icon @click="nosave"> 
        <v-icon large color="grey">mdi-arrow-left-thick</v-icon>
      </v-btn>
      <div class="ml-5">Заказ (маршрут)</div>
      <v-btn class="btn-dev" @click = "fsave" :disabled='isChange' > Save </v-btn>
    </v-row>
    <v-row class="trail-container">
      <v-card>
        <v-text-field dense ref="inputname" v-model='mtrail.trail_number' label="Номер" disabled:false >   {{mtrail.trail_number}}</v-text-field>
      <v-row dense> 
        <v-text-field v-model='mtrail.trail_date' type="date" label="Дата"></v-text-field>
        <v-text-field v-model='mtrail.trail_time' type="time" label="Время"></v-text-field>
      </v-row> 
        <v-select v-model="mtrail.brand" label="Авто"/>
        <v-select v-model="mtrail.gnumber" label="Госномер"/>
        <v-select v-model="mtrail.fio" label="Водитель"/>
      </v-card>
      <v-card >  CAR
        <v-img :src='carimg' aspect-ratio="1.7" height="300px"></v-img>
      </v-card>
      <v-card>  DRIVER
          <v-img :src='driverimg' contain aspect-ratio="1.7" height="300px"></v-img>
      </v-card>
    </v-row>
    <div class="demcontainer">
    <v-col
      v-for="mdatdemand in mdatdemands"
      :key="mdatdemand.id"
      >
      <v-card > 
        <!--v-card-title v-text="mdatdemand.demand_number"></v-card-title-->
        <v-row> 
          <div class="phone-dev">
            <v-icon large >mdi-phone</v-icon>
            {{mdatdemand.phone}}
          </div>
          <div class="div-dev">
            <v-icon large >mdi-account-circle</v-icon>
            {{mdatdemand.name}}</div>
        </v-row> 
        <v-row>             <!--Откуда-->
          <div class="div-adr div-mp">
            <v-icon large >mdi-account-circle</v-icon>
            {{mdatdemand.from_adress}}</div>
          <div class="div-krd div-mp">{{mdatdemand.from_coordinates}}</div>
        </v-row> 
        <v-row>                   <!--Куда-->
          <div class="div-adr div-mp">
            <v-icon>mdi-account-circle</v-icon>
            {{mdatdemand.to_adress}}</div>
          <div class="div-krd div-mp">{{mdatdemand.to_coordinates}}</div>
        </v-row> 
      </v-card>
    </v-col>
    </div>
    <ConfirmDialog ref="modalConfirm"  @econfirm='ReturnForm($event)' :message='message'></ConfirmDialog>
  </v-sheet> 
</template>
<script>

import Vue from 'vue';
import trailApi from "@/services/trails.services.js";
import demandApi from "@/services/demands.services.js";

//import accApi from "@/services/accounts.services.js";
//import parametersApi from "@/services/parameters.services.js";
import rectable from '@/components/mixins/rectable.mixin.js';

export default Vue.extend({
  name: "trail_card",
  mixins: [rectable],
  props:['Objrow'],
//  components: {
//  },
  data: () => ({
    tranfer :false,
    cargo   :false,
    isChange:false,
    message :"Данные были изменены, но не сохранены. Сохранить?",
    stype:{},
    sstatus:{},
    ssourse:{},
    mtrail: {},
    mdatdemands:{},
    carimg:'',
    driverimg:''
  }),
  created(){
     // набираем значения связанных справочников  - перенести в  store  
//  parametersApi.getlist(1)                 // типы     заявок
//  .then((response) => { this.stype = response.data })
//  parametersApi.getlist(2)                 // статус
//  .then((response) => { this.sstatus = response.data })
//  parametersApi.getlist(3)                 // источник     заявок
//  .then((response) => { this.ssource = response.data })
      trailApi.getrec(this.Objrow.id)           // получаем все поля выбранной записи 
      .then((response) => {
        this.mtrail    = response.data
      })
      .catch((e) => {
        console.log(e);
      });
      demandApi.getDemandForTrail(this.Objrow.id)    // получаем записи заявок данного заказа
        .then((response) => {
          this.mdatdemands  = response.data
        })
        .catch((e) => {
          console.log(e);
        });
        this.carimg = require(`@/temp/img/cars/${this.Objrow.carsid}.png`)
        this.driverimg = require(`@/temp/img/drivers/${this.Objrow.driverid}.png`)

//    accApi.getrec(this.Objrow.accountid)     // связанная запись account 
//        .then((response) => {
//        this.mdatAcc = response.data
//      })
//      .catch((e) => {
//        console.log(e);
//      });
  },
  methods: { 
//    accountform(){
//     this.ShowAccount=true
//     this.$refs.modalAccouns.show = true
//    },
//    selAccount(eitem){
//      this.mdat.accountid = eitem.id;
//      this.mdatAcc = eitem;
//    },
    fsave() {
      if (this.mtrail.id) // редактирование 
        trailApi.update(this.mtrail.id, this.mtrail)
      else // новая запись
      {
        console.log("новая запись")
        console.log(this.mtrail)
        trailApi.create(this.mtrail)
      }
      this.goback()
    },
  },
  mounted() {
//    this.$refs.inputname.focus();
//    this.$refs.rcarimg.src=require(`@/temp/img/cars/${this.Objrow.carsid}.png`)
  },
//  computed: {
//  }
})
</script>
<style scope >
.trail-container {
  width: 100%;
  max-width: 932px;
  padding: 20px;
  margin: 150;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
@media screen and (min-width: 900px) {
  .trail-container {grid-template-columns: repeat(1, 1fr);}}
@media screen and (min-width: 1200px) {
  .trail-container {grid-template-columns: repeat(2, 1fr);}}
@media screen and (min-width: 1500px) {
  .trail-container {grid-template-columns: repeat(3, 1fr);}}

.demcontainer {
  width: 100%;
  max-width: 932px;
  padding: 10px;
  margin: 10;
  display: grid;
  grid-template-columns: repeat(2, fr); 
  gap: 5px;
}
@media screen and (min-width: 900px) {.demcontainer {grid-template-columns: repeat(1, 1fr);}}
@media screen and (min-width: 1200px) {.demcontainer {grid-template-columns: repeat(2, 1fr);}}
.v-select {
  margin-top: .1rem;
  margin-right: 2rem;
}
.div-mp {
  margin: 5px;
  padding: 5px;
  font-size: 1.1rem;
  background-color: rgb(230, 230, 230);
}
.div-adr {
  width: 65%;
}
.div-krd
{
  width: 30%;
}
</style>
