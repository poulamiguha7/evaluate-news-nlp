async function updateUI() 
{
    const request = await fetch('/all');
    try {
    console.log("Update UI called");
    const postSentimentData = await request.json();
    console.log("postSentimentData "+ postSentimentData);
    document.getElementById('text_polarity').innerText = postSentimentData.polarity; 
    document.getElementById('text_subjectivity').innerText = postSentimentData.subjectivity;
    document.getElementById('text_polarity_confidence').innerText = postSentimentData.polarity_confidence;
    document.getElementById('text_subjectivity_confidence').innerText = postSentimentData.subjectivity_confidence;
    document.getElementById('mytext').innerText = postSentimentData.text;
      } catch(error){
          console.log("error", error);
      };
}
export { updateUI }