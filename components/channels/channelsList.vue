<template>
   <div class="channels__list">
      <div class="channels__item" v-for="(channel, i) in channels" :key="i">
         <nuxt-link :to="channel.link">
            <img :src="channel.imgs" :alt="channel.title" />
            <h3 class="channels__title__h3">{{ channel.title }}</h3>
         </nuxt-link>
      </div>
   </div>
</template>

<script>
export default {
   props: ["channels"],
};
</script>
