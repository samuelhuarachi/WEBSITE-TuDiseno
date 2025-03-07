"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const path = require("path");
const flash = require("connect-flash");
const bodyParser = require("body-parser");
const routes = require("./routes");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(express_1.default.static(`${__dirname}/../public`));
app.set("views", `${__dirname}/../views`);
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(flash());
app.use("/", routes);
const serve = app.listen(8000);
console.log("Server is listening on port 8000");
