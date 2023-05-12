import type { NextApiRequest, NextApiResponse } from "next";
import { mailOptions, transporter } from "../../config/nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({ message: "Bad request" });
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "Dew Aerials - wiadomość",
        html: `<h1>Wiadomość od ${data.name}</h1><p>kontakt: ${data.email}</p><p>wiadomość: ${data.message}</p>`,
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      await transporter.sendMail({
        ...mailOptions,
        subject: "Dew Aerials - błąd",
        html: `<h1>Wiadomość nidostarczona </h1>`,
      });
      return res.status(400).json({ message: "Bad request" });
    }
  }
  return;
};

export default handler;
