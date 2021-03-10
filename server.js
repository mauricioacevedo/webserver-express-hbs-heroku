const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

//get heroku port from environment
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

// Express HBS engineeeee
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', function (req,res) {

    res.render('home',{
        name: 'fabri aCEVEDO   ',
        year: new Date().getFullYear()
    });

});

app.get('/about', function (req,res) {

    res.render('about',{
        name: 'fabri',
        year: new Date().getFullYear()
    });

});



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});