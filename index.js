/*npm install nodemailer*/

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "alvesvaleriobruno@gmail.com",
        pass: "isiyccgwikhknwgz" /*https://security.google.com/settings/security/apppasswords  senha deve ser gerada usando esse link caso tenha verificação de duas etapas no email*/
    }
});

transporter.sendMail({
    from: "Bruno Alves <alvesvaleriobruno@gmail.com>",
    to: "brunoav@codebit.com.br",
    subject: "Teste de envio de email com Node.js",
    text: "Olá, teste de envio de email."
}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err);
});