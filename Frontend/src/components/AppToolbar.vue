<template>
  <div >
    <v-card >
      <v-app-bar :style={background:dcolor} dense app clipped-left clipped-right>  <!-- цвет изменяется переменной-->
        <!--v-app-bar-nav-icon ></v-app-bar-nav-icon-->
        <v-toolbar-title :class="$style.ssmn1">Проект</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon :style={color:$store.getters.ftable_bar_color} >mdi-car</v-icon>
        </v-btn>
          <div :style={color:$store.getters.ftable_bar_color}>{{$store.getters.fcount}}</div>
        <dTopMenu/>
        <v-menu
          left
          bottom
        >
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="item in items"
              :key="item.title"
               link
               @click="dmetod_o(item.id)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </v-card>
  </div>
</template>
<script>
import Vue from 'vue';
import dTopMenu from '@/components/TopMenu.vue'
export default Vue.extend({
  name: 'dAppToolbar',
  components:{ dTopMenu },
  data: () => ({
    n_app_bar: 'Приложение',
    dcolor:'grey',
    shop_color:'red',
    dStuleMenu:'ssmn',
    items: [
      {
      id: '1',            
        title: 'Опция 1',
      },
      {
        id: '2',
        title: 'Опця 2',
      },
      {
        id: '3',
        title: 'Опция 3',
      }
    ] 
}),
  methods: { 
  dmetod_o:function(_id) {
    switch(_id) {
      case '1': this.dcolor= 'grey';break;
      case '2': this.dcolor= 'aqua';break;  
      case '3': this.dcolor= 'red'  
    }
    console.log(_id)
  },
//  computed:{
//  }  
  }
})
</script>
<style module>
.ssmn {
  color:red
}
.ssmn1 {
  color:white
}
</style>
