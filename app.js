const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// routing
const routes = require('./routes/routes');
const adminRoutes = require('./routes/add-user');
const errorController = require('./controllers/error');
// view engine templates
app.set('view engine','ejs');
app.set('views','views');


app.use(bodyParser.urlencoded({ extended : true}));
app.use(routes);
app.use('/admin',adminRoutes);



// for rendering static css files
app.use(express.static(path.join(__dirname,'css')));

app.use(errorController.errors);

app.listen(8000);