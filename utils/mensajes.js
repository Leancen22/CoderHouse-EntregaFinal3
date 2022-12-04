import {createTransport} from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

const EMAIL_ACCOUNT = process.env.EMAIL
const EMAIL_PASSWORD = process.env.PASSWORD

const transporter = createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: EMAIL_ACCOUNT,
        pass: EMAIL_PASSWORD
    }
})

const enviarEmail = async (user) => {
    const { username, email, direccion, edad, telefono } = user;
    const mailOptions = {
        from: 'NodeJS app <no-reply@example.com>',
        to: EMAIL_ACCOUNT,
        subject: "Nuevo registro",
        html:  `<h1>Nuevo Registro de ${username}!</h1>
        <h3>Datos del usuario</h3>
        <ul>
          <li>Email: ${email}</li>
          <li>Dirección: ${direccion}</li>
          <li>Edad: ${edad}</li>
          <li>Teléfono: ${telefono}</li>
        </ul>`
    }

    try {
        const info = await transporter.sendMail(mailOptions)
        console.log(info)
    } catch (error) {
        console.log(error)
    }
}

const enviarEmailCompra = async (user, compra) => {
    const { username, email, direccion, edad, telefono } = user;

    const mailOptions = {
        from: 'NodeJS app <no-reply@example.com>',
        to: EMAIL_ACCOUNT,
        subject: "Nuevo registro",
    }

    let html =  `<h1>Nuevo pedido de ${username}!</h1>
        <h3>Datos del usuario</h3>
        <ul>
          <li>Email: ${email}</li>
          <li>Dirección: ${direccion}</li>
          <li>Edad: ${edad}</li>
          <li>Teléfono: ${telefono}</li>
        </ul>

        <h2>Lista de productos pedido</h2>
        
        <ul> `;

    const productos = compra.productos
    
    productos.forEach(prod => html += `
        <li>
            <p>${prod.title} $${prod.price} x${prod.cantidad}</p>
        </li>
    `);
    html += '</ul>';

    mailOptions.html = html

    try {
        const info = await transporter.sendMail(mailOptions)
        console.log(info)
    } catch (error) {
        console.log(error)
    }
}

export {enviarEmail, enviarEmailCompra}


