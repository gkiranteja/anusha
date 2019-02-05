var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var bcrypt=require('bcrypt');
var schema=new Schema({
    username:{type:String,required:true},
    email:{type:String,requred:true},
    password:{type:String,required:true},
    creation_dt:{type:Date,equired:true}
})

schema.statics.hashPassword=function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

schema.methods.isvalid=function(hashedPassword){
    return bcrypt.compareSync(hashedPassword,this.password);
}
module.exports=mongoose.model('user',schema);