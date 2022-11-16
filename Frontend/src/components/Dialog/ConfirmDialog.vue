<template>
    <div v-if="show" class="modal-shadow" @click.self="closeModal">
        <div class="conf-modal">
            <div class="conf-modal-close" @click="closeModal">&#10006;</div>   <!-- @click = "$ emit ('close')"-->
            <slot name="title">
                <h3 class="conf-modal-title">Внимание</h3>
            </slot>
            <slot name="body">
                <div class="conf-modal-content">{{message}}
                </div>
            </slot>
            <slot name="footer">
                <div class="conf-modal-footer">
                    <v-btn  @click="closeModal">Нет</v-btn>
                    <v-btn  @click="confirmModal">Да</v-btn>
                </div>
            </slot>
        </div>
    </div>
</template>
 
<script>
import Vue from 'vue';
    export default Vue.extend({
        name: "ModalWindow",
        props: [
         'message',
        ],
        data: function () {
            return {
                show: false
            }
        },
        methods: {
            closeModal: function () {
//              console.log("Нет") 
              this.$emit('econfirm',false);
              this.show = false
            },
            confirmModal: function () {
//              console.log("Да") 
              this.$emit('econfirm',true);
              this.show = false
            }
        }
    })
</script>
<style scoped
       lang="scss">
     .v-btn{
          left: 30px;
          padding: 20px;
          color:#2a4cc7  
        }
     .conf-modal {
        background: #fff;
        border-radius: 8px;
        padding: 15px;
        min-width: 420px;
        max-width: 580px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        &-close {
            border-radius: 50%;
            color: #fff;
            background: #2a4cc7;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 7px;
            right: 7px;
            width: 30px;
            height: 30px;
            cursor: pointer;
        }
 
        &-title {
            color: #1c3a53;
        }
 
        &-content {
            margin-bottom: 20px
        }
 
        &-footer {
            &__button {
                background-color: #0971c7;
                color: #fff;
                border: none;
                text-align: center;
                padding: 8px;
                font-size: 17px;
                font-weight: 500;
                border-radius: 8px;
                min-width: 150px;
            }
        }
    }
</style>