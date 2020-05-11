import React, { useState, useEffect } from 'react';

//Material Ui Components
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

//BoxWeather
import BoxWeather from './BoxWeather'

const OpenWeather = () => {

    const [iconWeather, setIconWeather] = useState('')
    const [descriptionWeather, setDescriptionWeather] = useState('')
    const [tempWeather, setTempWeather] = useState('')
    const [locationWeather, setLocationWeather] = useState('')
    const [windWeather, setWindWeather] = useState('')

    const [showWeatherData, setShowWeatherData] = useState(false)
    const [renderDataComponent, setRenderDataComponent] = useState('')

    //Everytime the variables change, set new component.
    useEffect(() => {
        setRenderDataComponent(<BoxWeather icon={iconWeather} description={descriptionWeather} temp={tempWeather} location={locationWeather} wind={windWeather} />)
    }, [iconWeather, descriptionWeather, tempWeather, locationWeather, windWeather])

    const handleCityChoosed = (e) => {
        const apiWeatherKey = '478828782f2af557333ec4cfba9dcb7a'
        const city = e.target.value
        const urlRequested = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiWeatherKey}`
        fetch(urlRequested)
            .then(response => response.json())
            .then(data => {
                setIconWeather(data.weather[0].icon)
                setDescriptionWeather(data.weather[0].description)
                setTempWeather(data.main.temp)
                setLocationWeather(data.name)
                setWindWeather(data.wind.speed)

            })
            .catch((err) => {
                console.log('error: ' + err)
            })
        setShowWeatherData(true)
    }

    return (

        <Grid container>
            <Grid item lg={6} align="center">
                <Typography variant="subtitle1" align="center">Select the city that u want to view the weather data.</Typography>


                <FormControl component="fieldset" >
                    <RadioGroup aria-label="gender" name="gender1">
                        <FormControlLabel value="london" control={<Radio />} label="London" onClick={(e) => { handleCityChoosed(e) }} />
                        <FormControlLabel value="dubai" control={<Radio />} label="Dubai" onClick={(e) => { handleCityChoosed(e) }} />
                        <FormControlLabel value="paris" control={<Radio />} label="Paris" onClick={(e) => { handleCityChoosed(e) }} />
                        <FormControlLabel value="singapore" control={<Radio />} label="Singapore" onClick={(e) => { handleCityChoosed(e) }} />
                    </RadioGroup>
                </FormControl>



            </Grid>
            <Grid item lg={6} align="center">
                {showWeatherData ? (renderDataComponent) : ''}
            </Grid>
        </Grid>

    )
}

export default OpenWeather;