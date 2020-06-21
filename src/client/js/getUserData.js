async function getUserData(input_text) 
{
  const response =  await fetch("/api", 
              {
                method: "POST",
                mode: "cors",
                headers: { 
                    "Content-Type": "application/json" 
                  },
               body: JSON.stringify({ text: input_text })
              }) ;
        try {
              console.log("Call getUserData to get sentiment");
              const allData = await response.json();
              console.log(allData);
              return allData;
              } catch(error){
                console.log("error", error);
              };
}

export { getUserData }
