<template>
   <div class="header__list">
      <div class="header__logo">
         <nuxt-link to="/">
            <img src="@/assets/foto/logo.svg" alt="" />
            <span> tlgrm.uz </span>
         </nuxt-link>
      </div>

      <ul class="header__menu" :class="{ header__burger__start: headerBurger }">
         <li
            v-for="(item, index) in headerMenuApi"
            :key="index"
            @click="headerBurger = false"
         >
            <nuxt-link
               active-class="header__active__link"
               :to="item.link"
               class="header__menu__link"
               >{{ item.text }}</nuxt-link
            >
         </li>
      </ul>

      <button
         class="header__menu__burger"
         @click="headerBurger = !headerBurger"
      >
         <i class="fas fa-bars"></i>
      </button>

      <section
         :class="{ header__burger__fon: headerBurger }"
         @click="headerBurger = !headerBurger"
      ></section>
   </div>
</template>

<script>
import headerMenuApi from "@/data/headerMenuApi";
export default {
   data() {
      return {
         headerMenuApi,
         headerBurger: false,
      };
   },
};
</script>
