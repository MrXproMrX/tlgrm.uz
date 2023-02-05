<template>
   <section>
      <section class="news__top__fon"></section>
      <div class="faq">
         <section class="container">
            <div class="faq__cart">
               <div class="news__cart__list">
                  <h2 class="news__title__h2">Часто задаваемые вопросы</h2>
               </div>

               <faqListVue :faq="faq"></faqListVue>
               <faqCartListVue :faqCarts="faqCarts"></faqCartListVue>
            </div>
         </section>
      </div>
   </section>
</template>

<script>
import faqListVue from '@/components/faq/faqList.vue';
import faqPageApi from '@/data/faqPageApi';
import faqCartListVue from '@/components/faq/faqCartList.vue';
import faqCartApi from '@/data/faqCartApi';
export default {

   data(){
      return{
         faq:faqPageApi,
         faqCarts:faqCartApi
      }
   },

   components:{
      faqListVue,
      faqCartListVue
   }
}
</script>
