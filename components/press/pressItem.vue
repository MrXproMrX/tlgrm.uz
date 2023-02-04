<template>
   <div class="press__list">
      <div class="press__item" v-for="(pres,i) in press" :key="i">
         <h4 class="press__title__h4">{{ pres.title }}</h4>
         <ul class="press__menu__list" v-if="pres.listItem">
            <li v-for="(paessItem,i) in pres.listItem" :key="i">
               <h5 class="press__title__h5">{{ paessItem.itemTitle }}</h5>
               <a class="press__link__item" target="_blank" :href="paessItem.link">
                  {{ paessItem.linkText }}
               </a>
            </li>
         </ul>
      </div>
   </div>
</template>

<script>
export default {
   props:['press']
}
</script>
