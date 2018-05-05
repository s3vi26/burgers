let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let express = require('express');

let app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(methodOverride('_method'));

let exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

let routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

let port = 1337;
app.listen(port);