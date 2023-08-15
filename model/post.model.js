const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    user_id: {
        type: Number,
        required: true,
    },
    id: {
        type: Number,
        required: true
    },
   
   title : {
    type: String,
    required: true
   },
   description : {
    type: String,
    required: true
   }
},{
    timestamps : {created_At : 'created_at',updated_At : 'updated_at'},
    toJSON: {
        getters: true,
        setters: true
    },
    toObject: {
        getters: true,
        setters: true
    }
})

const post = mongoose.model('posts',postSchema)
module.exports = post