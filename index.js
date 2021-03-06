//nodejs blog site

const config = require('config');
const express = require('express');
const app = express();
const port = process.env.PORT || 3011;
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');

//required routes
const home = require('./routes/home');
const posts = require('./routes/posts');

app.set('view engine', 'pug'); //don't have to require this because it loads itself automatically


nodeEnv = app.get('env');
//middleware
app.use(helmet());
app.use(express.static('public'))
if (nodeEnv == 'development'){
    app.use(morgan('common'));
}
app.use('/blog', posts);
app.use('/', home);

console.log('Application Name: ' + config.get('name'));
console.log('DB Password: ' + config.get('db.password'));

app.listen(port, () => console.log(`Blog site is listening on port ${port}!`));