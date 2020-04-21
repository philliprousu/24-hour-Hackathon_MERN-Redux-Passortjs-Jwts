const express = require('express');
const Router = require('./routes');
const app = express();
app.use(express.json());
app.use(express.static(__dirname + '/../public'));
Router(app);

//db connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Mongoose Connected'));

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});