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
exports.SendMail = void 0;
const fetch = require("node-fetch");
class SendMail {
    execute({ name, email, message }) {
        return __awaiter(this, void 0, void 0, function* () {
            const URL = "https://api.sparkpost.com/api/v1/transmissions";
            const config = {
                options: {
                    open_tracking: true,
                    click_tracking: true,
                },
                recipients: [
                    {
                        address: {
                            email: "samuel.huarachi@gmail.com",
                            name: "Samuel Gomes",
                        },
                    },
                ],
                content: {
                    from: {
                        name: "No Reply",
                        email: "no-reply@exclusivacam.com",
                    },
                    subject: `ExclusivaCam was sender - TuDiseno Contato site form ${new Date()}`,
                    html: `<p>${name}, ${email}, ${message}</p>`,
                },
            };
            console.log(config);
            const request = yield fetch(URL, {
                method: "POST",
                headers: {
                    Authorization: process.env.SPARKPOSTKEY,
                },
                body: JSON.stringify(config),
            });
        });
    }
}
exports.SendMail = SendMail;
