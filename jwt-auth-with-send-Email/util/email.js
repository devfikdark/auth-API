var nodemailer = require('nodemailer');

var sendEmail = async options => {
  // create a transporter (MailTrap for testing Email send)
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  // create a transporter (Send Real Email) // nodemailer reg email & pass
  /*
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword'
    }
  });
  */

  // Define the email options
  let mailOptions = {
    from: '<morolswediu@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message
  }
  
  // Actually send the email
  await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;