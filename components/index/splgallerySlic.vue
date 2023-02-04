<template>
   <div>
      <VueSlickCarousel v-bind="slic" :fade="true"  ref="c1" :asNavFor="c2" :focusOnSelect="true">
         <div v-for="(item,index) in splgallerySlicApi" :key="index">
            <section class="splgallery__cart__item">
               <div class="splgallery__item__img">
                  <img :src="item.img" :alt="item.title">
               </div>

               <section>
                  <h2 class="splgallery__title__h2">{{ item.title }}</h2>
                  <div class="splgallery__text">
                     <p>{{ item.text }}</p>
                  </div>

                  <div v-if="item.icons">
                     <ul class="splgallery__item__menu">
                        <li v-for="imgs in item.icons" :key="imgs.icons" class="splgallery__menu__item__img">
                           <a :href="imgs.link" target="_blank">
                              <img :src="imgs.icons" :alt="imgs.icons">
                           </a>
                        </li>
                     </ul>
                  </div>
               </section>
            </section>
         </div>
      </VueSlickCarousel>

      <VueSlickCarousel  ref="c2" :asNavFor="c1" :focusOnSelect="true" v-bind="settings">
         <button v-for="(items,i) in splgallerySlicApi" :key="i" :style="{borderColor:items.color}" class="splgallery__cart__button"></button>
      </VueSlickCarousel>
   </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import splgallerySlicApi from '../../data/splgallerySlicApi'
export default {
   components:{
      VueSlickCarousel
   },

   data(){
      return{
         splgallerySlicApi,
         slic:{
            arrows:false,
            speed:500,
            fade:true,
            dots:false,
            infinite:true,
            autoplay:true,
            autoplaySpeed:5000,
            adjustableHeight:true
         },
         c1: undefined,
         c2: undefined,
         settings: {
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: splgallerySlicApi.length,
            slidesToScroll: 1,
         },
      }
   },

   mounted() {
      this.c1 = this.$refs.c1;
      this.c2 = this.$refs.c2;
   },
}
</script>
