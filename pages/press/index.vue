<template>
   <section>
      <section class="news__top__fon"></section>
      <div class="press">
         <section class="container">
            <div class="press__cart">
               <div class="news__cart__list">
                  <h2 class="news__title__h2">Скачать Telegram</h2>
               </div>

               <div class="press__text__cart">
                  <p>
                     На этой странице собраны статьи о Telegram и связанными с
                     ним проектами. Больше информации в нашем FAQ и
                     <a
                        href="https://twitter.com/telegram"
                        target="_blank"
                        rel="nofollow noopener"
                        >Твиттере</a
                     >
                  </p>
               </div>

               <h3 class="press__title__h3">Пресс-кит</h3>
               <div class="press__text__cart">
                  <p>
                     Если вам нужны <strong>логотипы Telegram</strong>, то можно
                     использовать
                     <a href="@/assets/foto/z33lyc7z_6cn1trio5nlsw.zip" download
                        >эти</a
                     >. Вы можете свободно использовать их для иллюстраций,
                     брошюр, кнопок, и так далее.
                  </p>
                  <p>
                     Единственное условие: люди, использующие ваш продукт,
                     должны понимать, что вы не являетесь официальным
                     представителем Telegram.
                  </p>
               </div>
               <h3 class="press__title__h3">Статьи о Telegram</h3>

               <pressItemVue :press="press"></pressItemVue>
            </div>
         </section>
      </div>
   </section>
</template>

<script>
import pressItemVue from "@/components/press/pressItem.vue";
import pressPagrApi from "@/data/pressPagrApi";
export default {
   data() {
      return {
         press: pressPagrApi,
      };
   },

   components: {
      pressItemVue,
   },
};
</script>
