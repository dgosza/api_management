import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard({ nameUser, avatar, bio, linkProfile, login, following, followers }) {
    
    const classes = useStyles();

    const linkRepository = `https://github.com/${login}?tab=repositories`

    return (

        <Grid item lg={4}>
            <Card className={classes.root}>

                <CardMedia
                    className={classes.media}
                    image={avatar}
                    title="User Avatar"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{nameUser}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{bio}</Typography>
    <Typography variant="body2" color="textSecondary" component="p">Following: {following} Followers:{followers}</Typography>
                </CardContent>

                <CardActions>
                    <Button size="small" color="primary" href={linkProfile} target="_blank">Github Profile</Button>
                    <Button size="small" color="primary" href={linkRepository} target="_blank">Github Repository</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
