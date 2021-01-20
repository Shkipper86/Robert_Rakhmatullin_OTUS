<template>
<div>
    <div class="parent">
      <img :src="getImgFront(selectedRow)" alt="..." class="img">
      <img :src="getImgRear(selectedRow)" alt="..." class="img">
    </div>
    <hr>
    <div>
      <p>Details:</p>
      <table class="table table-hover table-sm">
        <thead>
            <tr class="table-dark">
              <th class="col-1">name</th>
              <th class="col-3">info</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <th>Status:</th>
            <td :class="getStatus(selectedRow)">{{selectedRow != 'no'? this.unite[selectedRow].Status:"-"}}</td>
          </tr>
          <tr>
            <th>Vendor:</th>
            <td>{{selectedRow != 'no'? this.unite[selectedRow].Vendor:"-"}}</td>
          </tr>
          <tr>
            <th>Model:</th>
            <td>{{selectedRow != 'no'? this.unite[selectedRow].DeviceName:"-"}}</td>
          </tr>
          <tr>
            <th>Serial number:</th>
            <td>{{selectedRow != 'no'? this.unite[selectedRow].Serial:"-"}}</td>
          </tr>
          <tr>
            <th>Device type:</th>
            <td>{{selectedRow != 'no'? this.unite[selectedRow].Type:"-"}}</td>
          </tr>
          <tr>
            <th>Unit:</th>
            <td>{{selectedRow != 'no'? selectedRow:"-"}}</td>
          </tr>
          <tr>
            <th>Contract:</th>
            <td>{{selectedRow != 'no'? this.unite[selectedRow].Contract:"-"}}</td>
          </tr>
          <tr>
            <th>Support contract:</th>
            <td>{{selectedRow != 'no'? this.unite[selectedRow].Support:"-"}}</td>
          </tr>
          <tr>
            <th>End Support Date:</th>
            <td>{{selectedRow != 'no'? this.unite[selectedRow].EOS:"-"}}</td>
          </tr>
          <tr>
            <th>Power:</th>
            <td>{{selectedRow != 'no'? this.unite[selectedRow].Power + " kW" :"-"}}</td>
          </tr>
          <tr>
            <th>Weight:</th>
            <td>{{selectedRow != 'no'? this.unite[selectedRow].Weight + " kg" :"-"}}</td>
          </tr>
          <tr>
            <th>Hostname:</th>
            <td>{{selectedRow != 'no'? this.unite[selectedRow].Hostname:"-"}}</td>
          </tr>
          <tr>
            <th>Mgmt Ip:</th>
            <td>{{selectedRow != 'no'? this.unite[selectedRow].MgmtIP:"-"}}</td>
          </tr>
        </tbody>
      </table>
    </div>    
</div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed: mapState(['unite', 'selectedRow']),
    methods: {
      getImgFront(selectedRow){
        try{
          const img = this.unite[selectedRow].DeviceName
          return require(`./../assets/img/${img}_front.jpg`)
        }catch{
          return require(`./../assets/img/no_img.jpg`)
        }
      },
      getImgRear(selectedRow){
        try{
          const img = this.unite[selectedRow].DeviceName
          return require(`./../assets/img/${img}_rear.jpg`)
        }catch{
          return require(`./../assets/img/no_img.jpg`)
        }
      },
      getStatus(selectedRow){
        try{
          return this.unite[selectedRow].Status
        }catch{
          return "default"
        }
      }
    }
}
</script>
<style>
.parent{
  display: flex;
}
.img{
  width: 250px;
}
 .online{
   background: greenyellow;
 }
 .offline{
   background: red;
 }
 .maintenance{
   background: orange;
 }
 .default{
   background: local;
 }
</style>
