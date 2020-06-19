const dotenv = require('dotenv');
dotenv.config();

projectData = {}

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express()
app.use(express.static('dist'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
// npm install cors --save
const cors = require('cors');
app.use(cors());

const AYLIENTextAPI = require("aylien_textapi");

const textapi = new AYLIENTextAPI({
    //application_id: process.env.AYLIEN_APP_ID,
    //application_key: process.env.AYLIEN_APP_KEY
    application_id: "6b5ab8a5",
    application_key: "967e2489fbbba28294f16fe8e2fd24e7"
  });

console.log(__dirname);
console.log(`Your API key is ${process.env.API_KEY}`);

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
});

function sendProjData(req,res){
    console.log(projectData);
    res.send(projectData);
}
app.get('/all', sendProjData);

app.post("/api", (req, res) => {
    const { url: text } = req.body;
    console.log("Request to '/api' endpoint", text);
    textApi.sentiment({ text }, (error, result, remaining) => {
      console.log("Aylien Callback", result, remaining);
      res.send(result);
    });
  });
  
// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
});

