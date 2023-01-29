<template>
   <div class="splCards__list">
      <div class="splCards__item" v-for="(item,i) in splCardsApi" :key="i">
         <div class="splCards__item__img">
            <img :src="item.img" :alt="item.title">
         </div>
         <h2 class="splCards__title__h2">{{ item.title }}</h2>
         <div class="splCards__text">
            <p v-html="item.text"></p>
         </div>
      </div>
   </div>
</template>

<script>
import splCardsApi from '@/data/splCardsApi';
export default {
   data(){
      return{
         splCardsApi
      }
   }
}
</script>
