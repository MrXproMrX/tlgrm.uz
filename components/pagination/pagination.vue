<template>
   <section>
       <ul class="pagination__list">

         <li class="pagination__item" v-if="page>1">
            <a class="pagination__link" href="#" aria-label="Следующая страница" @click.prevent="paginate(1)" >
               <i class="fas fa-angle-double-left"></i>
            </a>
         </li>

         <li class="pagination__item" v-if="page>1">
           <a class="pagination__link" aria-label="Предыдущая страница"  @click.prevent="paginate(page -1)">
             <i class="fas fa-angle-left"></i>
           </a>
         </li>

         <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
            <a href="#!" :class="{pagination__active: (page == pageNumber)}" class="pagination__link" @click.prevent="paginate(pageNumber)">
               {{pageNumber}}
            </a>
         </li>

         <li class="pagination__item" v-if="page<pages">
            <a class="pagination__link" href="#" aria-label="Следующая страница" @click.prevent="paginate(page+1)" >
               <i class="fas fa-angle-right"></i>
            </a>
         </li>

         <li class="pagination__item" v-if="page<pages">
            <a class="pagination__link" href="#" aria-label="Следующая страница" @click.prevent="paginate(pages)" >
               <i class="fas fa-angle-double-right"></i>
            </a>
         </li>

       </ul>
   </section>
</template>

<script>
export default {
   model:{
     prop:'page',
     event:'paginate',
   },
   props:['page', 'count', 'perPage'],
   computed:{
       pages(){
           return Math.ceil(this.count / this.perPage);
       }
   },

   methods:{
       paginate(page){
          this.$emit('paginate' , page);
       },
   }
}
</script>
