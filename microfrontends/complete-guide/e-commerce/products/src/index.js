import('./bootstrap');
// All this does is give webpack the ability to asynchronously load up the bootstrap JS file.
// And because we are loading up that code asynchronously, Westpac has the opportunity in the browser
// just to realize that before we run this code, we also have to fetch Faker.
