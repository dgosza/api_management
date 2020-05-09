import React from 'react';

//weather icon path
import Icon from '../../../assets/images/weatherIcons/02d.png'

//hoc
import Aux from '../../hoc'


const BoxWeather = () => {
    return (
        <Aux>
            <img src={Icon} />
            <p>14ºC</p>
            <p>Jardim Danfer, São Paulo</p>
            <p>03/04</p>
        </Aux>
    )
}

export default BoxWeather;