import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import loginStore from '@/store/login.store.js';
import cssStore from '@/store/css.store.js';

export default new Vuex.Store({
  state: {
    loginStore,
    cssStore,
    count: 0,
    count_color: 'blue',
    //        mstore: [
    //            { id: 1, mvalue: 'Массив 1', finished: false },
    //            { id: 2, mvalue: 'Массив 2', finished: true }
    //        ]
  },
  getters: {
    // возвращаем список c finished: true
    //        fmstore: state => {
    //            return state.mstore.filter(mstore => mstore.finished);
    //        },
    flogin: state => {
      return state.loginStore;
    },
    ftable_bar_color: state => {
      return state.cssStore.table_bar_color;
    },
    ficon_color: state => {
      return state.cssStore.icon_color;
    },
    //    fstate: state => {
    //      return state;
    //},
    fcount: state => {
      return state.count;
    },
    //        getuser: state => {                       // getters заvенен на mapState
    //            return state.loginStore.username;
    //        },
    //        getemail: state => {
    //            return state.loginStore.email;
    //        }
  },
  mutations: {
    mtlogin(state, nusername) {
      state.loginStore.username = nusername;
    },
    increment(state) {
      state.count++;
      state.count_color = 'red';
    },
    decrement(state) {
      if (state.count > 0) state.count--;
      if (state.count === 0) state.count_color = 'blue';
    }
  },
  actions: {
    mtlogin: ({ commit }) => commit('mtlogin'),
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    //    incrementIfOdd: ({ commit, getters }) => getters.parity === 'odd' ? commit('increment') : false,
    //    incrementAsync: ({ commit }) => {
    //      setTimeout(() => { commit('increment') }, 1000);
    //    },
    //    incrementAsync2: ({ commit }) => {
    //      setTimeout(() => { commit('increment2') }, 1000);
    //    }
  }
});