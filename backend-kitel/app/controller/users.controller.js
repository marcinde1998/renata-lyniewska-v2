const Users = require('../model/Users');

function userPass(cb) {
    Users.find().lean().then((Users) => {
            cb(null, Users)
        }).catch((err)=>{
            cb(err);
        })    
};

module.exports = {
    userPass: userPass
}