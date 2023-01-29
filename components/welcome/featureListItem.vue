<template>
   <ul class="feature__menu__list">
      <li v-for="(items,i) in featureListApi" :key="i">
         <div class="feature__menu__img">
            <img :src="items.img" :alt="items.title">
         </div>

         <h2 class="feature__menu__title">{{ items.title }}</h2>

         <div class="feature__menu__text">
            <p v-html="items.text"></p>
         </div>
      </li>
   </ul>
</template>

<script>
import featureListApi from '@/data/featureListApi';
export default {
   data(){
      return{
         featureListApi
      }
   }
}
</script>
