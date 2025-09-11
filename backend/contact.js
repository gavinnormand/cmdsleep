import { Resend } from "resend";
import express from "express";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  const { name, email, phone, message } = req.body;

  try {
    await resend.emails.send({
      from: "Website Message <messages@messages.cmdsleep.com>",
      to: ["cmdsleep@gmail.com"],
      subject: "New Website Contact Form Message",
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    res.status(200).json({ message: "Message sent" });
  } catch (err) {
    res.status(500).json({ error: "Failed to send message" });
  }
}

const app = express();
app.post("/api/contact", handler);
app.listen(3000);