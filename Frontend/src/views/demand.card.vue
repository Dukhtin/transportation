<template>
   <v-sheet class="sheet-dev overflow-y-auto">
    <v-row class="card-header">
      <v-btn class="ma-2 " icon @click="nosave"> 
        <v-icon large color="grey">mdi-arrow-left-thick</v-icon>
      </v-btn>
      <div class="ml-5">Заявка</div>
      <v-btn class="btn-dev" @click = "fsave" :disabled='isChange' > Save </v-btn>
    </v-row>

    <v-row class="demand-container">
      <v-card> 
        <v-text-field  dense ref="inputname" v-model='mdat.demand_number' label="Номер" disabled:false ></v-text-field>
      <v-row dense> 
        <v-text-field v-model='mdat.demand_date' type="date" label="Дата"></v-text-field>
        <v-text-field v-model='mdat.demand_time' type="time" label="Время"></v-text-field>
      </v-row> 
        <v-select v-model="mdat.type"  @change = "ftype" label="Тип" :items="stype" item-value="kod" item-text="name"/>
        <v-select v-model="mdat.status" label="Статус" :items="sstatus" item-value="kod" item-text="name"/>
        <v-select v-model="mdat.source"  class="pr-2" label="Источник" :items="ssource"  item-value="kod" item-text="name"/>
      </v-card>
      <v-card> 
        <v-row> 
            <v-icon>mdi-phone</v-icon>
            <v-text-field v-model='mdatAcc.phone' ></v-text-field>
        </v-row> 
          <v-text-field  v-model='mdatAcc.mail' label="email"></v-text-field>
        <v-text-field v-model='mdatAcc.name' label="Имя"></v-text-field>
        <v-btn class="btn-dev" @click="accountform">Accounts</v-btn>
      </v-card> 
    </v-row>
    <v-card>
        <v-text-field  v-model='mdat.from_adress' label="Откуда адрес"></v-text-field>
        <v-text-field  v-model='mdat.from_coordinates' label="Откуда координаты"></v-text-field>
        <v-text-field v-model='mdat.to_adress' label="Куда адрес"></v-text-field>
        <v-text-field v-model='mdat.to_coordinates' label="Куда координаты"></v-text-field>
    </v-card>
    <div v-if='tranfer'> Данные трансфера
    <v-text-field v-model='person' label="Количество пасажиров"></v-text-field>
    </div>
    <div v-if='cargo'> Данные грузоперевозки
    <v-text-field v-model='dcargo' label="Количество груза"></v-text-field>
    </div>
    <ConfirmDialog ref="modalConfirm"  @econfirm='ReturnForm($event)' :message='message'></ConfirmDialog>
    <AccountsDialog ref="modalAccouns"  @eaccount='selAccount($event)' /> <!--:message="ShowAccount"-->

  </v-sheet> 
</template>
<script>

import Vue from 'vue';
import demandApi from "@/services/demands.services.js";
import accApi from "@/services/accounts.services.js";
import parametersApi from "@/services/parameters.services.js";
import AccountsDialog from '@/components/Dialog/accounts.dialog.vue'
import rectable from '@/components/mixins/rectable.mixin.js';

export default Vue.extend({
  name: "demand_card",
  mixins: [rectable],
  props:['Objrow'],
  components: {
      AccountsDialog
  },
  data: () => ({
    tranfer :false,
    cargo   :false,
    isChange:false,
    message :"Данные были изменены, но не сохранены. Сохранить?",
    stype:[],
    sstatus:[],
    ssource:[],
    mdat: {
//      demand_number: "2",            // д.б. ф-ция орределяющая номер по заданному шаблону
//      demand_date: '2022-10-31',     // тек.дат.
//      demand_time: '',               // тек. время
    },
    mdatAcc:[]
  }),
  created(){
     // набираем значения связанных справочников  - перенести в  store  
    demandApi.getrec(this.Objrow.id)           // получаем все поля выбранной записи 
      .then((response) => {
        this.mdat    = response.data
       })
      .catch((e) => {
        console.log(e);
    });
    accApi.getrec(this.Objrow.accountid)     // связанная запись account 
        .then((response) => {
        this.mdatAcc = response.data
      })
      .catch((e) => {
        console.log(e);
      });

     // набираем значения связанных справочников  - перенести в  store  
    parametersApi.getlist(1)                 // типы     заявок
      .then((response) => { this.stype = response.data })
    parametersApi.getlist(2)                 // статус
      .then((response) => { this.sstatus = response.data })
    parametersApi.getlist(3)                 // источник     заявок
      .then((response) => { this.ssource = response.data })
    },
    methods: { 
    ftype()
    {
      if(this.mdat.type==="Трансфер") this.tranfer = true
      else this.tranfer = false
      if(this.mdat.type==="Грузовые перевозки") this.cargo = true
      else this.cargo   = false
    },
    accountform(){
     this.ShowAccount=true
     this.$refs.modalAccouns.show = true
    },
    selAccount(eitem){
      this.mdat.accountid = eitem.id;
      this.mdatAcc = eitem;
    },
    fsave() {
      if (this.mdat.id) // редактирование 
        demandApi.update(this.mdat.id, this.mdat)
      else // новая запись
      {
        console.log("новая запись")
        console.log(this.mdat)
        demandApi.create(this.mdat)
      }
      this.goback()
    },  
  },
  mounted() {
//    setTimeout(() => { 
//      console.log('response 2');
//      console.log(this.stype)
//    },1000);
//    this.$refs.inputname.focus()
//    this.$watch('mdat.type',() => { this.isChange = true})
  },
//  computed(){
//  } 
})
// @media (max-width: 1199px){ }
// @media (max-width: 991px){ }
// @media (max-width: 767px){ }
// @media (max-width: 575px){ }
</script>
<style scope >
.v-text-field{
  margin: 15px;
}
.demand-container {
  width: 100%;
  max-width: 932px;
  left: 10px;
  padding: 10px;
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
@media screen and (min-width: 1024px) {.demand-container {grid-template-columns: repeat(1, 1fr);}}
@media screen and (min-width: 1280px) {.demand-container {grid-template-columns: repeat(2, 1fr);}}
.v-select {
  margin-top: .1rem;
  margin-right: 2rem;
}
</style>
