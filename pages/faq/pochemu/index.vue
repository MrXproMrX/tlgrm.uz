<template>
   <section>
      <section class="news__top__fon"></section>
      <div class="faq_stickers">
         <section class="container">
            <div class="faq_stickers__cart">
               <div class="news__cart__list">
                  <h2 class="news__title__h2">
                     Почему я не могу отправить сообщение?
                  </h2>
               </div>

               <faqListVue :faqStickers="faqStickers"></faqListVue>
            </div>
         </section>
      </div>
   </section>
</template>

<script>
import faqListVue from "@/components/faq/faqStickersList.vue";
import faqPochemuApi from "@/data/faqPochemuApi";
export default {
   data() {
      return {
         faqStickers: faqPochemuApi,
      };
   },

   components: {
      faqListVue,
   },
};
</script>
