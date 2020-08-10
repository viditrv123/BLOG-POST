var mongoose = require('mongoose');

var Schema = mongoose.Schema;

  var postSchema = new Schema({
      id:{
          type:String,
          required:true
      },
    title:{
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    description:{
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    authorId:{
        type:Number,
        required:true
    },

    datePublished:{
        type:String
    },
    numComments:{
        type:Number
    },
    numLike:{
        type:Number
    },
  },{
      timestamps:true
  });


  module.exports=mongoose.model("Post",postSchema);