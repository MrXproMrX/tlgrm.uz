<template>
   <div class="faq__cart__list">
      <div class="faq__cart__item__title" v-for="faqCart in faqCarts" :key="faqCart.id">
         <h3 class="faq__cart__title__h3">{{ faqCart.title }}</h3>
         <ul class="faq__cart__menu" v-if="faqCart.cartItem">
            <li v-for="items in faqCart.cartItem" :key="items.id">
               <a class="faq__cart__menu__link" v-if="items.id" :href="`#` + items.id"><span><i class="fa-solid fa-angles-right"></i></span> {{ items.title }}</a>
               <a class="faq__cart__menu__link" v-if="items.link" :href="items.link"><span><i class="fa-solid fa-angles-right"></i></span> {{ items.title }}</a>
            </li>
         </ul>
      </div>

      <h3 class="news__title__h2 faq__title__cart">Общие вопросы</h3>

      <div v-for="(faqCart,i) in faqCarts" :key="i">

         <div v-if="faqCart.cartItem" class="faq__cart__item__list">
            <div v-for="(items,i) in faqCart.cartItem" :key="i" class="faq__cart__item" :id="items.id">
               <h3 class="faq_stickers__title__h3" v-if="items.text" :id="items.id">{{ items.title }}</h3>
               <div class="faq_stickers__text" v-html="items.text" v-if="items.text"></div>

               <ul class="faq_stickers__item__list" v-if="items.itemList">
                  <li v-for="(items,i) in items.itemList" :key="i">
                     <div class="faq_stickers__text" v-html="items.text"></div>
                  </li>
               </ul>

            </div>
         </div>

      </div>
   </div>
</template>

<script>
export default {
   props:['faqCarts']
}
</script>
