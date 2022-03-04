var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const crypto = require('crypto')
const { v1: uuidv1 } = require('uuid');
var userSchema = new Schema({
    name:{
        type: String,
        required: true,
        maxlength = 32,
        trim = true
    },
    lastname:{
        type: String,
        maxlength=32,
        trim = true
    },
    email:{
        type: String,
        trim: true,
        required: true,
        unique:true
    },
    userinfo:{
        type:String,
        trim:true
    },
    encry_password:{
        type:String,
        required:true
    },
    salt:String,
    role: {
        type: Number,
        default:0
    },
    puchases:{
        type: Array,
        default: []
    }

},
{timestamps:true});

userSchema.virtual("password")
    .set(
        function(password){
            this._passowrd= password
            this.salt = uuidv1()
            this.encry_password = this.securePassword(password)
        }
    )
    .get(function(){
        return this._passowrd;
    })

userSchema.method = {
    securePassword: function(plainpassword){
        if(!plainpassword){
            return "" 
        }
        try{
            createHmac('sha256', this.salt)
               .update(plainpassword)
               .digest('hex');
        }
        catch(err){
            return "";
        }
    },
    authenticate: function(plainpassword){
        return this.securePassword(plainpassword)===this.encry_password
    }
}

module.exports = mongoose.model("User", userSchema);