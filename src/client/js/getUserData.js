async function getUserData(input_text) 
{
    const response = await fetch('/test');
    try {
     console.log("Get dummy API call");
     let allData = await response.json();
      allData = {
        "polarity": "positive",
        "subjectivity": "objective",
        "text": "\"good News\"",
        "polarity_confidence": 0.5331486463546753,
        "subjectivity_confidence": 0.8866126393723417
      };
     console.log("Sentiment recieved from test message: "+ allData.polarity);  
     return allData;
    } 
    catch (error) {
      console.log(error);
}

}
export { getUserData }
