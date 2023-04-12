<template>
   <div class="sticker__list">
      <div class="sticker__item" v-for="(animes, i) in anime" :key="i">
         <div class="sticker__img">
            <img :src="animes.imgs" :alt="animes.linkText" />
         </div>

         <a :href="animes.link" class="sticker__link" target="_blank">{{
            animes.linkText
         }}</a>
      </div>
   </div>
</template>

<script>
export default {
   props: ["anime"],
};
</script>
