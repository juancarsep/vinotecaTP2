import nodemailer from 'nodemailer';

 const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: "tpvinoteca@gmail.com",
      pass: 'qjdakxfeocuefchn',
    },
  });

  transporter.verify().then( () => {
    console.log("Listo para enviar mensajes");
  })

  export default transporter