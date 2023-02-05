<template>
   <section>
      <ul class="faq_stickers__menu">
         <li v-for="(faqSticker,i) in faqStickers" :key="i">
            <a class="faq_stickers__menu__link" :href="`#mrx` + faqSticker.id">{{ faqSticker.title }}</a>
         </li>
      </ul>

      <div class="faq_stickers__list">

         <div class="faq_stickers__item" v-for="faqSticker in faqStickers" :key="faqSticker.id">
            <h3 class="faq_stickers__title__h3" :id="`mrx` + faqSticker.id">{{ faqSticker.title }}</h3>
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
                        @click="channels = itemTab.title"
                        :class="{faq_stickers__active:(itemTab.title === channels)}"
                        class="faq_stickers__channels__button">
                        {{ itemTab.title }}
                     </button>
                  </li>
               </ul>

               <div v-for="(itemTab,i) in faqSticker.tabsItem" :key="i">
                  <div class="faq_stickers__text" v-html="itemTab.text" v-if="channels == itemTab.title"></div>
               </div>
            </div>

            <!-- channels end -->

         </div>
      </div>
   </section>
</template>

<script>
export default {
   props:['faqStickers'],
   data(){
      return{
         channels:'Android'
      }
   }
}
</script>
