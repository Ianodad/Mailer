require('dotenv').config();

const nodemailer = require('nodemailer');

async function send(mail) {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    let mailOptions = {
        from: 'nodejse@gmail.com',
        to: `${mail.email}`,
        subject: 'status email',
        text: `Hello ${mail.name} 
        
        Bellow is your status

        IP1:${mail.IP1}
        IP2: ${mail.IP2}
        IP3: ${mail.IP3}
        IP4: ${mail.IP4}
        Attendance: ${mail.Attendance}

        The pass mark for IPs 70% .Base of this benchmark
        You scored ${mail.Status.percentage}%.
        ${mail.Status.remark}
        
        
        `
    };

    let feedback = '';

    let info = await transporter.sendMail(mailOptions);

    return "Message sent " + info.envelope.to

}

module.exports.sendMail = send;