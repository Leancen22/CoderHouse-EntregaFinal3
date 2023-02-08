import ProductosDaoMongo from "../daos/Productos/ProductosDaoMongo.js"
import { logger, Ruta } from "../../utils/logger.config.js"

let api = ProductosDaoMongo.getInstance();

export const listar_productos = async (req, res) => {
    try {
        const productos = await api.listarAll();
        res.json(productos);
    } catch (error) {
        logger.error(`Un error a ocurrido al listar productos: ${error}`);
        res.status(500).json({ error: "Un error ha ocurrido en el servidor" });
    }
};   

export const guardar_producto = async (req, res) => {
    try {
        await api.guardar({...req.body});
        res.status(201).json({ success: "Producto guardado exitosamente" });
    } catch (error) {
        logger.error(`Ha ocurrido un error al guardar producto: ${error}`);
        res.status(500).json({ error: "Un error ha ocurrido en el servidor" });
    }
};

export const listar_categoria = async (req, res) => {
    try {
        const {categoria} = req.body;
        const productos = await api.listarAllObj(categoria);
        const productos_especificos = productos.filter(prod => prod.categoria === categoria);

        if (productos_especificos.length > 0) {
            res.json(productos_especificos);
        } else {
            res.status(404).json({ error: "No hay productos con esa categoria" });
        }
    } catch (error) {
        logger.error(`Ha ocurrido un error al listar productos por categoria: ${error}`);
        res.status(500).json({ error: "Un error ha ocurrido en el servidor" });
    }
};

export const listar_producto = async (req, res) => {
    try {
        const id = req.params.id;
        const prod = await api.listar(id);
        if (prod) {
            res.json(prod);
        } else {
            res.status(404).json({ error: "No se encontró el producto con ese ID" });
        }
    } catch (error) {
        logger.error(`Ha ocurrido un error al listar producto con ID ${id}: ${error}`);
        res.status(500).json({ error: "Un error ha ocurrido en el servidor" });
    }
};

export const editar_producto = async (req, res) => {
    try {
        const id = req.params.id;
        const newProd = {...req.body};
        if (!id) {
            throw new Error("Falta el ID del producto a actualizar");
        }

        if (!newProd) {
            throw new Error("Falta la información del producto a actualizar");
        }

        const updatedProduct = await api.actualizar(id, newProd);
        res.json(updatedProduct);
    } catch (error) {
        logger.error(`Ha ocurrido un error al actualizar el producto: ${error}`);
        res.status(500).json({ error: error.message });
    }
};

export const borrar_producto = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            throw new Error("Falta el ID del producto a borrar");
        }

        await api.borrar(id);
        res.json(`Producto con id ${id} borrado con éxito`);
    } catch (error) {
        logger.error(`Ha ocurrido un error al borrar el producto: ${error}`);
        res.status(500).json({ error: error.message });
    }
};

export const borrar_productos = async (req, res) => {
    try {
        await api.borrarAll();
        res.json('Productos borrados con éxito');
    } catch (error) {
        logger.error('Ha ocurrido un error al borrar todos los productos: ${error}');
        res.status(500).json({ error: error.message });
    }
};