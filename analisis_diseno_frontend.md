# Proyecto 4 - Geolocalizador 2.0

## Integrantes 

- Stiven Ramírez Arango - sramir70@eafit.edu.co
- Sebastián Ospina Cabarcas - sospin26@eafit.edu.co
- Camilo Suaza Gallego - csuazag@eafit.edu.co

# 1. Análisis y Diseño del Front-End

<p align="center">
<img src="https://user-images.githubusercontent.com/31974084/59079794-fe133400-88aa-11e9-88d0-87f5596dc515.png">
</p>

## 1.1 Requisitos funcionales:

1. Registrar y autenticar usuarios.
2. Obtener ubicación desde el dispositivo móvil y guardarlo en la base de datos.
3. Buscar las rutas del usuario y listarlas en una tabla y en Google Maps (tiempo real).
4. Borrar la rutas por nombre de usuario.

## 1.2 Definición de tecnología de desarrollo y despliegue para la aplicación:

* Lenguajes de Programación: Javascript, HTML y CSS
* Framework Web Front-end: Bootstrap + NodeJS + Express
* Base de Datos: MongoDB
* Web App Server: NodeJS
* Web Server: NGINX

# 2. Diseño:

Todo estos archivos estáticos se encuentran soportados en un servidor NodeJS. Este servidor corre en el puerto 80, dado que nuestra arquitectura de la aplicación es una Arquitectura Cliente / Servidor, este servidor que contiene el el frontend y expone los archivos en una carpeta 'public'.

Para el funcionamiento escalable del Frontend utilizamos un load balancer, lo que nos ayudará a que que se crearán nuevas máquinas corriendo este front dado a la demanda en peticiones (cargas) que empiecen a requerir los usuarios.
