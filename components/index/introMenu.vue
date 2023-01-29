<template>
   <div class="intro__list__cart">

      <ul class="intro__menu" :class="{active:menuNone}">
         <li v-for="(item,index) in introMenuApi" :key="index">

            <section class="intro__item__cart">
               <nuxt-link class="intro__item__link" :to="item.link">
                  <span v-html="item.icons"></span>
                  {{ item.text }}
               </nuxt-link>

               <span class="intro__item__down" @click="menuNone = !menuNone">
                  <i class="fas fa-angle-down"></i>
               </span>
            </section>

            <section v-if="item.children" class="intro__none__cart">
               <ul class="intro__none__menu">
                  <li v-for="cartItem in item.children" :key="cartItem.id">
                     <nuxt-link :to="cartItem.link" class="intro__none__link">
                        <span v-html="cartItem.icons"></span>
                        {{ cartItem.text }}
                     </nuxt-link>
                  </li>
               </ul>
            </section>

         </li>
      </ul>

   </div>
</template>

<script>
import introMenuApi from '../../data/introMenuApi';
export default {
   data(){
      return{
         introMenuApi,
         menuNone:false
      }
   }
}
</script>
