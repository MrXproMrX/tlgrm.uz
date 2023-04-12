<template>
   <footer>
      <div class="footer">
         <section class="container">
            <div class="footer__cart">
               <div class="footer__list">
                  <div class="footer__logo">
                     <nuxt-link to="/">
                        <img
                           src="@/assets/foto/logoFooter.svg"
                           alt="logoFooter"
                        />
                     </nuxt-link>
                  </div>

                  <div class="footer__text">
                     <p>Неофициальный сайт про Telegram на русском.</p>
                     <p>
                        Здесь собраны
                        <a href="https://tlgrm.ru/apps">приложения</a> на базе
                        MTProto, переведена некоторая
                        <a href="https://tlgrm.ru/faq">документация</a> с
                        <a
                           rel="nofollow"
                           target="_blank"
                           href="https://telegram.org/"
                           >официального сайта</a
                        >, а также работает
                        <a href="https://tlgrm.ru/web">Webogram</a>.
                     </p>
                  </div>
               </div>

               <div class="footer__cart__list">
                  <ul class="footer__menu">
                     <li v-for="(item, i) in headerMenuApi" :key="i">
                        <nuxt-link
                           active-class="footer__active__link"
                           :to="item.link"
                           class="footer__menu__link"
                           >{{ item.text }}</nuxt-link
                        >
                     </li>
                  </ul>

                  <ul class="footer__menu">
                     <li v-for="(item, i) in footerMenuApi" :key="i">
                        <nuxt-link
                           active-class="footer__active__link"
                           :to="item.link"
                           class="footer__menu__link"
                           >{{ item.text }}</nuxt-link
                        >
                     </li>
                  </ul>

                  <ul class="footer__menu">
                     <li v-for="(item, i) in footerMenuLinkApi" :key="i">
                        <nuxt-link
                           active-class="footer__active__link"
                           :to="item.link"
                           class="footer__menu__link"
                           >{{ item.text }}</nuxt-link
                        >
                     </li>
                  </ul>
               </div>
            </div>
         </section>
      </div>
   </footer>
</template>

<script>
import headerMenuApi from "@/data/headerMenuApi";
import footerMenuApi from "@/data/footerMenuApi";
import footerMenuLinkApi from "@/data/footerMenuLinkApi";
export default {
   data() {
      return {
         headerMenuApi,
         footerMenuApi,
         footerMenuLinkApi,
      };
   },
};
</script>
