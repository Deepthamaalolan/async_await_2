const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/test');
var userSchema=new mongoose.Schema({
    username:{type:String,unique:true},
    password:{type:String},
    firstname:{type:String},
    lastname:{type:String}
});

var User=mongoose.model('myuser3',userSchema);

module.exports=User;
