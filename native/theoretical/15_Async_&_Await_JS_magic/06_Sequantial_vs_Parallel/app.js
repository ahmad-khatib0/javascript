// SEQUENTIAL REQUESTS!
async function get3PokemonSequential() {
  const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
  // it's important to note they are happening in sequence so
  // this poke1 has to finish completely before this poke2 .
  const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
  //when you put await there it waits for a resolved value and stores that resolved
  //value in the variable so poke1 is an actual response
  const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
  console.log(poke1.data);
  console.log(poke2.data);
  console.log(poke3.data);
}

// PARALLEL REQUESTS!
async function get3Pokemon() {
  const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
  //console.log(prom1) // => promise  pending
  //the requests are being sent roughly at the same time.  as fast as JavaScript can send them off or the browser

  const poke1 = await prom1;
  //here you needed to store the awaits in consts because await need to be stored in an actual
  //variable to  hold the promises . and if you didn't you will get undefined
  const poke2 = await prom2;
  const poke3 = await prom3;
  console.log(poke1.data);
  console.log(poke2.data);
  console.log(poke3.data);
}

get3Pokemon();

// *******************************************
// A better demonstration of the difference...
// *******************************************
function changeBodyColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      //it means after delay   backgroundColor will be that color passed over
      //notice this won't work if wil be reflected color = document.body.style.backgroundColor;
      resolve();
    }, delay);
  });
}
// changeBodyColor("red ", 1000);

// IN SEQUENCE
// async function lightShow() {
//   await changeBodyColor("teal", 1000);
//   await changeBodyColor("pink", 1000);
//   await changeBodyColor("indigo", 1000);
//   await changeBodyColor("violet", 1000);
// }
// lightShow();

// IN PARALLEL...
// Everything is "sent off" at the same time
async function lightShow() {
  const p1 = changeBodyColor("teal", 1000);
  const p2 = changeBodyColor("pink", 1000);
  const p3 = changeBodyColor("indigo", 1000);
  const p4 = changeBodyColor("violet", 1000);
  await p1;
  await p2;
  await p3;
  await p4;
}
lightShow(); //if you run this it will take less than sec because its in parallel
