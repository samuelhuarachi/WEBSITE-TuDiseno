const fetch = require("node-fetch");


export class SendMail {
    async execute({ name, email, message }) {
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
                subject: `ExclusivaCam was sender - TuDiseno Contato site form ${ new Date()}`,
                html: `<p>${name}, ${email}, ${message}</p>`,
            },
        };

        console.log(config);

        const request = await fetch(URL, {
            method: "POST",
            headers: {
                Authorization: process.env.SPARKPOSTKEY,
            },
            body: JSON.stringify(config),
        });

        // sdfasd
    }
}
