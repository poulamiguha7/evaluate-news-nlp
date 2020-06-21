async function updateUI() 
{
    const request = await fetch('/all');
    try {
    console.log("Update UI called");
    const postSentimentData = await request.json();
    console.log("postSentimentData "+ postSentimentData);
    document.getElementById('results').innerText = postSentimentData.polarity; 
    //document.getElementById('date').innerHTML = allData.date; 
    //document.getElementById('content').innerHTML = allData.userResponse;   
      } catch(error){
          console.log("error", error);
      };
}
export { updateUI }