import express from "express"
const router = express.Router()
import nodemailer from "nodemailer";

router.post("/",  async (req: express.Request, res: express.Response) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.PUBLIC_SMTP_USER,
      pass: process.env.PUBLIC_SMTP_PASSWORD
    }
  });

  try {
    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: process.env.PUBLIC_SMTP_RECEIVER,
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>
      `
    });
    res.status(200).json({"msg": "Mail has been sent"})
  } catch (error: any) {
    res.status(500).json({ error: error?.message || error?.toString() });
  }
});

export default router