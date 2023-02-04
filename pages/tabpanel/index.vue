<template>
   <section>
      <section class="news__top__fon"></section>
      <div class="tabpanel">
         <section class="container">
            <div class="tabpanel__cart">
               <div class="news__cart__list">
                  <h2 class="news__title__h2">Скачать Telegram</h2>
               </div>

               <div class="tabpanel__text__cart">
                  <p>Здесь представлены все существующие на текущий момент клиенты Telegram.</p>
               </div>

               <ul class="sticker__cart__item">
                  <li>
                     <button class="sticker__buttom" @click="smartphonePage = true" :class="{sticker__active:(smartphonePage == true)}">
                        Для компьютера
                     </button>
                  </li>

                  <li>
                     <button class="sticker__buttom" @click="smartphonePage = false" :class="{sticker__active:(smartphonePage == false)}">
                        Для смартфона
                     </button>
                  </li>
               </ul>

               <template v-if="smartphonePage">
                  <tabpanelPageVue :tabpanelApps="tabpanelApps"></tabpanelPageVue>
               </template>

               <template v-else>
                  <smartphonePageVue :smartphone="smartphone"></smartphonePageVue>
               </template>

            </div>
         </section>
      </div>
   </section>
</template>

<script>
import tabpanelAppsApi from '@/data/tabpanelAppsApi';
import tabpanelPageVue from '@/components/tabpanel/tabpanelPage.vue';
import smartphonePageVue from '@/components/tabpanel/smartphonePage.vue';
import smartphoneApi from '@/data/smartphoneApi';
export default {
   data(){
      return{
         tabpanelApps:tabpanelAppsApi,
         smartphone:smartphoneApi,
         smartphonePage:true
      }
   },

   components:{
      tabpanelPageVue,
      smartphonePageVue
   }
}
</script>
