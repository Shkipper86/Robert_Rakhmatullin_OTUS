<template>
<div class="sett">
    <div class="stats">
       <p>Последний результат: - решено ... из ... <br/>
       Общая точность ...%</p>
   </div>
   <div>
    <select v-model="level">
        <option v-for="(select, index) in levels" :key="index">{{ select }}</option>
    </select>
    <span> Сложность: {{level}}</span>
     <br/>
    <select v-model="time">
        <option v-for="(select, index) in times" :key="index">{{ select }}</option>
    </select>
    <span> Время раунда: {{time}}</span>
</div><br/>
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
export default {
    name:'Setting',
    data(){
        return{
            levels: ['Level 1', 'Level 2', 'Level 3'],
            level: 'Level 1',
            times: ['5 min', '10 min', ' 15 min', '20 min', '25 min'],
            time: '5 min'
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
</style>