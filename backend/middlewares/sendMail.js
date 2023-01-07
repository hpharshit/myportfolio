import nodemailer from "nodemailer";

export const sendMail = async (text) => {
  const transporter = {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  };
  const emailMessage = {
    subject: "CONTACT REQUEST FROM PORTFOLIO",
    to: process.env.MYMAIL,
    from: process.env.MYMAIL,
    text,
  };
  const mailTransporter = nodemailer.createTransport(transporter);
  mailTransporter.sendMail(emailMessage, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent successfully");
    }
  });
};
