import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const tutorialSchema = new Schema({
    topic:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    publishDate:{
        type:Date,
        required:true
    }
});

const Tutorial = mongoose.model('Tutorial', tutorialSchema);
module.exports = Tutorial;