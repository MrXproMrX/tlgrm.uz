<template>
   <div class="tabpanel__list">
      <div class="tabpanel__item" v-for="(tabpanel, i) in smartphone" :key="i">
         <h2 class="tabpanel__title__h2">
            <span>
               <img :src="tabpanel.imgs" :alt="tabpanel.title" />
            </span>

            {{ tabpanel.title }}
         </h2>
         <a target="_blank" :href="tabpanel.link" class="tabpanel__link">{{
            tabpanel.linkText
         }}</a>
         <h4 class="tabpanel__title__h4" v-html="tabpanel.developer"></h4>
         <a
            target="_blank"
            v-if="tabpanel.original"
            :href="tabpanel.originalLink"
            class="tabpanel__link__origina"
            >{{ tabpanel.original }}</a
         >
      </div>
   </div>
</template>

<script>
export default {
   props: ["smartphone"],
};
</script>
