import React, {Component} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import CityWeather from './CityWeather'
import '../styles/App.css'
import CityBoot from './CitySearchBoot'

class App extends Component{
    render(){
        return(        
            <BrowserRouter>    
            <div className="App">
                <button><Link to='/cityweather'>Получить прогноз погоды</Link></button>
                <hr />
                <Route exact path='/' component= {CityBoot} />                   
                <Route path='/cityweather' component ={CityWeather} />
            </div>
            </BrowserRouter>
        );
    }
}
export default App;