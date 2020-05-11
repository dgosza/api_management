import React, { useState } from 'react';
import './style.css'

//Material I Components
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

//Icons
import { AiFillGithub } from 'react-icons/ai'

//BoxUser
import BoxUser from './BoxUser'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Github = () => {

    //Manage state of alerts
    const [openSucess, setOpenSucess] = useState(false);
    const [openFailed, setOpenFailed] = useState(false);

    const [users, setUsers] = useState([])

    const handleUserName = (e) => {
        if (e.keyCode === 13) {
            const userName = e.target.value

            fetch(`https://api.github.com/users/${userName}`)
                .then(response => response.json())
                .then(data => {
                    if (data.message === "Not Found") {
                        setOpenFailed(true)
                    } else {
                        const userData = {
                            avatar: data.avatar_url,
                            bio: data.bio,
                            name: data.name,
                            login: data.login,
                            linkProfile: data.html_url,
                            followers: data.followers,
                            following: data.following
                        }
                        const merge = [...users, userData]
                        setUsers(merge)
                        setOpenSucess(true)
                    }
                })

        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        //set the all alert to close
        setOpenSucess(false)
        setOpenFailed(false)
    };

    const sucess = (
        <Snackbar open={openSucess} autoHideDuration={4000} onClose={() => { handleClose() }}>
            <Alert onClose={() => { handleClose() }} severity="success">
                Valid user
            </Alert>
        </Snackbar>
    )

    const error = (
        <Snackbar open={openFailed} autoHideDuration={4000} onClose={() => { handleClose() }}>
            <Alert onClose={() => { handleClose() }} severity="error">
                Invalid user
            </Alert>
        </Snackbar>
    )

    return (

        <Grid container spacing={3}>

            <Grid item lg={12} className="textFieldInput">
                <AiFillGithub size={50}></AiFillGithub>
                <h5>Type ur username on Github</h5>
                <TextField variant="outlined" label="Username" onKeyUp={(e) => { handleUserName(e) }}></TextField>
            </Grid>


            {users.map((eachUser, index) => {
                return( <BoxUser key={index} nameUser={eachUser.name} login={eachUser.login} following={eachUser.following}  followers={eachUser.followers}  avatar={eachUser.avatar} bio={eachUser.bio} linkProfile={eachUser.linkProfile} /> )
            })}

            {/* Alert Messages  */}
            {sucess}
            {error}


        </Grid>


    )
}

export default Github