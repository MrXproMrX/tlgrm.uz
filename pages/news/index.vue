<template>
   <section>
      <section class="news__top__fon"></section>
      <div class="news">
         <section class="container">
            <div class="news__cart">

               <div class="news__cart__list">

                  <h2 class="news__title__h2">Новости Telegram</h2>

                  <ul class="news__cart__menu">
                     <li>
                        <a href="#!" class="news__cart__link">
                           <span>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"> <path d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z"/></svg>
                           </span>
                           Наша группа
                        </a>
                     </li>

                     <li>
                        <a href="#!" class="news__cart__link">
                           <span>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z"/></svg>
                           </span>
                           RSS
                        </a>
                     </li>
                  </ul>

               </div>

               <newsListItemVue :newsListApi="newsListApi"></newsListItemVue>
               <paginationVue v-model="page" :count="countProducts" :per-page="productsPerPage"></paginationVue>

            </div>
         </section>
      </div>
   </section>
</template>

<script>
import newsListItemVue from '@/components/news/newsListItem.vue';
import newsListApi from '@/data/newsListApi';
import paginationVue from '@/components/pagination/pagination.vue';
export default {
   data(){
      return{
         page:1,
         productsPerPage:6,
      }
   },
   components:{
      newsListItemVue,
      paginationVue
   },

   computed:{
      newsListApi(){
         const offset = (this.page - 1) * this.productsPerPage;
         return newsListApi.slice(offset, offset + this.productsPerPage);
      },
      countProducts(){
         return newsListApi.length;
      }
   }
}
</script>
