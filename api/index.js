import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express()

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
    }
);

//Error haldling middleware
app.use((err,req,res,next) => {          //error - pass to the middleware res - message to user   req - user request    next - go to next middleware
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal server Error';
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message,
  });
})