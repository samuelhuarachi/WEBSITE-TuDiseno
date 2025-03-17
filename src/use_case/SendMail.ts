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
                        email,
                        name,
                    },
                },
            ],
            content: {
                from: {
                    name: "No Reply",
                    email: "no-reply@exclusivacam.com",
                },
                subject: "ExclusivaCam Send - TuDiseno Contato site form",
                html: `<p>Contato teste ${message}</p>`,
            },
        };

        const request = await fetch(URL, {
            method: "POST",
            headers: {
                Authorization: process.env.SPARKPOSTKEY,
            },
            body: JSON.stringify(config),
        });
    }
}
