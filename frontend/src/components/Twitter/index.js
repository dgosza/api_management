import React, { useEffect, useState } from 'react';
import './style.css'

//Material UI
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

//Icon
import { FaTwitter } from 'react-icons/fa'

//API Backend
import connectApi from '../../services/apiBackend'

//Components of Trends
import TopTrendsWorldwide from './Trends/TopTrendsWorldwide'
import TopTrendsSP from './Trends/TopTrendsSP'
import TopTrendsToronto from './Trends/TopTrendsToronto'
import TopTrendsLondon from './Trends/TopTrendsLondon'

const Twitter = () => {

    const [tweetsLimit, setTweetsLimit] = useState(5)

    const [toptrendsWorldWide, setToptrendsWorldWide] = useState([])
    const [toptrendsSP, setToptrendsWoSP] = useState([])
    const [toptrendsToronto, setToptrendsToronto] = useState([])
    const [toptrendsLondon, setToptrendsLondon] = useState([])

    useEffect(() => {
        connectApi.get('toptrendsWorld')
            .then(result => {
                setToptrendsWorldWide(result.data[0].trends)
            })
            .catch(err => {
                console.log('error: '+err)
            })

        connectApi.get('toptrendsSP')
            .then(result => {
                setToptrendsWoSP(result.data[0].trends)
            })

        connectApi.get('toptrendsToronto')
            .then(result => {
                setToptrendsToronto(result.data[0].trends)
            })

        connectApi.get('toptrendsLondon')
            .then(result => {
                setToptrendsLondon(result.data[0].trends)
            })
    }, [])

    return (
        <Grid container spacing={2} align="center">
            <Grid item lg={12}><FaTwitter size={50} align="center"></FaTwitter></Grid>
            <Grid item container lg={6} spacing={1}>
                <Grid item lg={4}><Button color="primary" variant="outlined" onClick={() => { setTweetsLimit(5) }}>show 05 tweets</Button></Grid>
                <Grid item lg={4}><Button color="primary" variant="outlined" onClick={() => { setTweetsLimit(10) }}>show 10 tweets</Button></Grid>
                <Grid item lg={4}><Button color="primary" variant="outlined" onClick={() => { setTweetsLimit(15) }}>show 15 tweets</Button></Grid>
                <Grid item lg={4}><Button color="primary" variant="outlined" onClick={() => { setTweetsLimit(20) }}>show 20 tweets</Button></Grid>
                <Grid item lg={4}><Button color="primary" variant="outlined" onClick={() => { setTweetsLimit(30) }}>show 30 tweets</Button></Grid>
                <Grid item lg={4}><Button color="primary" variant="outlined" onClick={() => { setTweetsLimit(40) }}>show 40 tweets</Button></Grid>
                <Grid item lg={4}><Button color="primary" variant="outlined" onClick={() => { setTweetsLimit(50) }}>show 50 tweets</Button></Grid>

            </Grid>
            <Grid item lg={6}>
                <h4>Showing {tweetsLimit} tweets per column</h4>
            </Grid>

            <Grid item lg={3}>
                <Paper elevation={1}>
                    <span className="titleTwitter">Top Trends <span>Worldwide</span></span>
                    <TopTrendsWorldwide tweetsWorldwide={toptrendsWorldWide} tweetsLimit={tweetsLimit} />
                </Paper>
            </Grid>

            <Grid item lg={3}>
                <Paper elevation={1}>
                    <span className="titleTwitter">Top Trends <span>São Paulo</span></span>
                    <TopTrendsSP tweetsSP={toptrendsSP} tweetsLimit={tweetsLimit} />
                </Paper>
            </Grid>

            <Grid item lg={3}>
                <Paper elevation={1}>
                    <span className="titleTwitter">Top Trends <span>Toronto</span></span>
                    <TopTrendsToronto tweetsToronto={toptrendsToronto} tweetsLimit={tweetsLimit} />
                </Paper>
            </Grid>

            <Grid item lg={3}>
                <Paper elevation={1}>
                    <span className="titleTwitter">Top Trends <span>London</span></span>
                    <TopTrendsLondon tweetsLondon={toptrendsLondon} tweetsLimit={tweetsLimit} />
                </Paper>
            </Grid>

        </Grid>
    )
}

export default Twitter;