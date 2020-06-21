function handleSubmit(event) {
  event.preventDefault();

  const message = document.getElementById('name').value;

  if (!message) return;
  Client.getUserData(message)
  .then(function(getuserdata)
                {
                  console.log('getuserdata output: '+ getuserdata);
                   postdata('/add', { polarity: getuserdata.polarity, 
                                      subjectivity: getuserdata.subjectivity, 
                                      polarity_confidence: getuserdata.polarity_confidence,
                                      subjectivity_confidence: getuserdata.subjectivity_confidence, 
                                      text: getuserdata.text
                                    } 
                            );
                }).then(Client.updateUI());

 // Async POST 
 const postdata = async (url = '/add', data = {} )=>{
      console.log("Now calling the postdata request");
      console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
              'Content-Type': 'application/json',
             },       
    body: JSON.stringify(data), 
  });
  try {
       console.log(response.text);
       const newData = await response.json();
       console.log(newData );
       return newData;
      }catch(error) {
        console.log("Inside error: Data: ", data);
     }
};

}

export { handleSubmit }

