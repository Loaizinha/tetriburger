1. Requisitos previos

Antes de empezar, asegúrate de:

Tener el backend corriendo en Spring Boot (por defecto en http://localhost:8080).

Tener Postman instalado.

Haber creado la entidad Usuario con los atributos correo y clave, y un repositorio UsuarioRepository con el método:

Usuario findByCorreoAndClave(String correo, String clave);

2. Endpoints disponibles

El controlador define los siguientes endpoints:

Método	URL	Descripción
GET	/registro	Retorna un mensaje de prueba.
POST	/usuarios	Guarda un usuario en la base de datos.
POST	/login	Verifica las credenciales de un usuario.
3. Pruebas en Postman
3.1. Probar GET /registro

Abrir Postman.

Crear una nueva petición con:

Método: GET

URL: http://localhost:8080/registro

Presionar Send.

📌 Respuesta esperada:

"inicio"

3.2. Probar POST /usuarios

Este endpoint guarda un usuario en la base de datos.

En Postman, crear una nueva petición con:

Método: POST

URL: http://localhost:8080/usuarios

Ir a la pestaña Body → seleccionar raw → elegir JSON.

Enviar un JSON con los datos del usuario, por ejemplo:

{
  "nombre": "Felipe",
  "correo": "felipe@tetris.com",
  "clave": "1234"
}


Presionar Send.

📌 Respuesta esperada:
El objeto Usuario guardado, con su id generado automáticamente, por ejemplo:

{
  "id": 1,
  "nombre": "Felipe",
  "correo": "felipe@tetris.com",
  "clave": "1234"
}

3.3. Probar POST /login

Este endpoint valida si un usuario existe con el correo y la clave.

En Postman, crear una nueva petición con:

Método: POST

URL: http://localhost:8080/login

En el Body → raw → JSON, enviar los datos de acceso:

{
  "correo": "felipe@tetris.com",
  "clave": "1234"
}


Presionar Send.

📌 Posibles respuestas:

Si las credenciales son correctas:

"SI"


Si son incorrectas:

"NO"

4. Notas adicionales

Si Postman devuelve un error CORS, asegúrate de que el @CrossOrigin en tu controlador incluya la URL de tu frontend (por ejemplo, http://localhost:5173) o usa * para pruebas:

@CrossOrigin(origins = "*")


Si no tienes datos en la base de datos, primero debes probar /usuarios para registrar un nuevo usuario antes de probar /login.
