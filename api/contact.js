/**import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  const { name, email, message } = req.body;

  try {
    await resend.emails.send({
      from: "Website Message <messages@messages.cmdsleep.com>",
      to: ["cmdsleep@gmail.com"],
      subject: "New Website Contact Form Message",
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    res.status(200).json({ message: "Message sent" });
  } catch (err) {
    res.status(500).json({ error: "Failed to send message" });
  }
}**/

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  console.log("🔵 Incoming request:", req.method, req.url);
  console.log("🔵 Headers:", req.headers);

  if (req.method !== "POST") {
    console.warn("⚠️ Method not allowed:", req.method);
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  console.log("🔵 Raw body received:", req.body);

  const { name, email, message } = req.body || {};
  console.log("🔵 Parsed form data:", { name, email, message });

  if (!name || !email || !message) {
    console.error("❌ Missing fields:", { name, email, message });
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    console.log("🚀 Sending email via Resend...");
    const result = await resend.emails.send({
      from: "Website Message <messages@messages.cmdsleep.com>",
      to: ["cmdsleep@gmail.com"],
      subject: "New Website Contact Form Message",
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    console.log("✅ Email send result:", result);

    res.status(200).json({ message: "Message sent" });
  } catch (err) {
    console.error("❌ Resend error:", err);
    res.status(500).json({ error: err.message || "Failed to send message" });
  }
}

