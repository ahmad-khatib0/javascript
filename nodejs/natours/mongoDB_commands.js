// db.tours.insertOne({ name : "data" , price : 88  })
// db.tours.insertMany( [ {: "data"   } , { name : "ahmad" , price : 66 , age : 84 } ] )
// what inside the curly brackets is called document , and tours is called collection

// show dbs
// use db_name
// show collections         //(its like the tables in SQL )
//quit()                    //to exist the command

//and queries
// db.tours.find()
// db.tours.find(name : "what you are looking for ")
// db.tours.find({price :  {$lte: 500}})                               //$ its for operators , lte is less then or =
// db.tours.find( {price :  {$lte: 500} , rating {$gte : 4.4 } }})     //greater or =

//or queries
// db.tours.find({ $or: [ {price: {$lt: 500}} , {rating : {$gte : 4.4 }}  ]})
// db.tours.find({ $or: [ {price: {$lt: 500}} , {rating : {$gte : 4.4 }}  ]},  {name : 1})
//outPut only the name field

// db.tours.updateOne({name :  "the forest hiker" } , {$set: {price : 11}})
// db.tours.updateMany({ price:{$gte: 70} , rating :{$gte: 4.5} } ,{$set: {pro:true }})

// db.tours.deleteMany({ rating:{$lte:4.5} })
//db.tours.deleteMany({})
