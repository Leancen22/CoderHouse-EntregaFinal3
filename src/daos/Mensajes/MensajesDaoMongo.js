import ContainerMongo from "../../Containers/ContainerMongo.js";

import MensajesModel from "../../Models/mensajes.models.js";

let instance = null

class MensajesDaosMongo extends ContainerMongo {
    constructor(esquema) {
        super(MensajesModel)
    }

    static getInstance() {
        if (!instance) {
          instance = new MensajesDaosMongo()
        }
        return instance
    }

    async listarPorEmail(email) {
        try {
            const mensajes = await api.find({email: email});
            return mensajes
        } catch (error) {
            // logger.error(`Un error ha ocurrido al listar los mensajes para el correo ${email}: ${error}`);
            console.log({error: `Un error ha ocurrido al listar los mensajes para el correo ${email}`});
        }
    }
}

export default MensajesDaosMongo