var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: 'mailer',
    pool: true,
    requireTLS: true,
    tls: {
        requireTLS: false,
        rejectUnauthorized: false
    },
    secure: false,
    port: 25,
    auth: {
        user: 'paperless',
        pass: 'AyGNj5zB-KePF5M>'
    }
});

transport.verify((err, success) => {
    if(err){
        console.log("SMTP Connection error: " + err);
    }else{
        console.log("Connected to SMTP server");
    }
});

sendMail = (headers, cb) => {
    transport.sendMail(headers, cb);
}

module.exports = exports = sendMail;
