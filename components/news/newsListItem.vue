<template>
   <div class="news__list">
      <div class="news__list__item">
         <div class="news__item" v-for="items in newsListApi" :key="items.id">
            <nuxt-link :to="'/news/' + items.id">
               <h3 class="news__title__h3">{{ items.title }}</h3>
               <div class="news__text">
                  <p v-html="items.text"></p>
               </div>
               <ul class="news__data__list">
                  <li>
                     <h4 class="news__title__h4">{{ items.dataItem }}</h4>
                  </li>

                  <li>
                     <h4 class="news__title__h4">{{ items.commit }}</h4>
                  </li>
               </ul>

               <h5 class="news__title__h5">{{ items.linkText }} <span><i class="fas fa-chevron-right"></i></span></h5>

               <div class="news__imgs">
                  <img :src="items.imgs" :alt="items.title">
               </div>
            </nuxt-link>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props:['newsListApi']
}
</script>
