<template>
  <!--v-navigation-drawer
        value=true
        clipped    - расположение под панелью инструментов
        permanent  - нет ини варианта при любом разрешении экрана
        expand-on-hover - сворачивает элмент до наведения мыши
         -->
      <v-navigation-drawer
        app
        clipped
        :mini-variant="!drawer"
        mini-variant-width=56
        :width='MainMenuWidth'
        permanent
        expand-on-hover
        >
        <v-app-bar-nav-icon img="mdi-account-circle" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <!--v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Главное
            </v-list-item-title>
            <v-list-item-subtitle>
              меню
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item-->
  
        <v-divider></v-divider>
  
        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
             @click="dmetod_b(item.id,item.name)"
            link
          >
          <v-row >
            <v-list-item-icon >
            <v-icon :style={color:$store.getters.ficon_color}>{{ item.icon }}</v-icon>
            </v-list-item-icon>
              <v-list-item-content >
              <v-list-item-title >
               <h3>{{item.title}}</h3>
              </v-list-item-title>
              <!--router-link show='false' :to="item.id" v-text="item.title" ></router-link--> <!--декларатвый роутинг - отобр.ссылки-->
            </v-list-item-content>
          </v-row>
          </v-list-item>
        </v-list>
      </v-navigation-drawer> 
</template>
<script>
import Vue from 'vue';
import imainmenu from "@/data/main.menu.js";

export default Vue.extend({
  name: 'MainMenu',
  data: () => ({
    drawer: true,
    items: imainmenu.items,
    MainMenuWidth:150,

  }),
  methods: { 
    dmetod_b(kod,title){
    console.log("push main menu:"+kod)
    this.$dStore.list_name=title  
    this.$router.push({ path: "/"+kod})
    }
  }
})  
</script>

