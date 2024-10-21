const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/submit-survey', (req, res) => {
    const formData = req.body;

    // Настройка Nodemailer для отправки письма
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'njksadjas@gmail.com',
            pass: 'sfdrers7',
        },
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'L9LLIKA@yandex.ru',
        subject: 'Survey Results',
        text: JSON.stringify(formData, null, 2),
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});