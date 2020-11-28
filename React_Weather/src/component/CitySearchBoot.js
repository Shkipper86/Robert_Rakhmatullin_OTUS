import React from 'react'


class CityBoot extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);        
      }

     handleChange(event) {
        this.setState({value: event.target.value});            
        localStorage.setItem('city', event.target.value)
        }
      
    render(){
        return(          
            <form >
                <label>Начните вводить название города  </label>
            <select class="selectpicker" value={this.state.value} onChange={this.handleChange}>
                <option>Город</option>
                <option value="Moscow">Москва</option>
                <option value="Krasnodar">Краснодар</option>
                <option value="Saint Petersburg">Санкт-Петербург</option>
                <option value="Omsk">Омск</option>
                <option value="Ufa">Уфа</option>
                <option value="Bolgar">Болгар</option>
                <option value="Voronezh">Воронеж</option>
                <option value="Goryachy Klyuch">Горячий Ключ</option>
                <option value="Nizhny Novgorod">Нижний Новгород</option>
                <option value="Orsk">Орск</option>
                <option value="Tolyatti">Тольятти</option>
                <option value="Yuryuzan">Юрюзань</option>
            </select>                   
            </form>
        )
    }
}

export default CityBoot;