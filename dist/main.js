import express from "express";
import mongoose from "mongoose";
import cor from "cors";
import aboutRoute from "./routes/about.js";
import tagsRoute from "./routes/tags.js";
import worksRoute from "./routes/works.js";
import skillsRoute from "./routes/skills.js";
import brandsRoute from "./routes/brands.js";
import profileRoute from "./routes/profile.js";
import experienceRoute from "./routes/experiences.js";
import testimonialsRoute from "./routes/testimonials.js";
import workExperienceRoute from "./routes/workExperience.js";
import userRoutes from "./routes/user.js";
import serviceRoutes from "./routes/services.js";
import sendMailRoute from "./routes/sendmail.js";
import "dotenv/config";
const app = express();
const PORT = process.env.PORT || 4000;
mongoose.connect(process.env.MONGODB_URL)
    .then(val => {
    console.log("connected");
})
    .catch(err => {
    console.log(err);
});
mongoose.connection.once("connected", () => {
    console.log("connected to db");
});
app.use(cor({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}));
app.use(express.json());
app.use("/tags", tagsRoute);
app.use("/user", userRoutes);
app.use("/about", aboutRoute);
app.use("/works", worksRoute);
app.use("/skills", skillsRoute);
app.use("/brands", brandsRoute);
app.use("/profile", profileRoute);
app.use("/service", serviceRoutes);
app.use("/sendmail", sendMailRoute);
app.use("/experience", experienceRoute);
app.use("/testimonials", testimonialsRoute);
app.use("/workexperience", workExperienceRoute);
app.listen(PORT, (e) => {
    console.log(e)
    console.log(`port ${PORT}`);
});
//# sourceMappingURL=main.js.map