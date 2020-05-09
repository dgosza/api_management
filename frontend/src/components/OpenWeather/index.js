import React from 'react';

//Material Ui Components
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

//BoxWeather
import BoxWeather from './BoxWeather'

const OpenWeather = () => {
    return (
        
        <Grid container>
            <Grid item lg={6}>
                <Typography variant="body2" align="center">Select the city that u want to view the weather data.</Typography>

            </Grid>
            <Grid item lg={6} align="center">
                <BoxWeather></BoxWeather>
            </Grid>
        </Grid>

    )
}

export default OpenWeather;