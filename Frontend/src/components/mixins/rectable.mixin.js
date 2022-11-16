import Vue from 'vue';

export default Vue.extend({
  methods: {
    // при попытке выйти из card без сохранения при измененных данных 
    goback() {
      const currentRoute = this.$route.path;
      const toRoute = currentRoute.substr(0, currentRoute.lastIndexOf('/'));
      this.$router.push({ path: toRoute });
    },
    nosave() {
      if (this.isChange) { // даные изменены - предупреждаем перед выходом
        console.log("data change");
        this.$refs.modalConfirm.show = true
      } else {
        console.log("data no change");
        this.goback()
      }
    },
    ReturnForm(value) {
      if (value)
        this.$refs.inputname.focus();
      else
        this.goback()

    }
  }
})