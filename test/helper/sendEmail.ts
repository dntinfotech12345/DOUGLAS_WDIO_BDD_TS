
// async..await is not allowed in global scope, must use a wrapper

export default async function sendemail() {
    
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey("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");
    const fs = require("fs");

    // const pathToAttachment = './testpdf.pdf';
    const pathToAttachment = `${__dirname}/testpdf.pdf`;
    console.log("What is dir:-"+__dirname)
    const attachment = fs.readFileSync(pathToAttachment).toString("base64");

const msg = {
  to: 'prajapatikalpesh8910@gmail.com',
  from: 'tcsitltd41@gmail.com',
  subject: 'Allure report testing',
  text: 'Find the attachment',
  attachments: [
    {
      content: attachment,
      filename: "testpdf.pdf",
      type: "application/pdf",
      disposition: "attachment"
    }
  ]
};
sgMail.send(msg).then(res =>{console.log("result"+res);}).catch(err => {
  console.log(err);
});
    
}
