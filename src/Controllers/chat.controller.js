import MensajesDaosMongo from "../daos/Mensajes/MensajesDaoMongo.js";

let mensajesApi = MensajesDaosMongo.getInstance()

export const obtenerChat = async (req, res) => {
    res.render('chat')
}

export const chatPorEmail = async (req, res) => {
    const email = req.params.email;
    console.log(email)
    try {
        const mensajes = await mensajesApi.listarAllObj(email);
        res.json(mensajes);
    } catch (error) {
        console.log(`Un error a ocurrido al listar los mensajes del usuario con email ${email}: ${error}`);
        res.status(500).json({ error: `No se puedieron obtener los mensajes del usuario con email ${email}` });
    }
}