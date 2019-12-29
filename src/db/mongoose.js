const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/CMS';
mongoose.connect(url, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true});
