const mongoose = require('mongoose');
const dbgr = require('debug')('development:mongoose');

mongoose
    .connect('mongodb+srv://devkaran:4iwis6SeEFSA4n6I@cluster0.4cyyw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        dbgr('Connected to MongoDB');
    })
    .catch((err) => {
        dbgr('Error connecting to MongoDB', err);
    });

module.exports = mongoose.connection;