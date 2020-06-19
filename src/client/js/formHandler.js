function handleSubmit(event) 
{
    event.preventDefault()
    // check what text was put into the form field
    const text = document.getElementById("name").value;

 if (!text) return;

  console.log(text);

  fetch("/api", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  })
    .then(res => res.json())
    .then(data => {
      console.log(data.json);
    });

   
}

    /*
    console.log(formText);
    Client.getUserData(formText)
        .then(data => console.log(data)); 
        */

   /* Client.checkForName(formText)
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })*/


export { handleSubmit }
