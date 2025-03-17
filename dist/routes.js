"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const SendMail_1 = require("./use_case/SendMail");
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
        const { name, email, message } = req.body;
        const sendMail = new SendMail_1.SendMail();
        yield sendMail.execute({ name, email, message });
        res.status(200).json({});
    });
});
module.exports = router;
