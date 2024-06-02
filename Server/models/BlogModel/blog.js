const mongoose = require("mongoose");
const BlogModel = mongoose.Schema(
    {
        tittle: {
            type: String,
            requiured: true
        },
        description: {
            type: String,
            requiured: true
        },
        category: {
            type: String,
            enum:["web","app","math","others"]
        },
        image: {
            type: String,    
        },

        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Student"
        }
        
    }, {
    timestamps: true
});
const Blog=mongoose.model("Blog",BlogModel)
module.exports=Blog