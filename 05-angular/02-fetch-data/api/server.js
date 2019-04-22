
const parser = require('body-parser');
const express = require('express');


const port = 8000;
const app = express();



// routes
app.use(express.static( __dirname + '/public/dist/public' ));




app.listen(port, () => console.log(`express listening on port ${ port }`));