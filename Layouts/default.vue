<template>
   <section>
      <headerVue></headerVue>
         <section>
            <nuxt></nuxt>
         </section>
      <footerVue></footerVue>
   </section>
</template>

<script>
import headerVue from '@/components/HeaderFooter/header.vue';
import footerVue from '@/components/HeaderFooter/footer.vue';
export default {
   components:{
      headerVue,
      footerVue
   }
}
</script>
