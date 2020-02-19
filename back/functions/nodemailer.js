const nodemailer = require('nodemailer');

const sendNodemailer = (user, res) => new Promise(function (resolve, reject) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'noshoesallowedhere@gmail.com',
            pass: 'noshoes#20'
        }
    })

    const mailOptions = {
        from: 'sendemailslecture@gmail.com',
        to: user.email,
        subject: 'Hallo ' + user.name,
        html:
            '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' +
            '<html>\n' +
            '<head>\n' +
            '    <meta charset="UTF-8">\n' +
            '    <meta content="width=device-width, initial-scale=1" name="viewport">\n' +
            '</head>\n' +
            '\n' +
            '<body>\n' +
            '<p>\n' +
            `kool email from checkpoint_4 for ${user.email} to get to ${user.adress} to get kool` +
            'this is the only email because i had no time to make more, but i have different endpoint, trust me\n' +
            'i send emails for newsletter and booking \n' +
            '</p>\n' +
            '<p>\n' +
            `${JSON.stringify(res)}\n` +
            '</p>\n' +
            '</body>\n' +
            '\n' +
            '</html>'
    }

    transporter.sendMail(mailOptions, error => {
        error ?
            reject('Something went wrong') :
            resolve('Done')

        transporter.close()
    });

});

module.exports = sendNodemailer;