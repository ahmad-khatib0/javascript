// TO CONNECT TO ATLAS : FIRST create cluster , then , add your IP to the whitelist
// then connect it to your compass app and to your terminal
// then connect it to your application , by making env variable (called DATABASE) and pasting
// THe url in it , replace the name after .net/name with your databaseName in that cluster
// to connect locally , in .env put DATABASE_LOCAL=mongodb://localhost:27010/database_name

app.get('/api/v1/tours/:id/:x/:y', (req, res) => {
  console.log(req.params); // params is for the variables
  // http://127.0.0.1:3000/api/v1/tours/5/6/7  => { id: '5', x: '6', y: '7' }, put ? in front of y and it
  //   will  be optional, so it won't break the url if you didn't put it
});

const id = req.params.id * 1; //this is to convert it to integer
app.use((req, res, next) => {
  console.log('hello from the middleware ');
  next(); //if you called function placed before this next (this entire function), this
  // console.log won't get executed so the order in express dose matter, so because of that we define the
  // middlewares at the top of the file
});

router.param('id', (req, res, next, value) => {
  //here called Param Middleware , and its middleware runs for defined paramter (after url )
  console.log(`tour id is ${value}`); //this is locally to the file(Route )
});

////////note if you are on postman and the request not showing result ,check the next on middlewares

console.log(app.get('env')); //to see on which stage your application on (production , development ,,,,,)
console.log(process.env); //to show bunch of infos about your current environment
// NOD_ENV=development nodemon server.js

const queryObject = { ...req.query };
const excludeFields = ['page', 'sort', 'limit', 'fields'];
excludeFields.forEach((el) => delete queryObject[el]);
const tours = await Tour.find(queryObject); //or shorter way

const { page, sort, limit, fields, ...rest } = req.query;
const tours = await Tour.find(rest);

// http://127.0.0.1:3000/api/v1/tours?duration[gte]=5&difficulty=easy
// by running this uul you'll get :
//{difficulty : "easy" , duration:{gte : 5 } }  ---so it just missing the $ sing
//{difficulty : "easy" , duration:{$gte : 5 } }

queryString = queryString.replace(
  /\b(gte|gt|lte|lt)\b/g,
  (match) => `$${match}`
);
//replace the matched with the same word but put $ in front of it ,
// g is very important , to make this replace method to run each time

// http://127.0.0.1:3000/api/v1/tours?sort=-price //this minus before price means desc
// http://127.0.0.1:3000/api/v1/tours?sort=-price,-ratingAverage //this coma to search with tow criteria

const sortBy = req.query.sort.split(',').join(' '); //this to remove the coma from the incoming url
//in order to replace it with the space to search with tow criteria in DB

query = query.select('-__v'); //this minus with select it means to exclude this field

// in schema this field : select : false  ,,,,means to not send it with response

const page = req.query.page * 1 || 1;
//convert it to integer by multiplying by 1 , and the default is 1( || 1)
const limit = req.query.limit * 1 || 100;
const skip = (page - 1) * limit;
//-1 for example in page 2 skip will be 11-20 , so it should be converted to 10 not 11 , so this Url :
// http://127.0.0.1:3000/api/v1/tours?page=2&limit=4 , will bring 4 result from the second page

// page=3&limit=10 , 1-10 page 1 , 11-20 page 2  , 21-30 page 3
query = query.skip(skip).limit(limit);

// $sort: {$avgPrice: 1;}         //it  means asc sort
// { $match: { $ne: 'EASY' } }    // exclude the ones that NOT = easy

tourSchema.pre(/^find/, function (next) {});
// this will make it work for each query starts with find

const app = 9;
app.use((err, req, res, next) => {
  // So by specifying four parameters, Express automatically knows that this entire
  // function here is an error handling middleware.
});

// const user = User.findOne(user).select("+password"); //+because its excluded from being shown


{email : {"$gt" : " "}} //this will work because it will always be true 


locations : [{
      type: {
        type: String,
        enum: ['Point'],
      },
      coordinates: [Number],
    }], //spesfiying an array inside schema will make new document inside paretnt doucment 



     {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  } /// all this does is to really make sure that when we have a virtual property, basically a 
  // field that is not stored in the database  but calculated using some other value. 
  // So we want this to also show up whenever there is an output.


const router = express.Router({mergeParams: true });
router.use("/:tourId/reviews" , reviewRouter)


//findOneAndUpdate/Delete  , are shorthand for  findOneByIdAndUpdate/Delete



reviewSchema.pre(/^findOneAnd/, async function (next) {
  // const r = await this.findOne(); //this is a hack to get access to ducument inside query
  //we need to do one for /^findOneAnd/ before (pre) , and one after (post)
  // becaue if we do it just post directly , so we won't be able to  get access to the query (r)
  //because the query has already executed, also then we can not run this function calcAverageRatings
  this.r = await this.findOne(); //to give the access to the next function in order to get thi ID
  console.log(this.r);
  next() ; 
});

reviewSchema.post(/^findOneAnd/, async function () {
 // await  this.r.calcAverageRatings(this.r.tour); //or 
   await docs.constructor.calcAverageRatings(docs.tour);
  // "docs" parameter which is nothing but the executed document. Since we have the 
  // document, we can use constructor on that to get the model ie docs.constructor . Now since
  //  we have model, we know that we can directly call statics method on that

});