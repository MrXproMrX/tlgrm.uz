<template>
   <section>
      <section class="news__top__fon"></section>
      <div class="channels">
         <section class="container">
            <div class="channels__cart">
               <div class="news__cart__list">
                  <h2 class="news__title__h2">Каналы / Категории</h2>
               </div>

               <channelsListVue :channels="channels"></channelsListVue>
            </div>
         </section>
      </div>
   </section>
</template>

<script>
import channelsListVue from '@/components/channels/channelsList.vue';
import channelsPageApi from '@/data/channelsPageApi';
export default {
   data(){
      return{
         channels:channelsPageApi
      }
   },
   components:{
      channelsListVue
   }
}
</script>
