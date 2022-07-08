export const state = () => ({
    vacancies: [],
    next: null,
    prev: null
  })
  
  export const mutations = {
    setVacancies(state, vacancies) {
      state.vacancies = vacancies
    },
    setNext(state, next) {
      state.next = next
    },
    setPrevious(state, prev) {
      state.prev = prev
    },
  }
  
  export const actions = {
    async fetch({commit}) {
      const vacancies = await this.$axios.$get('/api/vacancy/?limit=1')
      commit('setVacancies', vacancies.results);
      commit('setNext', vacancies.next)
      commit('setPrevious', vacancies.previous);
    },
    async getWithXp({commit}) {
      const vacancies = await this.$axios.$get('/api/vacancy/with_xp/?limit=1')
      console.log(vacancies)
      commit('setVacancies', vacancies)
      commit('setNext', vacancies.next);
      commit('setPrevious', vacancies.previous);
    },
    async fetchAll({commit}) {
      const vacancies = await this.$axios.$get('/api/vacancy/')
      commit('setVacancies', vacancies.results)
      commit('setNext', vacancies.next);
      commit('setPrevious', vacancies.previous);
    },
    sortByNames({commit}, vacancies) {
      const sortedVacancies = [...vacancies].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });

      commit('setVacancies', sortedVacancies);
    },
    async fetchNext({commit}, nextLink) {
      const vacancies = await this.$axios.$get('/api/' + nextLink.split('/api/')[1]); 
      commit('setVacancies', vacancies.results);
      commit('setNext', vacancies.next);
      commit('setPrevious', vacancies.previous);
    },
    async fetchPrev({commit}, prevLink) {
      const vacancies = await this.$axios.$get('/api/' + prevLink.split('/api/')[1]); 
      commit('setVacancies', vacancies.results);
      commit('setNext', vacancies.next);
      commit('setPrevious', vacancies.previous);
    },
  }
  
  export const getters = {
    vacancies: s => {
      console.log('got data')
      return s.vacancies
    },
    next: s => s.next,
    prev: s => s.prev
  }
  