import React, { useState } from 'react';
import './App.css';

//Material UI
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

//My Components
import OpenWeather from './components/OpenWeather'

function App() {

    const [componentSelected, setComponentSelected] = useState(<OpenWeather></OpenWeather>)

    const handleClick = () => {
        setComponentSelected(<OpenWeather/>)
    }

    return (
        <Container className="teste">
            <Typography variant="h6" align="center" className="noSelected">API Management</Typography>
            <Typography variant="body2" align="center" className="noSelected">select below an api to acess and have fun!</Typography>

            <Grid container className="listButtons">

                <Grid item lg={3} align="center">
                    <Button variant="outlined" onClick={() => { handleClick() }}>Open Weather</Button>
                </Grid>

                <Grid item lg={3} align="center">
                    <Button variant="outlined">--</Button>
                </Grid>

                <Grid item lg={3} align="center">
                    <Button variant="outlined">--</Button>
                </Grid>

                <Grid item lg={3} align="center">
                    <Button variant="outlined">--</Button>
                </Grid>

            </Grid>
            <br className="noSelected"/><br className="noSelected"/>

            {componentSelected}

        </Container>

    );
}

export default App;
