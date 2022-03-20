const cors = require('cors');
const functions = require("firebase-functions");
const axios = require('axios');
//firebase is serverless, ons kan n backend gee met hierdie JS wat geskryf word. Hierdie is basies die "backend"

//cors resolved schedule 
exports.getSchedule = functions.https.onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')

    key = '0d7764cec6ff4982b6257b85ab293701'
    try {
        const response = await axios.get(`https://api.sportsdata.io/v3/mma/scores/json/Schedule/UFC/2022?key=${key}`)
        const data = await response.data

        if (data) {
            return res.status(200).send({ data: data })
        }
    } catch (error) {
        alert(error)
    }
});
// get event
exports.getEvent = functions.https.onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')
    // fuck u cors
    // https://stackoverflow.com/questions/62818364/firebase-cloud-function-cors-error-with-axios-request
    res.set('Access-Control-Allow-Headers', 'Content-Type')

    key = '0d7764cec6ff4982b6257b85ab293701'
    eventId = req.body; //set req(soos promise), ons soek body van request. event id na hierdie om hier onder te gebruik
    try {
        const response = await axios.get(`https://api.sportsdata.io/v3/mma/scores/json/EVENT/${eventId}?key=${key}`)
        const data = await response.data

        if (data) {
            return res.status(200).send({ data: data })
        }
    } catch (error) {
        console.log(error)
    }
});

// get fighters
exports.getFighters = functions.https.onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')

    key = '0d7764cec6ff4982b6257b85ab293701'
    try {
        const response = await axios.get(`https://api.sportsdata.io/v3/mma/scores/json/Fighters?key=${key}`)
        const data = await response.data

        if (data) {
            return res.status(200).send({ data: data })
        }
    } catch (error) {
        alert(error)
    }
});
//API is klaar geskryf basies. Nou binne console toe -> enige updates hier, moet : firebase deploy --only functions