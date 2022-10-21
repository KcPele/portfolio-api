import express from "express"
import mongoose from "mongoose"
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
mongoose.connect("mongodb://localhost:27017/testApp")
.then(val => {
    console.log("connected")
})
.catch(err => {
    console.log(err)
})
mongoose.connection.once("connected", () => {
    console.log("connected to db")
})
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
app.listen("4000", () => {
    console.log("port 4000")
})