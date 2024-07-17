const express=require('express')

const {registerStudent,authStudent}=require("../controllers/studentControllers")

// const {protect}=require("../middlewares/authM")

const router = express.Router();

router.route("/student/signup").post(registerStudent)

router.post('/student/login',authStudent)



module.exports=router