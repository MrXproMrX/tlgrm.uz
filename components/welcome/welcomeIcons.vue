<template>
   <ul class="welcomeIcons__menu">
      <li v-for="(item, i) in welcomeIconsApi" :key="i">
         <span v-html="item.icons"></span>
         <h2 class="welcomeIcons__title__h2">{{ item.title }}</h2>
      </li>
   </ul>
</template>

<script>
import welcomeIconsApi from "@/data/welcomeIconsApi";
export default {
   data() {
      return {
         welcomeIconsApi,
      };
   },
};
</script>
