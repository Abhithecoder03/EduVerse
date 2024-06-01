const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const { isEmail } = require('validator');
const StudentModel = mongoose.Schema(
    {
        fName: {
            type: String,
            requiured: true
        },
        lName: {
            type: String,
            requiured: true
        },
        userName: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: [true, 'please enter an valid email pass'],
            unique: true,
            lowercase: true,
            validate: [isEmail, 'please enter a valid email']
        },

        password: {
            type: String,
            required: [true, 'please enter an valid email pass'],
            minlength: [5, 'min pass length is 5 charter']
        },
        
    }, {
    timestamps: true
}
);
StudentModel.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
}); 3


//function to match the password
StudentModel.methods.matchPassword=async function(enterdPassword){
    return await bcrypt.compare(enterdPassword,this.password)
}
const Student = mongoose.model("Student", StudentModel)
module.exports = Student;