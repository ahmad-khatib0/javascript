// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function() {
// 	console.log('FIRST REQUEST WORKED!!!');
// 	const data = JSON.parse(this.responseText);
// 	const filmURL = data.results[0].films[0];
// 	const filmReq = new XMLHttpRequest();
// 	filmReq.addEventListener('load', function() {
// 		console.log('SECOND REQUEST WORKED!!!');
// 		const filmData = JSON.parse(this.responseText);
// 		console.log(filmData.title);
// 	});
// 	filmReq.addEventListener('error', function(e) {
// 		console.log('ERROR!!', e);
// 	});
// 	filmReq.open('GET', filmURL);
// 	filmReq.send();
// });
// firstReq.addEventListener('error', (e) => {
// 	console.log('ERROR!!!!!!');
// });
// firstReq.open('GET', 'https://swapi.co/api/planets/');
// firstReq.send();
// console.log('Request Sent!');

fetch("https://swapi.co/api/planetsuy21/")
  .then((response) => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
    // the statements after throw won't be executed if there is an error happened
    response.json().then((data) => {
      // Here we call a Jason method and then when it finishes it's resolved we can have access to
      // the data , so here it will be twice of resolved and rejected , the first for the fontStretch:
      //   and the second for the json method  . so it takes a little bit more
      for (let planet of data.results) {
        console.log(planet.name);
      }
    });
  })
  .catch((err) => {
    console.log("SOMETHING WENT WRONG WITH FETCH!");
    console.log(err);
  });
