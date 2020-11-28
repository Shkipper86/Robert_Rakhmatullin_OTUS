import React from 'react'

class Card extends React.Component {

  render() {    
    const ms = this.props.day.dt * 1000;
    const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});

    return (     
        <div className='cards'>
          <h3>{weekdayName}</h3>
          <h2>Температура: {Math.round(this.props.day.main.temp)} °C</h2>
          <h2>Ветер: {Math.round(this.props.day.wind.speed)} м/с</h2>
          <h2>Атмосферное давление: {Math.round(this.props.day.main.pressure)} гПа</h2>          
          <div>
            <p className='weath'>{this.props.day.weather[0].description}</p>
          </div>
        </div>
    )
  }
}

export default Card