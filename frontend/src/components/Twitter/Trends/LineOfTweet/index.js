import React, {useContext} from 'react';
import './style.css'

//HOC
import Aux from '../../../hoc'

//Material UI
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

//Context
import ColorContext from '../../../UseContext/ColorContext'

const useStyles = makeStyles(() => ({
    button: {
        color: '#38A1F3'
    }
}))

const LineOfTweet = ({ nameTweet, urlTweet, tweet_volume }) => {

    const classes = useStyles();

    const theme = useContext(ColorContext)
    console.log(theme)

    return (
        <Aux>
            <p><b className="lineOfTweet">Tweet: </b> <b>{nameTweet}</b></p>
            <p><b className="lineOfTweet">{ tweet_volume? tweet_volume : '?' }</b> <b>Tweets</b></p>
            <Button className={classes.button} target="_blank" href={urlTweet}>see the tweet</Button>
            <br />
        </Aux>
    )
}

export default LineOfTweet