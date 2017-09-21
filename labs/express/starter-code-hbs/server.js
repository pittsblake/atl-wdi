/* packages */
const path        = require('path');
const logger      = require('morgan');
const express     = require('express');
const hbs         = require('hbs');
const bodyParser  = require('body-parser');
const methodOverride = require('method-override');
/* app settings*/
const app         = express();
const port        = process.env.PORT || 3000;
const todosController = require('./controllers/todos.js')
/* set up the application params*/

app.use(methodOverride('_method'));

// log
app.use( logger('dev'));

app.use(bodyParser.urlencoded({
  extended: true
}));

/*Views*/
app.set('view engine', 'hbs');

//Controllers
app.use('/todos', todosController);

/* HOME */
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});



// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});
