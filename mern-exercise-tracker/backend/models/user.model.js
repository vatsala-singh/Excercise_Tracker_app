
const mongoose = require('mongoose');
//new mongose schema
const Schema = mongoose.Schema;

//user schema, single field called username
const userSchema = new Schema({
    username:{
        type: String,//data type
        required: true,//required field
        unique: true,//should be unique
        trim: true,//if someone typed empty space, should be trimmed
        minlength: 3//min length should be 3
    },
},
    {
        timestamp: true, //atomatically create time stamp
});

const User = mongoose.model('User', userSchema);

module.exports = User;