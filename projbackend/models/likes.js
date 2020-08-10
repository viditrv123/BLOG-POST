var mongoose = require('mongoose');

var Schema = mongoose.Schema;

  var likeSchema = new Schema({
      id:{
          type:String,
          required:true
      },
    postId:{
        type: String,
        required: true,
        trim: true
    },
    authorId:{
        type:String,
        required:true
    },

    datePublished:{
        type:String
    },
  },{
      timestamps:true
  });


  module.exports=mongoose.model("Like",likeSchema);