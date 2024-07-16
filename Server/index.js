const express = require('express');

const mongoose= require('mongoose');
const cors = require('cors')
const blogRoutes = require('./routes/BlogRoutes/BlogRoutes');
//exportion routes//
const StudentRoutes=require('./routes/StudentRoutes')
const DoubtsRoutes=require('./routes/Doubts/DoubtsRoute')
require('dotenv').config()

const app=express()
app.use(express.json())
app.use(cors())

const port = 5000;
const mdburl=process.env.MONGODBURL;



mongoose.connect(mdburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

app.use(StudentRoutes)
app.use(blogRoutes);
app.use(DoubtsRoutes)