const express = require('express');
const app = express();
const path = require('path');

const volleyball = require('volleyball');
app.use(volleyball);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use('/public', express.static(path.join(__dirname, 'public')));

const nunjucks = require('nunjucks');
nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

const Model = require('./model');
app.get('/', (req,res,next)=> {
  Model.findAll()
    .then((data)=>{
      res.render('index', { list: data })
    })
});

app.use('/', require('./routes'));

const port = process.env.PORT || 4123;
app.listen(port, ()=>{console.log(`Listening on port ${port}`)});
