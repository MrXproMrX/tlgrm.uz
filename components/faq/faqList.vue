<template>
   <div class="faq__list">
      <div class="faq__item" v-for="(faqs, i) in faq" :key="i">
         <nuxt-link :to="faqs.link">
            <span v-html="faqs.icons"></span>
            <h3 class="faq__title__h3">{{ faqs.title }}</h3>
            <div class="faq__text" v-html="faqs.text"></div>
            <h5 class="faq__title__h5">{{ faqs.titleh5 }}</h5>
         </nuxt-link>
      </div>
   </div>
</template>

<script>
export default {
   props: ["faq"],
};
</script>
