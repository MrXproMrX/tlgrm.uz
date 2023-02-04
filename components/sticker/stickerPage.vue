<template>
   <div class="sticker__list">
      <div class="sticker__item" v-for="(stickers,i) in sticker" :key="i">
         <div class="sticker__img">
            <img :src="stickers.imgs" :alt="stickers.linkText">
         </div>

         <a :href="stickers.link" class="sticker__link" target="_blank">{{ stickers.linkText }}</a>
      </div>
   </div>
</template>


<script>
export default {
   props:['sticker']
}
</script>
