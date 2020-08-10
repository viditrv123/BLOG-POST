var mongoose = require('mongoose');

var Schema = mongoose.Schema;

  var authorSchema = new Schema({
      id:{
          type:String,
          required:true
      },
    firstName:{
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    lastName:{
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    phone:{
        type:Number,
        required:true
    },

    numPosts:{
        type:Number,
        default:0
    },
    numComments:{
        type:Number,
        default:0
    },
    numLikes:{
        type:Number,
        default:0
    },
  },{
      timestamps:true
  });


  module.exports=mongoose.model("Author",authorSchema);