<template>
    <div>
        <h2 class="text">{{selectedRow != 'no'? unite[selectedRow].DeviceName:'no device'}}</h2>
    </div>
</template>
<script>
import {mapState} from 'vuex' 
export default {
    computed: mapState(['unite', 'selectedRow'])
}
</script>
<style>
.text{
    text-align: center;
}
</style>