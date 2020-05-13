const Twit = require('twit')

var T = new Twit({
    consumer_key: 'HFbaHig0MmJ3HJw0Dg2I71344',
    consumer_secret: '2ZShtC7fM0tgCKGc8E6quWodlE6Bhkd0kf7JrAP7O3srVkMfEN',
    access_token: '844367741364645890-StyDavQHcxArpEt8mopfbrkXc4QsH6B',
    access_token_secret: 'pDS8ujxxZO0c8GY56SenrgSovn404KePUbDUM1Z2A9ODo',
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL: true,     // optional - requires SSL certificates to be valid.
})

var toptrendsWorld = ''
var toptrendsSP = ''
var toptrendsToronto = ''
var toptrendsLondon = ''
var users = ''

const getData = (type, data) => {
    switch (type) {
        case 'toptrendsWorld':
            toptrendsWorld = data
            break;
        case 'toptrendsSP':
            toptrendsSP = data
            break;
        case 'toptrendsToronto':
            toptrendsToronto = data
            break;
        case 'toptrendsLondon':
            toptrendsLondon = data
            break;
        case 'users':
            users = data
            break;
    }
}

exports.toptrendsWorld = (request, response) => {
    T.get('https://api.twitter.com/1.1/trends/place.json?id=1', async (err, data, response) => {
        getData('toptrendsWorld', data)
    })
    response.json(toptrendsWorld).sendStatus(200)
}

exports.toptrendsSP = (request, response) => {
    T.get('https://api.twitter.com/1.1/trends/place.json?id=455827', async (err, data, response) => {
        getData('toptrendsSP', data)
    })
    response.json(toptrendsSP).sendStatus(200)
}

exports.toptrendsToronto = (request, response) => {
    T.get('https://api.twitter.com/1.1/trends/place.json?id=4118', async (err, data, response) => {
        getData('toptrendsToronto', data)
    })
    response.json(toptrendsToronto).sendStatus(200)
}

exports.toptrendsLondon = (request, response) => {
    T.get('https://api.twitter.com/1.1/trends/place.json?id=44418', async (err, data, response) => {
        getData('toptrendsLondon', data)
    })
    response.json(toptrendsLondon).sendStatus(200)
}