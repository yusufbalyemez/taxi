const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'yusufbalyemezoyun@gmail.com',
        pass: 'adpq pvdl jtov oaqt'
    }
})

let mailOptions = {
    from: 'yusufbalyemezoyun@gmail.com',
    to: 'yusuf.balyemez93@gmail.com',
    subject: 'Nodemailer Test',
    html: '<h1> Test İçerik</h1>',
}

transporter.sendMail(mailOptions,(err,data)=>{
    if(err) console.log(err)
    else console.log('mail gönderildi')
})