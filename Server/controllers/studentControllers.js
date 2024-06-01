const asyncHandler=require("express-async-handler")

const Student= require('../models/StudentModel')
const generateToken=require("./token")

const registerStudent=asyncHandler(async(req,res)=>{
    const {fName,lName,email,userName,password,pic}=req.body;

    console.log(req.body)

    if(!fName||!lName||!email||!password||!userName){
        res.status(400);
        throw new Error("Please Enter All Filed")
    }

    const emailExists=await Student.findOne({email});

    const userNameExists=await Student.findOne({userName})

    if(emailExists ||userNameExists){
         res.status(400);
         throw new Error("User already Exists");
    }

    const student=await Student.create({
        fName,
        lName,
        userName,
        email,
        password,
        pic
        
    })
    if(student){
        res.status(201).json({
            _id:student._id,
            fName:student.fName,
            lName:student.lName,
            
            userName:student.userName,
            email:student.email,
            password:student.password,
            pic:student.pic,

            token:generateToken(student._id)
        })

    }
    else{
        res.status(401)
        throw new Error("Unable to create User")
    }
    
})

const authStudent=asyncHandler(async(req,res)=>{
    const {email ,password}=req.body;

    const userexists=await Student.findOne({email});

    if (userexists &&(await userexists.matchPassword(password))){
           res.json({
              _id:userexists._id,
              fname:userexists.fName,
              lname:userexists.lName,
              email:userexists.email,
              password:userexists.password,
              pic:userexists.pic,
  
              token:generateToken(userexists._id)
           })
           console.log("login succesfuuly")
    }
    else{
      res.status(401).json({ message: "Invalid email or password" });
      throw new Error("Email and password is not correct");
    }
})


module.exports={registerStudent,authStudent}