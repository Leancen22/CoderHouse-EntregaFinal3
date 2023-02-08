import MensajesDaosMongo from "../daos/Mensajes/MensajesDaoMongo.js";
import { logger, Ruta } from "../../utils/logger.config.js"

let mensajesApi = MensajesDaosMongo.getInstance()

export const obtenerChat = async (req, res) => {
    res.render('chat')
}

export const chatPorEmail = async (req, res) => {
    const email = req.params.email;
    try {
        const mensajes = await mensajesApi.listarAllObj(email);
        const email_especificos = mensajes.filter(mens => mens.author['email'] == email);
        res.json(email_especificos);
    } catch (error) {
        logger.error(`Un error a ocurrido al listar los mensajes del usuario con email ${email}: ${error}`);
        res.status(500).json({ error: `No se puedieron obtener los mensajes del usuario con email ${email}` });
    }
}