const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose.connect('mongodb://127.0.0.1:27017/renata-lyniewska-kitel-page', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const schema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Users', schema);