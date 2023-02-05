<template>
   <section>
      <section class="news__top__fon"></section>
      <div class="newsIn">
         <section class="container">
            <div class="newsIn__cart">
               <div class="newsIn__list">
                  <div class="newsIn__item__cart">
                     <h2 class="newsIn__title__h2">{{ NewsBlog.title }}</h2>
                     <h4 class="newsIn__title__h4">
                        <span><i class="fas fa-calendar-alt"></i></span>
                        {{ NewsBlog.dataItem }}
                     </h4>
                     <div class="newsIn__img">
                        <img :src="NewsBlog.imgs" alt="NewsBlog.title">
                     </div>

                     <div class="newsIn__text">{{ NewsBlog.text }}</div>

                     <section v-if="NewsBlog.listItem">
                        <ul class="newsIn__bootom__list">
                           <li v-for="(item,i) in NewsBlog.listItem" :key="i">
                              <h3 class="newsIn__title__h3" v-if="item.title">{{ item.title }}</h3>
                                 <div class="newsIn__bootom__text" v-if="item.text" v-html="item.text"></div>

                              <video class="newsIn__bootom__video" preload="metadata" v-if="item.video" :src="item.video" autoplay muted></video>
                              <img class="newsIn__bootom__video" v-if="item.img"  :src="item.img" alt="item.title">

                           </li>
                        </ul>
                     </section>
                  </div>

                  <aside v-if="newsListApi">
                     <ul class="newsIn__aside__menu">
                        <li v-for="(items,i) in newsListApi" :key="i">
                           <section class="newsIn__aside__item" v-if="i < 6">
                              <nuxt-link class="newsIn__aside__link" :to="`/news/` + items.id">{{ items.title }}</nuxt-link>
                              <h4 class="newsIn__title__h4">{{ items.dataItem }}</h4>
                           </section>
                        </li>
                     </ul>
                  </aside>
               </div>
            </div>
         </section>
      </div>
   </section>
</template>

<script>
import newsListApi from '@/data/newsListApi';
export default {

   data(){
      return{
         newsListApi
      }
   },

   computed:{
      NewsBlog(){
         return newsListApi.find(NewsBlog => NewsBlog.id === + this.$route.params.id);
      },
   }
}
</script>
