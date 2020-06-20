const dotenv = require('dotenv');
dotenv.config();

const unirest = require('unirest');
const API_KEY = "967e2489fbbba28294f16fe8e2fd24e7";
const baseURL = "https://aylien-text.p.rapidapi.com/";
const articleURL = "https://www.biography.com/news/frida-kahlo-bus-accident";
const sentiment = "sentiment?url=";
const requestString = baseURL+sentiment+articleURL;

const AYLIENTextAPI = require("aylien_textapi");
const textapi = new AYLIENTextAPI({
    application_id: process.env.AYLIEN_APP_ID,
    application_key: process.env.AYLIEN_APP_KEY
    //application_id: "6b5ab8a5",
    //application_key: "967e2489fbbba28294f16fe8e2fd24e7"
  });

console.log(__dirname);
console.log(`Your API key is ${process.env.API_KEY}`);

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express()
app.use(express.static('dist'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

projectData = {};

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

// Mock API data 

mockdata = 
{
    "polarity": "positive",
    "subjectivity": "objective",
    "text": "good News",
    "polarity_confidence": "0.5331486463546753",
    "subjectivity_confidence": "0.8866126393723417"
  } ;

function sendTestData(req,res){
    console.log(mockdata);
    res.send(mockdata);
};
app.get('/test', sendTestData);

// Send response data to update UI
function sendProjData(req,res){
    console.log(projectData);
    res.send(projectData);
}
app.get('/all', sendProjData);

// POST
app.post("/api", postSentiment);

function postSentiment(req, res){
    let newsentiment = req.body;
    projectData["polarity"] = newsentiment.polarity;
    projectData["subjectivity"] = newTempData.subjectivity;
    projectData["polarity_confidence"] = newTempData.polarity_confidence;
    console.log("printing in postSentiment: ");
    console.log(postSentiment); 
};
  
// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
});

