import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tickers:[],
    cart:[]
  },
  getters: {
    tickers(state){
      return state.tickers
    },
    cart(state){
      return state.cart
    }
  },
  mutations: {
    setTickers(state, tickers){
      state.tickers = tickers
    },
    setCart(state, ticker){
      if(state.cart.length){
        return state.ticker
      }
      state.cart.push(ticker)
    },
    deleteCart(state, idx){
      state.cart.splice(idx, 1)
    }
  },
  actions: {
    async getTickers({commit}){
      await axios('http://localhost:3000/tickers', {
        method: 'GET'
      })
          .then((tickers) => {
            commit('setTickers', tickers.data);
            return tickers;
          })
          .catch((error) => {
            console.log(error)
            return error
          })
    },
    setTickers({commit}, ticker){
      commit('setCart', ticker)
    },
    removeItemCart({commit}, idx){
      commit('deleteCart', idx)
    }
  },
  modules: {
  }
})
