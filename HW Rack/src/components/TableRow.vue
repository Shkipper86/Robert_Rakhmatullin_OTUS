<template>
<tbody>
    <tr class="font" v-for="row in this.$store.state.rows" :key="row" @click="getIndex(row)">
        <th>{{row}}</th>
        <td>{{getUniteInfoSerial(row)}}</td>
        <td>{{getUniteInfoPower(row)}}</td>
        <td>{{getUniteInfoWeight(row)}}</td>
        <td :class="getStatus(row)">{{getStatus(row)}}</td>
    </tr>
    <tr class="font">
        <th>Summary:</th>
        <th>{{deviceQt}} mounted devices</th>
        <th :class="summaryPower()">{{powerSum}}kW/{{totalPower}}kW</th>
        <th :class="summaryWeight()">{{weightSum}}kg/{{maxLoad}}kg</th>
    </tr>
</tbody>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
    computed: mapState(['unite', 'powerSum', 'weightSum', 'deviceQt', 'totalPower', 'maxLoad']),
    methods:{
        getUniteInfoPower(row){
          try{
            const unite = this.unite   
            return unite[row].Power + " kW"
          }catch{
            return "0 kW"
          }
        },
        getUniteInfoSerial(row){
          try{
            const unite = this.unite
            return unite[row].DeviceName + " SN: " + unite[row].Serial
          }catch{
            return "no device"
          }
        },
        getUniteInfoWeight(row){
          try{
            const unite = this.unite         
            return unite[row].Weight + " kg"
          }catch{
            return "0 kg"
          }
        },
        ...mapMutations(['selectedRowUpdate']),
        getIndex(row){
          this.unite[row] != undefined? this.selectedRowUpdate(row):this.selectedRowUpdate('no')       
        },
        getStatus(row){
          try{
            const unite = this.unite 
            return unite[row].Status
          }catch{
            return "-"
          }
        },
        summaryPower(){
          if (this.powerSum < this.totalPower - 300){
            return 'online'
          } else if (this.powerSum >= this.totalPower - 300 && this.powerSum < this.totalPower - 49){
            return 'maintenance'
          }else{
            return 'offline'
          }
        },
        summaryWeight(){
          if (this.weightSum < this.maxLoad - 40){
            return 'online'
          } else if (this.weightSum >= this.maxLoad - 40 && this.weightSum < this.maxLoad - 10){
            return 'maintenance'
          }else{
            return 'offline'
          }
        }
    }
}
</script>
<style>
 .online{
   background: green;
   
 }
 .offline{
   background: red;
  
 }
 .maintenance{
   background: orange;
   
 }
.font{
  font-size: 10px;
  height: 2px;
}
</style>