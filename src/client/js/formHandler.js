function handleSubmit(event) 
{
    event.preventDefault()
    // check what text was put into the form field
    const message = document.getElementById("name").value;

    Client.getUserData(message).then( function(data) {
        //console.log(data);
        console.log("Calling postdata");
        postdata('/add', {text: message })
        .then(updateUI())
    });

    // Async POST
    const postdata = async ( url = '/api', data = {})=>{
                   console.log("Now calling the postdata request");
        const response = await fetch(url, {
                          method: 'POST',    
                          credentials: 'same-origin',
                           headers: {
                               'Content-Type': 'application/json',
                            },    
                           body: JSON.stringify(data)
               });   
    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
      } catch(error) {
      console.log("error", error);
      }
    }; 

const updateUI = async () => {
    const request = await fetch('/all');
    console.log("Call updateUI");
    try{
      const allData = await request.json();
      console.log("Call updateUI");
      console.log(allData.polarity);

    }catch(error){
      console.log("error", error);
    }
  };
}

export { handleSubmit }
