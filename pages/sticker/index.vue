<template>
   <section>
      <section class="news__top__fon"></section>
      <div class="sticker">
         <section class="container">
            <div class="sticker__cart">

               <div class="news__cart__list">
                  <h2 class="news__title__h2">Стикеры для Telegram</h2>
               </div>

               <ul class="sticker__cart__item">
                  <li>
                     <button class="sticker__buttom" @click="stickerPage = true" :class="{sticker__active:(stickerPage == true)}">
                        ВСЕ СТИКЕРЫ
                     </button>
                  </li>

                  <li>
                     <button class="sticker__buttom" @click="stickerPage = false" :class="{sticker__active:(stickerPage == false)}">
                        ИЗ ВКОНТАКТЕ
                     </button>
                  </li>
               </ul>

               <template v-if="stickerPage">
                  <stickerPageVue :sticker="sticker"></stickerPageVue>
                  <paginationVue v-model="page" :count="countProducts" :per-page="productsPerPage"></paginationVue>
               </template>

               <template v-else>
                  <stickerAnimeVue :anime="anime"></stickerAnimeVue>
                  <paginationVue v-model="pageAnime" :count="countProductsAnime" :per-page="productsPerPage"></paginationVue>
               </template>

            </div>
         </section>
      </div>
   </section>
</template>

<script>
import stickerPageVue from '@/components/sticker/stickerPage.vue';
import stickerPageApi from '@/data/stickerPageApi';
import paginationVue from '@/components/pagination/pagination.vue';
import stickerAnimeVue from '@/components/sticker/stickerAnime.vue';
import stickerAnimeApi from '@/data/stickerAnimeApi'
export default {
   data(){
      return{
         page:1,
         productsPerPage:6,

         pageAnime:1,
         productsPerPageAnime:6,
         stickerPage:true
      }
   },

   components:{
      stickerPageVue,
      paginationVue,
      stickerAnimeVue
   },

   computed:{
      sticker(){
         const offset = (this.page - 1) * this.productsPerPage;
         return stickerPageApi.slice(offset, offset + this.productsPerPage);
      },

      countProducts(){
         return stickerPageApi.length;
      },

      anime(){
         const offset = (this.pageAnime - 1) * this.productsPerPageAnime;
         return stickerAnimeApi.slice(offset, offset + this.productsPerPageAnime);
      },

      countProductsAnime(){
         return stickerAnimeApi.length;
      },
   }
}
</script>
