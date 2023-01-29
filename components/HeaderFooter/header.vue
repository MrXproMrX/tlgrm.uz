<template>
   <header>
      <div class="header">
         <section class="container">
            <div class="header__cart">
               <headerMenuVue></headerMenuVue>
            </div>
         </section>
      </div>
   </header>
</template>

<script>
import headerMenuVue from './headerMenu.vue'
export default {
  components:{
   headerMenuVue
  }
}
</script>
