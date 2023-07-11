const axios = require("axios");

async function getFiveRandomUsers(){
  try{
    const resp = await axios.get("https://randomuser.me/api?results=5")
    const persons = resp.data.results
  }
  catch(err){
    console.log("Something is wrong")
  }
}

getFiveRandomUsers()
