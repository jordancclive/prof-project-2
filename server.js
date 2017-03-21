const express = require('express');
const server = express();
const path = require('path');

const volleyball = require('volleyball');
server.use(volleyball);

const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({extended: false}));

const methodOverride = require('method-override');
server.use(methodOverride('_method'));

server.use('/public', express.static(path.join(__dirname, 'public')));

const nunjucks = require('nunjucks');
nunjucks.configure('views', {noCache: true});
server.set('view engine', 'html');
server.engine('html', nunjucks.render);

const Model = require('./model');
server.get('/', (req, res)=>{ res.render('index', {list: Model.printList() })});

server.use('/', require('./routes'));

const port = process.env.PORT || 5143;
server.listen(port, console.log(`Listening on port ${port}`));
