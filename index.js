const express = require('express');
var exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/', require('./routes/home'))
app.use('/view', require('./routes/view'))


const PORT = process.env.PORT || 8000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));