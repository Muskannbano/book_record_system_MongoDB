const mongoose = require("mongoose")

function DbConnection(){
    const Db_URL = process.env.MONGO_URI
    mongoose.connect(Db_URL,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    const db = mongoose.connection

    db.on('error',console.error.bind(console,"Connection error to db"))
    db.once('open',function(){
        console.log("Db Connected!")
    })
}

module.exports = DbConnection