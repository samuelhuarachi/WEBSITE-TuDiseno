const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();


router.get("/", function(req, res) {
    res.render("index", { layout: "base" });
});

router.get("/picaje-bordado", function(req, res) {
    res.render("picaje-bordado", { layout: "base" });
});

router.post("/tudisenho-send-email", async function(req, res) {
    try {
        const { name, email, message } = req.body;
        const host = req.get("host");

        // const transport = {
        //     host: "smtp.office365.com",
        //     port: "587",
        //     secure: false,
        //     tls: {
        //         rejectUnauthorized: false,
        //     },
        //     auth: {
        //         user: process.env.SENDMAIL_EMAIL,
        //         pass: process.env.SENDMAIL_PASS,
        //     },
        // };

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.SENDMAIL_EMAIL,
                pass: process.env.SENDMAIL_PASS,
            },
        });

        const transporter2 = nodemailer.createTransport({
            service: "gmail",
            port: 465,
            secure: true, // true for 465, false for other ports
            logger: true,
            debug: true,
            secureConnection: false,
            auth: {
                user: process.env.SENDMAIL_EMAIL, // generated ethereal user
                pass: process.env.SENDMAIL_PASS, // generated ethereal password
            },
            tls: {
                rejectUnAuthorized: true,
            },
        });

        const smtpTransport = nodemailer.createTransport(transporter2);
        const mailOptions = {
            to: email,
            from: process.env.SENDMAIL_EMAIL,
            subject: "Site Tu Diseno, contacto",
            text: `${name }, ${ message}`,
        };

        let info = await smtpTransport.sendMail(mailOptions);
        console.log("info", info);
    } catch (error) {
        console.log(error);
    }

    res.status(200).json({ });
});


module.exports = router;
