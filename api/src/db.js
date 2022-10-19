const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect(process.env.MONGODB)
        .then(()=> console.log('connected to mongoDb'))
        .catch((error)=>console.error(error))
}

module.exports = dbConnect;