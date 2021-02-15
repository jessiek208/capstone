const projectData = {};

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
app.listen(8082, function () {
    console.log('Example app listening on port 8082!')
})

app.get('/all', function (req, res) {
    res.send(projectData);
  });

//posts data as explained in addData function below
app.post('/add', addData);

//opted to pull only required data 
function addData(req, res){
    console.log('doing it');
    projectData.latitude = req.body.latitude;
    res.send(projectData);
}