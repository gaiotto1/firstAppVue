<template>
  <div class="padrao-card" v-bind:style="efeitoClick" v-on:click="clickEfeito()" v-on:mouseout="removeClickEfeito()">
    <div class="padrao-card__media">
      <img class="padrao-card__img" v-bind:src="imagemSrc" alt=""  />
    </div>
    <div class="padrao-card__details">
      <div class="padrao-card__title">
        {{titulo}}
      </div>
    </div>
  </div>
</template>

<script>
    export default{
      props: ['titulo','imagemSrc'],
      data(){
        return{
          efeitoClick:null
        }
      },
      methods:{
        clickEfeito: function(){
          this.efeitoClick = 'transform:scale(1.9); margin-right110px;'
        },
        removeClickEfeito: function(){
          this.efeitoClick = null
        }
      }
    }
</script>

<style lang="scss">
</style>
