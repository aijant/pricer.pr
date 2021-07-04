import axios from 'axios'

// initial state
const state = () => ({
  news: []
})

// mutations
const mutations = {
  setNews: (state, news) => {
    state.news = news
  }
}

// actions
const actions = {
  async fetchNews ({ commit }, lang) {
    try {
    //   console.log(lang)
      const response = await axios.get(
        //   `https://jsonplaceholder.typicode.com/photos/lang?lang=${lang}?_start=0&_limit=10`
        'https://jsonplaceholder.typicode.com/photos/?_start=0&_limit=10'
      )
      if (response?.data) commit('setNews', response.data)
    } catch (err) {
      throw new Error(err)
    }
  }
}

export default {
  state,
  actions,
  mutations
}
