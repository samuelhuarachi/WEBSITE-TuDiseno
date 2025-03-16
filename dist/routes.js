var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();
router.get("/", function (req, res) {
    res.render("index", { layout: "base" });
});
router.get("/picaje-bordado", function (req, res) {
    res.render("picaje-bordado", { layout: "base" });
});
router.post("/tudisenho-send-email", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, email, message } = req.body;
            const host = req.get("host");
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
                secure: true,
                logger: true,
                debug: true,
                secureConnection: false,
                auth: {
                    user: process.env.SENDMAIL_EMAIL,
                    pass: process.env.SENDMAIL_PASS,
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
                text: `${name}, ${message}`,
            };
            let info = yield smtpTransport.sendMail(mailOptions);
            console.log("info", info);
        }
        catch (error) {
            console.log(error);
        }
        res.status(200).json({});
    });
});
module.exports = router;
