import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mailAdapter';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "e69f2802aa393b",
        pass: "66019e60a69dff"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Kerli Schroeder <kerlischroeder9@gmail.com>',
            subject,
            html: body,
    });
    };
}
