const mongoose = require("mongoose");
const Student = require("./StudentModel")
const responseSchema = new mongoose.Schema({
  responseText: {
    type: String,
    required: true,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student", // Reference to the User model
    required:true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  responses: [
    {
      responseText: String,
      student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student", // Reference to the User model
        required:true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const doubtSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  student: {
    
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student", // Reference to the User model
      required:true,
    
  
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  responses: [responseSchema],
});

const Doubt = mongoose.model("Doubt", doubtSchema);

module.exports = Doubt;



