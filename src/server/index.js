
const dotenv = require('dotenv');
dotenv.config();

console.log(__dirname);

var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express();
app.use(express.static('dist'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
});

// Set project data
projectData = {};

//setting up aylien API
const aylien = require("aylien_textapi");

const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

app.post("/api", (req, res) => {
    console.log("Getting real data from Aylien");
    console.log(req.body);
    textapi.sentiment({
      'text': req.body.text,
      'url': 'https://api.aylien.com/api/v1'
    }, function(error, response) {
      if (error === null) {
        console.log(response);
        res.send(response);
      }else {
        console.log(error);
      }
    })
  });

function getAylienSentiment(req, res) 
{
    console.log("Getting real data from Aylien");
    console.log(req.body);
    textapi.sentiment({
      'text': 'Feeling awesome!', //req.body.formText,
      'url': 'https://api.aylien.com/api/v1'
    }, function(error, response) {
      if (error === null) {
        console.log(response);
        res.send(response);
      }else {
        console.log(error);
      }
    })
    };

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

// Mock API data 
mockdata =
{
    "polarity": "negative",
    "subjectivity": "objective",
    "text": "good News",
    "polarity_confidence": "0.5331486463546753",
    "subjectivity_confidence": "0.8866126393723417"
  } ;

function sendMockSentimentData(req,res){
    console.log("Sending mockdata:");
    console.log(mockdata);
    res.send(mockdata);
};

//app.get('/sentiment', sendMockSentimentData);
app.get('/sentiment', getAylienSentiment);

// Send response data to update UI
function sendProjData(req,res){
    console.log("Calling /all GET sto get projectData as below:");
    console.log(projectData);
    res.send(projectData);
};
app.get('/all', sendProjData);

// POST
app.post("/add", postSentiment);
function postSentiment(req, res){
    let newsentiment = req.body;
    projectData["polarity"] = newsentiment.polarity;
    projectData["subjectivity"] = newsentiment.subjectivity;
    projectData["polarity_confidence"] = newsentiment.polarity_confidence;
    projectData["subjectivity_confidence"] = newsentiment.subjectivity_confidence;
    projectData["text"] = newsentiment.text;
    console.log("Under /add POST request this is projectData:");
    console.log(projectData);
};
  


