import React, { useState } from 'react'

//Album Component
import Album from './Album'

//Material UI
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

//API Backend
import connectApi from '../../services/apiBackend'

//Icons
import { FaSpotify } from 'react-icons/fa'

const Spotify = () => {

    const [dataToBeRender, setDataToBeRender] = useState([])


    const handleArtist = (artist) => {
        connectApi.get(`spotify/${artist}`)
            .then(result => {
                setDataToBeRender(result.data.items)
            })
            .catch(err => {
                console.log('error: ' + err)
            })

    }

    return (
        <Grid container align="center">
            <Grid item lg={12}>
                <FaSpotify size={50} />
                <p>select below an artist to see their respective albums</p>
            </Grid>

            <Grid item container lg={12} spacing={1}>
                <Grid item lg={2}><Button variant="outlined" onClick={() => { handleArtist('mcigu') }}>MC Igu</Button></Grid>
                <Grid item lg={2}><Button variant="outlined" onClick={() => { handleArtist('yungbuda') }}>Yung Buda</Button></Grid>
                <Grid item lg={2}><Button variant="outlined" onClick={() => { handleArtist('thewknd') }}>The Weeknd</Button></Grid>
                <Grid item lg={2}><Button variant="outlined" onClick={() => { handleArtist('rufus') }}>RÜFÜS DU SOL</Button></Grid>
                <Grid item lg={2}><Button variant="outlined" onClick={() => { handleArtist('yunglean') }}>Yung Lean</Button></Grid>
                <Grid item lg={2}><Button variant="outlined" onClick={() => { handleArtist('bones') }}>Bones</Button></Grid>
                <Grid item lg={6}><Button variant="outlined" onClick={() => { handleArtist('sb') }}>$uicideBoy$</Button></Grid>
                <Grid item lg={6}><Button variant="outlined" onClick={() => { handleArtist('travis') }}>Travis Scott</Button></Grid>

            </Grid>
            <Grid item lg={12}><br /></Grid>
            <Grid item container lg={12} spacing={1}>
                {
                    dataToBeRender.map((eachAlbum, index) => (
                        <Grid item lg={4} key={index}>
                            <Album
                                nameAlbum={eachAlbum.name}
                                totalTracks={eachAlbum.total_tracks}
                                released={eachAlbum.release_date}
                                imageAlbum={eachAlbum.images[0].url}
                                urlAbum={eachAlbum.external_urls.spotify}
                            />
                        </Grid>)
                    )
                }
            </Grid>

        </Grid>
    )
}

export default Spotify