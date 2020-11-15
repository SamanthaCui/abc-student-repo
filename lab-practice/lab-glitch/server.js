// console.log("byebyebye");
//
// let x = 1;
// let y = 1;
// console.log(x+y);


const express = require('express'); //get the express code from node_modules(to where it was installed)
const app = express();
const port = 3000;

//define routers behavior, what to return on which request
// app.use(express.static("public"));

let samcount = 0;

// "/" route
app.get('/', (req, res) => {
  samcount = samcount + 1;
  console.log(samcount + " people are looking at this site!");
  // console.log("someone is looking at this site!");
  // console.log(req);
  // res.send('Hello World!');
  res.sendFile(__dirname + '/sam/index.html');
  // console.log(req.query.time);
    // console.log(req.query.name);
    // console.log(__dirname);
    //So __dirname is a variable holding the absolute path of the project.
    //ocalhost:3000/?name=sam&time=day
})

// "/sam" route
app.get('/sam', (req, res) => {
  console.log("someone is wishing to meet sam!");
  res.send('hey sam');
})


// start server, listening to a specific port

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
