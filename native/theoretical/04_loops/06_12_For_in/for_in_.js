const jepodaryWinings = {
    regularPlay: 79999,
    watsonChalange: 67000,
    tournamentOfChampion: 790,
    battleOfTheDeactes: 5000
};

for (let prop in jepodaryWinings) {
    console.log(prop)
    console.log(jepodaryWinings[prop]);
}


let totoal = 0;
for (let prop in jepodaryWinings) {
    totoal += jepodaryWinings[prop]
}

console.log(`ahmad khatib total earnings ${totoal}`);


//for in works also with arrays 
for ( let k in [67,55,4,33,67,8]){
    console.log (k);    
}

//so the output will be 
//  1
//  2
//  3
//  4
//  5
// that mean it will output the key or the property 