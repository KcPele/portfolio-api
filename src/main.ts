import express from "express"
import mongoose from "mongoose"
import cor from "cors"
import aboutRoute from "./routes/about"
import tagsRoute from "./routes/tags"
import worksRoute from "./routes/works"
import skillsRoute from "./routes/skills"
import brandsRoute from "./routes/brands"
import profileRoute from "./routes/profile"
import experienceRoute from "./routes/experiences"
import testimonialsRoute from "./routes/testimonials"
import workExperienceRoute from "./routes/workExperience"
import userRoutes  from "./routes/user"
import serviceRoutes from "./routes/services"
import sendMailRoute from "./routes/sendmail"
import  "dotenv/config"

const app = express()
declare global{
    export namespace Express{
        interface Request{
            userId: string
        }
    }
}
const PORT  = process.env.PORT || 4000
mongoose.connect(process.env.MONGODB_URL as string)
.then(val => {
    console.log("connected")
})
.catch(err => {
    console.log(err)
})
mongoose.connection.on('connecting', function() {
    console.log('connecting to MongoDB...');
  });

  mongoose.connection.on('error', function(error) {
    console.error('Error in MongoDb connection: ' + error);
    mongoose.disconnect();
  });
  mongoose.connection.on('connected', function() {
    console.log('MongoDB connected!');
  });
  mongoose.connection.once('open', function() {
    console.log('MongoDB connection opened!');
  });
  mongoose.connection.on('reconnected', function () {
    console.log('MongoDB reconnected!');
  });
//   mongoose.connection.on('disconnected', function() {
//     console.log('MongoDB disconnected!');
//     mongoose.connect(dbURI, {server:{auto_reconnect:true}});
//   });
// mongoose.connect(dbURI, });

app.use(cor({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }))
app.use(express.json())
app.use("/tags", tagsRoute)
app.use("/user", userRoutes)
app.use("/about", aboutRoute)
app.use("/works", worksRoute)
app.use("/skills", skillsRoute)
app.use("/brands", brandsRoute)
app.use("/profile", profileRoute)
app.use("/service", serviceRoutes)
app.use("/sendmail", sendMailRoute)
app.use("/experience", experienceRoute)
app.use("/testimonials", testimonialsRoute)
app.use("/workexperience", workExperienceRoute)

app.listen(PORT, () => {
    console.log(`port ${PORT}`)
})