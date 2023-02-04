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
                     <a :href="cartItem.link" target="_blank" class="intro__none__link">
                        <span v-html="cartItem.icons"></span>
                        {{ cartItem.text }}
                     </a>
                  </li>

                  <li>
                     <nuxt-link to="/tabpanel" class="intro__none__link">
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"/></svg>
                        </span>
                        Все приложения
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
