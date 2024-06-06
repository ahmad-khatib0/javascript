const firstReq = new XMLHttpRequest();
firstReq.addEventListener("load", function () {
  console.log("IT WORKED!!!");
  //in this case it probably makes more sense to use a standard function
  //expression because we want the value of this.responseText to refer to the firstReq object.
  const data = JSON.parse(this.responseText);
  // parse , turn the infos that we try to access in more readable way like a js object
  //   console.log(data);
  for (let planet of data.results) {
    console.log(planet.name);
  }
});
firstReq.addEventListener("error", () => {
  console.log("ERROR!!!!!!");
});
firstReq.open("GET", "https://swapi.co/api/planets/");
// we tell it what type of requests we want to get request telling it where to send the 
// request to telling it to send it.
firstReq.send();
console.log("Request Sent!"); //remember that the browser is who sending the requests not JS
// because  of the  request will take time  . so request sent will be executed first
