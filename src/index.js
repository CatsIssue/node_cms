
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// configuring path-s
const publicPath = path.join(__dirname, '../public');
console.log(publicPath);

// some configuration
app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// global constants
const port = process.env.PORT || 3000;
//

app.get('/', (req, res) => {
    res.render('main');
})
app.listen(port, () => {
    console.log("Server running on port: ", port);
})