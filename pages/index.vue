<template>
<section>
   <!-- intro start -->

   <div class="intro">
      <div class="introMax__icons">
            <span></span>
      </div>
      <section class="container">
         <div class="intro__cart">

            <div class="intro__list">
               <div class="intro__img">
                  <img src="@/assets/foto/icons/teligram_Icons.svg" alt="teligram">
               </div>

               <introMenuVue></introMenuVue>

               <a href="https://dl.tlgrm.click/desktop/win_portable" target="_blank" class="intro__bottom__link">
                  Доступна также портативная версия
               </a>
            </div>
         </div>

      </section>
   </div>

   <!-- intro end -->


   <!-- splgallery start -->

   <div class="splgallery">
      <section class="container">
         <div class="splgallery__cart">
            <splgallerySlicVue></splgallerySlicVue>
         </div>
      </section>
   </div>

   <!-- splgallery end -->


   <!-- spl-cards start -->

   <div class="splCards">
      <section class="container">
         <div class="splCards__cart">
            <splCardsVue></splCardsVue>
         </div>
      </section>
   </div>

   <!-- spl-cards end -->

</section>
</template>

<script>
import introMenuVue from '@/components/index/introMenu.vue';
import splgallerySlicVue from '@/components/index/splgallerySlic.vue';
import splCardsVue from '@/components/index/splCards.vue';
export default {
  name: 'IndexPage',
  components:{
   introMenuVue,
   splgallerySlicVue,
   splCardsVue
  }
}
</script>
