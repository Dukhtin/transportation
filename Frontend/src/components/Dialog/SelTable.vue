<template>
    <div>
      <v-data-table
       :headers="tbl_headers"
       :items="tbl_items"
       :items-per-page="15"
        class="elevation-1"
       :search="search"
        @click:row="itemelected"
      >
      </v-data-table>
    </div>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  props: [
    'tbl_headers',
    'tbl_items',
    'search',
  ],
  data: () => ({
  }),
  methods: { 
    itemelected(item) 
    {
      this.$emit('eseltable',item);
    },  
  },
})  
</script>
