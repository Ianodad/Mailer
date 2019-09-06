const express = require('express');
var exphbs = require('express-handlebars');

const app = express();
const helmet = require('helmet');
const compression = require('compression');





app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/', require('./routes/home'))
app.use('/view', require('./routes/view'))

// production 
app.use(helmet());
app.use(compression())

const PORT = process.env.PORT || 8000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));