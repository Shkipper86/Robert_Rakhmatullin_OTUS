import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rows: [],
    unite: {},
    value: '',
    totalPower: 0,
    maxLoad: 0,
    options: ['AM1', 'AM2', 'AM3'],
    selectedRow: 'no',
    errorDevice: {name: 'no device'},
    powerSum: 0,
    weightSum: 0,
    deviceQt: 0
  },
  mutations: {
    rackUpdate(state, unit){
      state.unite = unit.Units
    },
    updateValue(state, value){
      state.value = value
    },
    rowsUpdate(state, rows){
      state.rows = rows
    },
    totalPowerUpdate(state, totalPower){
      state.totalPower = totalPower
    },
    maxLoadUpdate(state, maxLoad){
      state.maxLoad =maxLoad
    },
    selectedRowUpdate(state, row){
      state.selectedRow = row
    },
    powerSumUpdate(state, powerSum){
      state.powerSum = powerSum
    },
    weigtSumUpdate(state, weightSum){
      state.weightSum = weightSum
    },
    deviceQtUpdate(state, deviceQt){
      state.deviceQt = deviceQt
    }
  },
  actions: {
    async rackinfo({commit}){
      const unit = (await firebase.database().ref(`/Racks/${this.state.value}`).once('value')).val()  
      commit('rackUpdate', unit)
      const rowsLenght = unit.TotalUnits
      const totalPower = unit.TotalPower
      const maxLoad = unit.MaxLoad
      commit('totalPowerUpdate', totalPower)
      commit('maxLoadUpdate', maxLoad)
      this.dispatch('rowsLenght', rowsLenght)
    },
    updateValueAction ({ commit }, value) {
      commit('updateValue', value)
      this.dispatch('rackinfo')
    },
    rowsLenght({commit}, rowsLenght){
     let rows = this.state.rows
      if (rowsLenght == 48){
        rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48]
      }else{
        rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]
      }
      commit('rowsUpdate', rows)
      this.dispatch('getPower', rowsLenght)
    },
    getPower({commit}, rowsLenght){
      let powerSum = 0
      let weightSum = 0
      let deviceQt = 0
      for (let i=1; i<rowsLenght+1; i++){
        try{
          powerSum = powerSum + this.state.unite[i].Power
          weightSum = weightSum + this.state.unite[i].Weight
          deviceQt++
        }catch{
          powerSum = powerSum + 0
          weightSum = weightSum + 0
        }        
      }
      commit('powerSumUpdate', powerSum)
      commit('weigtSumUpdate', weightSum)
      commit('deviceQtUpdate', deviceQt)
    }
  }
})
