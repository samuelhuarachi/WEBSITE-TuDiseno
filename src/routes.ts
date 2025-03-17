import { SendMail } from "./use_case/SendMail";

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
    const { name, email, message } = req.body;

    const sendMail = new SendMail();
    await sendMail.execute({ name, email, message });

    res.status(200).json({ });
});


module.exports = router;
