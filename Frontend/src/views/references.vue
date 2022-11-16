<template>
   <v-sheet class="sheet-dev ml-10 mt-5">
    <v-card
      class="mt-50 ml-150px"
      max-width="300"
      tile
    >
      <v-list >
        <v-subheader>
          <h2>Справочники</h2>
        </v-subheader>
        <v-list-item-group
          v-model="selectedItem"
          color="rgb(143, 12, 12)"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-sheet>
</template>
<script>
import Vue from 'vue';
import omenu from "@/data/references.menu.js";

export default Vue.extend({
  name: "references_card",
  data: () => ({
  selectedItem: 0,
  items: omenu.items,
  }),
})
</script>
