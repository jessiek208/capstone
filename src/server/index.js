
const dotenv = require('dotenv');
dotenv.config();


var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const { response } = require('express');
const { DefaultDeserializer } = require('v8');

const app = express()

const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

//creates link for API to utilize and returns response from API to client
app.post('/analyze', bodyParser.json(), function(req, res) {
    const API_Key = process.env.API_Key;
    const articleLink = req.body.articleLink;

    const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
    const params = `?key=${API_Key}&lang=en&model=general&url=${articleLink}`;
    const fetchURL = baseURL + params;
    console.log(fetchURL);

    fetch(fetchURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/JSON", 
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        res.send({
            score_tag: data.score_tag,
            subjectivity: data.subjectivity,
            irony: data.irony
        })
    })
});