import React, { useState, useRef } from 'react';
import './App.css';

//Material UI
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

//My Components
import OpenWeather from './components/OpenWeather'
import Github from './components/Github'
import Twitter from './components/Twitter'
import Spotify from './components/Spotify'

function App() {

    const [componentSelected, setComponentSelected] = useState(<Spotify />)

    const githubRef = useRef()
    const openweatherRef = useRef()
    const twitterRef = useRef()
    const spotifyRef = useRef()

    const handleClick = (ref) => {

        switch (ref.current.attributes.id.value) {
            case 'openweather':
                setComponentSelected(<OpenWeather />)
                break;
            case 'github':
                setComponentSelected(<Github />)
                break;
            case 'twitter':
                setComponentSelected(<Twitter />)
                break;
            case 'spotify':
                setComponentSelected(<Spotify />)
                break;
            default:
                break
        }

    }

    return (
        <Container className="teste">
            <Typography variant="h6" align="center" className="noSelected">API Management</Typography>
            <Typography variant="body2" align="center" className="noSelected">select below an api to acess and have fun!</Typography>

            <Grid container className="listButtons">

                <Grid item lg={3} align="center">
                    <Button variant="outlined" ref={openweatherRef} id="openweather" onClick={() => { handleClick(openweatherRef) }}>Open Weather</Button>
                </Grid>

                <Grid item lg={3} align="center">
                    <Button variant="outlined" ref={githubRef} id="github" onClick={() => { handleClick(githubRef) }}>Github</Button>
                </Grid>

                <Grid item lg={3} align="center">
                    <Button variant="outlined" ref={twitterRef} id="twitter" onClick={() => { handleClick(twitterRef) }}>Twitter</Button>
                </Grid>

                <Grid item lg={3} align="center">
                    <Button variant="outlined" ref={spotifyRef} id="spotify" onClick={() => { handleClick(spotifyRef) }}>Spotify</Button>
                </Grid>

            </Grid>
            <br className="noSelected" /><br className="noSelected" />

            {componentSelected}

        </Container>

    );
}

export default App;
