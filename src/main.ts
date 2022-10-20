import express from "express"
import mongoose from "mongoose"
import userRoutes  from "./routes/user"
import sendMailRoute from "./routes/sendmail"
import productRoutes from "./routes/products"
import  "dotenv/config"
const app = express()
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
app.use("/user", userRoutes)
app.use("/sendmail", sendMailRoute)
app.use("/product", productRoutes)

app.listen("4000", () => {
    console.log("port 4000")
})