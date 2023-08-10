async function getPlanets() {
  const res = await axios.get("https://swapi.co/api/planets/");
  console.log(res.data); //only runs once the previous line is complete
  //(the axios promise is resolved) so we don't have to use that .then it looks
  // It's important to know though you can only use await inside of an async function.
}

getPlanets();

// Without async/await...

// function getPlanets() {
// 	return axios.get('https://swapi.co/api/planets/');
// }

// getPlanets().then((res) => {
// 	console.log(res.data);
// });
