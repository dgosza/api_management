const express = require('express')
const cors = require('cors')
const app = express();

//Controllers
const spotifyController = require('./controller/spotifyController')
const twitterController = require('./controller/twitterController')

app.use(cors())
app.use(express.json())

//TRENDS TWITTER
app.get('/toptrendsWorld', twitterController.toptrendsWorld)
app.get('/toptrendsSP', twitterController.toptrendsSP)
app.get('/toptrendsToronto', twitterController.toptrendsToronto)
app.get('/toptrendsLondon', twitterController.toptrendsLondon)

//SPOTIFY REQUESTS
app.get('/spotify/mcigu', spotifyController.getMCIGU)
app.get('/spotify/yungbuda', spotifyController.getYungBuda)
app.get('/spotify/thewknd', spotifyController.getTheWknd)
app.get('/spotify/rufus', spotifyController.getRufus)
app.get('/spotify/yunglean', spotifyController.getYungLean)
app.get('/spotify/bones', spotifyController.getBones)
app.get('/spotify/sb', spotifyController.getSuicide)
app.get('/spotify/travis', spotifyController.getTravis)

app.listen(9898)