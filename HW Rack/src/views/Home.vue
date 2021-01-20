<template>
  <div class="container pt-5">
    <div class="row">
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <multiselect placeholder="Select rack" :value="value" :options="options" :searchable="false" @input="updateValueAction" ></multiselect>
        </div>
        <hr>
        <RackTable />
      </div>
      <div class="col-md-6">
        <DeviceInfoHead />
        <div class="col-md-12">
        <DeviceInfo />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RackTable from '../components/RackTable'
import DeviceInfo from '../components/DeviceInfo'
import DeviceInfoHead from '../components/DeviceInfoHead'
import Multiselect from 'vue-multiselect'
import Vuex from 'vuex'
const { mapActions, mapState } = Vuex
export default {
  name: 'Home',
  components: {
    RackTable,
    DeviceInfo,
    DeviceInfoHead,
    Multiselect
  },
  methods: {
    ...mapActions(['updateValueAction'])
  },
  computed: {
    ...mapState(['value', 'options'])
  }
}
</script>