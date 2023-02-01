export const state = () => ({
   articles:[]
})

export const mutations = {
   setarticles(state, articles){
       state.articles = articles
   }
}

export const actions = {
   async fetchArticles({commit}){
       const articles = await this.$axios.$get('silaknigi')
       commit('setarticles', articles)
   }
}

export const getters = {
   articles: s => s.articles
}
