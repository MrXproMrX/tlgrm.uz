<template>
   <section>

      <!-- webogram start -->

      <div class="webogram">
         <section class="container">
            <div class="webogram__cart">
               <div class="webogram__list">
                  <div class="intro__img">
                     <img src="@/assets/foto/icons/teligram_Icons.svg" alt="teligram">
                  </div>

                  <a href="#!" class="webogram__list__link">
                     <span>
                        <svg class="intro__button-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" aria-hidden="true">
                           <path d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z"></path>
                        </svg>
                     </span>
                     Войти в Телеграмм Онлайн
                  </a>

                  <a href="https://dl.tlgrm.click/web/chrome" target="_blank" class="intro__bottom__link">
                     также доступна старая версия
                  </a>

                  <div class="webogram__img">
                     <img src="@/assets/foto/webogram_img.jpg" alt="webogramImg">
                  </div>
               </div>
            </div>
         </section>
      </div>

      <!-- webogram emd -->


      <!-- welcomeIcons start -->

      <div class="welcomeIcons">
         <section class="container">
            <div class="welcomeIcons__cart">
               <welcomeIconsVue></welcomeIconsVue>

               <div class="welcomeIcons__list">
                  <div class="welcomeIcons__text">
                     <p>Добро пожаловать в онлайн-версию Telegram .</p>
                     <p>Webogram это клиент Telegram на языке JS, работающий во всех современных браузерах.</p>
                     <p>Больше не придется переключаться с устройства на устройство, ведя переписку с друзьями и близкими, — пользуйтесь Telegram онлайн через эту веб-версию.</p>
                  </div>

                  <a href="https://dl.tlgrm.click/web" class="welcomeIcons__link" target="_blank">
                     <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="m6.438 12-.302-.046a2.174 2.174 0 0 1-1.793-1.684l-1.36-6.216a1.783 1.783 0 0 1 2.509-1.99L22.95 10.39a1.783 1.783 0 0 1 0 3.218L5.492 21.936a1.783 1.783 0 0 1-2.51-1.99l1.361-6.215a2.174 2.174 0 0 1 1.793-1.684L6.438 12ZM5.032 4.06l1.265 5.782c.015.07.072.124.143.135l5.458.841a1.196 1.196 0 0 1 0 2.364l-5.458.842a.174.174 0 0 0-.143.134L5.032 19.94 21.677 12 5.032 4.06Z"></path>
                        </svg>
                     </span>
                     Войти в Webogram
                  </a>
               </div>
            </div>
         </section>
      </div>

      <!-- welcomeIcons end -->

      <!-- feature start -->

      <div class="feature">
         <section class="container">
            <div class="feature__cart">
               <featureListItemVue></featureListItemVue>
            </div>
         </section>
      </div>

      <!-- feature end -->
   </section>
</template>

<style scoped>
   .webogram{
      background-image:url(@/assets/foto/webogram.jpg);
   }
</style>

<script>
import welcomeIconsVue from '@/components/welcome/welcomeIcons.vue';
import featureListItemVue from '@/components/welcome/featureListItem.vue';
export default {
   components:{
      welcomeIconsVue,
      featureListItemVue
   }
}
</script>
