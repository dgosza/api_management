const Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: '53c721a97b7543ad984205099f271089',
    secret: '8dcbc43f18354c849789c6d476305f96'
});

var igu = ''
var yungbuda = ''
var thewknd = ''
var rufus = ''
var yunglean = ''
var bones = ''
var sb = ''
var travis = ''

const returnData = (data, type) => {
    switch (type) {
        case 'igu':
            igu = data
            break;
        case 'yungbuda':
            yungbuda = data
            break;
        case 'thewknd':
            thewknd = data
            break;
        case 'rufus':
            rufus = data
            break;
        case 'yunglean':
            yunglean = data
            break;
        case 'bones':
            bones = data
            break;
        case 'sb':
            sb = data
            break;
        case 'travis':
            travis = data
            break;

    }
}

exports.getMCIGU = (request, response) => {
    spotify
        .request('https://api.spotify.com/v1/artists/5K854sjdzabwOy9KltU3Po/albums?market=ES&limit=40')
        .then(function (data) {
            returnData(data, 'igu')
        })
        .catch(function (err) {
            console.error('Error occurred: ' + err);
        });
    response.json(igu).sendStatus(200)
}

exports.getYungBuda = (request, response) => {
    spotify
        .request('https://api.spotify.com/v1/artists/34JhhuxlkDFSA5ek4AuZOp/albums?market=ES&limit=40')
        .then(function (data) {
            returnData(data, 'yungbuda')
        })
        .catch(function (err) {
            console.error('Error occurred: ' + err);
        });
    response.json(yungbuda).sendStatus(200)
}

exports.getTheWknd = (request, response) => {
    spotify
        .request('https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ/albums?market=ES&limit=40')
        .then(function (data) {
            returnData(data, 'thewknd')
        })
        .catch(function (err) {
            console.error('Error occurred: ' + err);
        });
    response.json(thewknd).sendStatus(200)
}

exports.getRufus = (request, response) => {
    spotify
        .request('https://api.spotify.com/v1/artists/5Pb27ujIyYb33zBqVysBkj/albums?market=ES&limit=40')
        .then(function (data) {
            returnData(data, 'rufus')
        })
        .catch(function (err) {
            console.error('Error occurred: ' + err);
        });
    response.json(rufus).sendStatus(200)
}

exports.getYungLean = (request, response) => {
    spotify
        .request('https://api.spotify.com/v1/artists/67lytN32YpUxiSeWlKfHJ3/albums?market=ES&limit=40')
        .then(function (data) {
            returnData(data, 'yunglean')
        })
        .catch(function (err) {
            console.error('Error occurred: ' + err);
        });
    response.json(yunglean).sendStatus(200)
}

exports.getBones = (request, response) => {
    spotify
        .request('https://api.spotify.com/v1/artists/5v2WhpA59TJSdPh7LCx1lN/albums?market=ES&limit=40')
        .then(function (data) {
            returnData(data, 'bones')
        })
        .catch(function (err) {
            console.error('Error occurred: ' + err);
        });
    response.json(bones).sendStatus(200)
}

exports.getSuicide = (request, response) => {
    spotify
        .request('https://api.spotify.com/v1/artists/1VPmR4DJC1PlOtd0IADAO0/albums?market=ES&limit=40')
        .then(function (data) {
            returnData(data, 'sb')
        })
        .catch(function (err) {
            console.error('Error occurred: ' + err);
        });
    response.json(sb).sendStatus(200)
}

exports.getTravis = (request, response) => {
    spotify
        .request('https://api.spotify.com/v1/artists/0Y5tJX1MQlPlqiwlOH1tJY/albums?market=ES&limit=40')
        .then(function (data) {
            returnData(data, 'travis')
        })
        .catch(function (err) {
            console.error('Error occurred: ' + err);
        });
    response.json(travis).sendStatus(200)
}