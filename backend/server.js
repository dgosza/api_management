const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())



//GET
app.GET('/', (request, response) => {
    response.sendStatus(200)

})

app.listen(9898)