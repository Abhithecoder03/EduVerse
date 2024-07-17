const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');

const StudentSchema = new mongoose.Schema(
    {
        fName: {
            type: String,
            required: true
        },
        lName: {
            type: String,
            required: true
        },
        userName: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: [true, 'Please enter a valid email'],
            unique: true,
            lowercase: true,
            validate: [isEmail, 'Please enter a valid email']
        },
        password: {
            type: String,
            required: [true, 'Please enter a password'],
            minlength: [5, 'Minimum password length is 5 characters']
        },
        role: {
            type: String,
            required: true
        },
    }, 
    {
        timestamps: true
    }
);

StudentSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Function to match the password
StudentSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
