<template>
   <section>
      <ul class="faq_stickers__menu">
         <li v-for="(faqSticker,i) in faqStickers" :key="i">
            <a class="faq_stickers__menu__link" :href="`#mrx` + faqSticker.id">{{ faqSticker.title }}</a>
         </li>
      </ul>

      <div class="faq_stickers__list">

         <div class="faq_stickers__item" v-for="faqSticker in faqStickers" :key="faqSticker.id">
            <h3 class="faq_stickers__title__h3" v-if="faqSticker.title" :id="`mrx` + faqSticker.id">{{ faqSticker.title }}</h3>
            <div class="faq_stickers__text" v-html="faqSticker.text" v-if="faqSticker.text"></div>

            <!-- stickers start -->

            <ul class="faq_stickers__item__list" v-if="faqSticker.itemMenu">
               <li v-for="(items,i) in faqSticker.itemMenu" :key="i">
                  <div class="faq_stickers__text" v-html="items.text"></div>
               </li>
            </ul>

            <!-- stickers end -->


            <!-- channels start -->

            <div class="faq_stickers__channels" v-if="faqSticker.tabsItem">
               <ul class="faq_stickers__channels__list">
                  <li v-for="(itemTab,i) in faqSticker.tabsItem" :key="i">
                     <button
                        @click="channels = itemTab.id"
                        :class="{faq_stickers__active:(itemTab.id === channels)}"
                        class="faq_stickers__channels__button">
                        {{ itemTab.title }}
                     </button>
                  </li>
               </ul>

               <div v-for="(itemTab,i) in faqSticker.tabsItem" :key="i">
                  <div class="faq_stickers__text" v-html="itemTab.text" v-if="channels == itemTab.id"></div>
               </div>
            </div>

            <!-- channels end -->


            <!-- delete start -->

            <div class="faq__delete__menu" v-if="faqSticker.itemDelete">
               <div class="faq__delete__item" v-for="(items,i) in faqSticker.itemDelete" :key="i">
                  <div class="faq_stickers__text" v-if="items.text" v-html="items.text"></div>
                  <div class="faq__delete__list">
                     <img :src="items.imgs" v-if="items.imgs" :alt="items.text">
                     <img :src="items.imgs2" v-if="items.imgs2" :alt="items.text">
                  </div>
               </div>
            </div>

            <!-- delete end -->

            <!-- errors start -->

            <div class="faq__error" v-if="faqSticker.errors">
               <div class="faq__error__item" v-for="(items,i) in faqSticker.errors" :key="i">
                  <h3 class="faq__error__title faq_stickers__title__h3">{{ items.title }}</h3>
                  <div class="faq__stickers__text" v-html="items.text"></div>
               </div>
            </div>

            <!-- errors end -->

            <!-- itemImgs start -->

            <div class="faq__verification" v-if="faqSticker.itemImgs">
               <div class="faq__verification__img" v-for="(items,i) in faqSticker.itemImgs" :key="i">
                  <img :src="items.imgs" :alt="i">
               </div>
            </div>

            <!-- itemImgs end -->

            <!-- itemLink start -->

            <div class="faq__obhod__menu" v-if="faqSticker.itemLink">
               <div v-for="(items,i) in faqSticker.itemLink" :key="i">
                  <a
                     :href="items.link"
                     target="_blank"
                     class="faq__obhod__menu__link"
                     :style="{backgroundColor:items.color}">
                     {{ items.linkText }}
                  </a>
               </div>
            </div>

            <!-- itemLink end -->

         </div>
      </div>
   </section>
</template>

<script>
export default {
   props:['faqStickers'],
   data(){
      return{
         channels:1
      }
   }
}
</script>
