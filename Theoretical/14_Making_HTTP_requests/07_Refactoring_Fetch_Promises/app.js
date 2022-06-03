const checkStatusAndParse = (response) => {
  if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

  return response.json();
};

const printPlanets = (data) => {
  console.log("Loaded 10 more planets...");
  for (let planet of data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(data.next); //you need to return data here because to return it like
  // the main function  for example : printPlants(data)
  //   Promise.resolve() this will create a brand new promise for you that is resolved so
  // we don't have to go through any of that stuff. So then this returns a promise . Which
  // means I can chain on a date.then afterwards and I'm resolving it with some data.
};

const fetchNextPlanets = (url = "https://swapi.co/api/planets/") => {
  return fetch(url);
};

fetchNextPlanets()
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .catch((err) => {
    console.log("SOMETHING WENT WRONG WITH FETCH!");
    console.log(err);
  });
