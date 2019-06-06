# Proyecto 4 - Geolocalizador 2.0

## Integrantes 

- Stiven Ramírez Arango - sramir70@eafit.edu.co
- Sebastián Ospina Cabarcas - sospin26@eafit.edu.co
- Camilo Suaza Gallego - csuazag@eafit.edu.co

# 1. Análisis y Diseño del Back-End

## 1.1 Requisitos funcionales:

1. Registrar y autenticar usuarios.
2. Obtener ubicación desde el dispositivo móvil y guardarlo en la base de datos.
3. Buscar las rutas del usuario y listarlas en una tabla y en Google Maps (tiempo real).
4. Borrar la rutas por nombre de usuario.

## 1.2 Definición de tecnología de desarrollo y despliegue para la aplicación:

* Lenguajes de Programación: Javascript, HTML y CSS
* Framework Web Back-end: NodeJS - Express
* Base de Datos: MongoDB
* Web App Server: NodeJS
* Web Server: NGINX

# 2. Diseño:

## 2.1 Modelo de datos:

  **User**:

    {
      UserSchema:{
        auth0Id: String, 
        email: String, 
      }
    }

  **Route**:

    {
      RouteSchema:{
        auth0Id: String, 
        name: String, 
        points: Array, 
        description: String
      }
    }

  **Point**:

    {
      RouteSchema:{
        latitud: Number, 
        longitud: Number, 
        date: String, 
      }
    }
## 2.2 Servicios Web

  1. URL: http://server/usuarios/registro

    Método: POST
    URI: /registro
    Descripción: Inserta el registro de la cuenta del usuario.
    Datos de entrada:
    nombreCliente, nombreUsuario, contrasenaUsuario, emailUsuario, fechaRegistroUsuario

  2. URL: http://server/usuarios/login

    Método: GET
    URI: /login
    Descripción: Autenticación de usuarios.

  3. URL: http://server/usuarios/localizacion

    Método: POST
    URI:
    Descripción: Obtiene la ubicación y almacena el registro en la base de datos.
    Datos de entrada:
    nombreUsuario, latitud, longitud, fecha

  4. URL: http://server/rutas

    Método: GET
    URI: /findbyUsername?nombreUsuario=val
    Descripción: Realiza la búsqueda de las ubicaciones del usuario y las muestra en Google Maps.

  5. URL: http://server/rutas

    Método: GET
    URI: /delRutas?nombreUsuario=val
    Descripción: Borra todas las rutas del usuario seleccionado almacenadas en la base de datos.

  6. URL: http://server/rutas

    Método: DELETE
    URI: /delRutas/nombreUsuario
    Descripción: Borra todas las rutas del usuario seleccionado almacenadas en la base de datos.
