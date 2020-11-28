
import React from 'react'
import Card from './Cards'

import '../styles/Cards.css'

class CityWeather extends React.Component {
    constructor(props){
        super(props);
        this.state={
            days: [], 
            city: ''
        }
    }
 
      componentDidMount = () => {
        const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${localStorage.getItem('city')}&lang=ru&units=metric&APPID=ad0e739c09d62dd3cc30e507f2c15f79`
        fetch(weatherURL)
        .then(res => res.json())
        .then(data => {
          const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
          this.setState({days: dailyData})
        })
      }
    
      formatCards = () => {
        return this.state.days.map((day, index) => <Card day={day} key={index}/>)
      }
    
      render() {
        return (
            <>
          <div>
          <h1>Прогноз погоды на 5 дней в городе {localStorage.getItem('city')}</h1>
            <div className = 'WeatherBlock'>    
              {this.formatCards()}    
            </div>
          </div>
          </>
        )
      }
    }    

export default CityWeather;
