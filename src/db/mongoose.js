const mongoose = require('mongoose')

const connection_url = 'mongodb+srv://admin:admin@cluster0-ymdtv.mongodb.net/futbol?retryWrites=true&w=majority'

mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useCreateIndex: true, 
    useUnifiedTopology: true
})