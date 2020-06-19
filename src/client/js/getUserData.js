async function getUserData(input_text) 
{
  alert(input_text);

 // Async POST 
const postdata = async ( url = '/sentiment', data = {"text": "Very well!"})=>{

    console.log("Now calling the postdata request");
    
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
   // Body data type must match "Content-Type" header        
    body: JSON.stringify(data), 
  });
    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};


}

export { getUserData }
