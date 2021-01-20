<template>
    <table class="table table-hover table-sm">
          <thead>
            <tr class="table-dark">
              <th class="col-1">Unite</th>
              <th class="col-5">Device</th>
              <th class="col-1">Power</th>
              <th class="col-1">Weight</th>
              <th class="col-1">Status</th>
            </tr>
          </thead>
          <TableRow />
        </table>
</template>

<script>
import TableRow from '../components/TableRow'
export default {
  components:{
    TableRow
  },
  methods:{

  }
}
</script>