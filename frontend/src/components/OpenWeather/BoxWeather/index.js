import React from 'react';
import './style.css'

//weather icon path
import iconpath from '../../../assets/images/weatherIcons/02d.png'

import Icon from './Icon'
//hoc
import Aux from '../../hoc'


const BoxWeather = ({ icon, description, temp, location, wind }) => {

    return (
        <Aux>
            <Icon icon={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
            <p>{description}</p>
            <p>{(temp - 273.15).toFixed(1)}ºC</p>
            <p>{location}</p>
            <p>weather speed: {wind}</p>
        </Aux>
    )
}

export default BoxWeather;