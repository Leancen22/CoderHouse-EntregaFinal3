# Proyecto final Programacion Backend CoderHouse

Este proyecto simula de manera basica una tienda online, con 
diferentes endpoints integrados que permiten interactuar con
productos, chat, carrito, crear usuarios, entre otros.

# USUARIO ADMINISTRADOR

Para poder probar se dispone de administrador a todos los usuarios que se registren.

Cuando se registra un usuario, en la base de datos se guarda un valor booleano asignado en true, para quitar el privilegio administrador hay que renombrar este valor a false. Se recomienda hacer esto para ver las diferencias.

# EndPoints
# Productos

GET _/productos_: Lista todos los productos 

GET _/productos/:id_: Lista un producto especifico con id: id

POST _/productos_: Guarda un producto con valores obtenidos de un formulario
en la base de datos

GET _/productos/productos_categoria_: Lista los productos que esten asignados a una categoria especifica pasada por un formulario

PUT _/productos/:id_: Edita la informacion de un producto especifico con id: id

DELETE _/productos/:id_: Borra un producto definico con id: id

DELETE _/productos/_: Borra todos los productos

# Carrito

GET _/carrito_: Lista el carrito del usuario logueado.

POST _/carrito_: Crea un nuevo carrito sin productos

POST _/carrito/productos_: Guarda un producto especifico en el carrito del usuario

DELETE _/carrito/productos/:id_: Borra productos del carrito del usuario

POST _/carrito/compra_finalizada_: Envia correo de confirmacion de compra y limpia el carrito posteriormente.

# Chat

GET _/chat_: Lista los mensajes del chat guardados en base de datos

GET _/chat/:id_: Lista los mensajes del chat guardados en base de datos de cada usuario por correo

# Index

GET _/vista_: Valida que exista seccion para un usuario y en caso de no hacerlo redirecciona al login

GET _/login_: Redirecciona a la vista de la tienda online o al login dependiendo si existe o no seccion activa para un usuario

POST _/login_: Verifica si los datos ingresados por el usuario al autenticarse son correctos y redirecciona en funcion de ellos.

GET _/error-login_: Llama a la pagina que se rederiza si falla la autenticacion.

GET _/error-registro_: Llama a la pagina que se rederiza si falla el registro.

GET _/registro_: Llama a la pagina que renderiza el formulario de registro.

POST _/registro_: Verifica que los datos ingresados por el usuario no hayan sido previamente registrados y en caso de no haber error guarda la informacion en la base de datos.

GET _/logout_: Elimina la seccion del usuario.

# Productos Random

GET _/api/productos_test_: Muestra una tabla con productos aleatorios

# Process

GET _/process/info_: Da informacion del sistema.


# Variables de entorno

En las variables de entorno se pueden editar los valores que se requieran para hacer pruebas, por ejemplo numeros de telefono y demas.
La estructura de el .env queda guardado en .env.template