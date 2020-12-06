<template>
<div class="sett">
    <div class="stats">
       <p>Последний результат: - решено ... из ... <br/>
       Общая точность ...%</p>
   </div>
    <div class="slider">
        <h2>Настройки</h2>
        <label>Сложность</label><br/>
        <vue-slider
            v-model="value"
            :adsorb="true"
            :data="lev"
            :marks="true">
        </vue-slider><br/>
        <label>Время раунда</label><br/>
        <vue-slider
            v-model="value"
            :adsorb="true"
            :data="times"
            :marks="true">
        </vue-slider><br/>
    </div>        
<input type="checkbox"
       v-model="sum"
       true-value="1"
       false-value="0">
<label for="sum"> Суммирование</label><br/>
<input type="checkbox"
       v-model="diff"
       true-value="1"
       false-value="0">
<label for="diff"> Разность</label><br/>
<input type="checkbox"
       v-model="multi"
       true-value="1"
       false-value="0">
<label for="multi"> Умножение</label><br/>
<input type="checkbox"
       v-model="division"
       true-value="1"
       false-value="0">
<label for="division"> Деление</label><br/>
<input type="checkbox"
       v-model="Exponentiation"
       true-value="1"
       false-value="0">
<label for="Exponentiation"> Возведение в степень</label><br/>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
export default {
    components:{
        VueSlider,
    },
    name:'Setting',
    data(){
        return{
            levels: ['Level 1', 'Level 2', 'Level 3'],
            level: 'Level 1',
            times: ['5 min', '10 min', ' 15 min', '20 min', '25 min'],
            time: '5 min',
            lev: ['Level 1', 'Level 2', 'Level 3']
        }
    }    
}
</script>

<style>
.sett{
    margin: 10px;
    text-align: left;
}
br{
    margin: 10px;
}
.slider{
    width: 200px;
    padding-left: 10px;
    padding-top: 15px;
}
</style>