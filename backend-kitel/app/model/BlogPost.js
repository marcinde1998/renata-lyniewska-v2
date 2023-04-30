const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose.connect('mongodb://127.0.0.1:27017/renata-lyniewska-kitel-page',  {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});


const schema = new mongoose.Schema(
    {
        title          :String,
        content         :String
    },
    { timestamps: true }
);

module.exports = mongoose.model('Blog-posts', schema);

