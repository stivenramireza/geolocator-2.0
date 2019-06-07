# Proyecto 4 - Geolocalizador 2.0

## Integrantes 

- Stiven Ramírez Arango - sramir70@eafit.edu.co
- Sebastián Ospina Cabarcas - sospin26@eafit.edu.co
- Camilo Suaza Gallego - csuazag@eafit.edu.co

# Análisis y Diseño de la Seguridad

## 1. Auth0

Para este atributo de calidad se usó el proveedor de servicios de autenticación de **Auth0**.
### 1.1 ¿Qué es?

<p align="center">
<img src="https://cdn-images-1.medium.com/max/1600/1*O93iMA3R-UPL9VC510yZFg.png">
</p>

Esta herramienta es muy poderosa pues permite autenticarse con la mayoría de redes sociales como **Facebook**, **Twitter**, **LinkedIn**, **Google**, entre otros.

Este servicio contiene:

- Manejo de **tokens**.
- Manejo de **sesiones**.
- Manejo de **cookies**.
- Manejo de **autorizaciones**.

### 1.2 Arquitectura de Auth0

La arquitectura de esta tecnología es la siguiente:

<p align="center">
<img src="https://cdn2.auth0.com/docs/media/articles/architecture-scenarios/web-app-sso/authz-code-flow.png">
</p>

Dicha arquitectura está basada en un modelo de autenticación **SSO (Single Sign On)**  que permite a los usuarios tener acceso a múltiples aplicaciones ingresando solo con una cuenta a los diferentes sistemas y recursos. Éste es de gran utilidad cuando existen diferentes sistemas a los que es posible acceder mediante una única contraseña y se desea evitar el ingreso repetitivo de estas cada vez que el usuario se desconecte del servicio. Para los usuarios supone una gran comodidad ya que identificándose solo una vez es posible mantener la sesión válida para el resto de las aplicaciones que hacen uso del SSO.

Entre las ventajas que tiene están:

- Acelera el acceso de los usuarios a sus aplicaciones.
- Reduce la carga de memorizar diversas contraseñas.
- Fácil de implementar y conectar a nuevas fuentes de datos.

## 2. Certificado SSL

Este certificado sirve para brindar seguridad al visitante de su página web, una manera de decirles a sus clientes que el sitio es auténtico, real y confiable para ingresar datos personales.

<p align="center">
<img src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2017/07/248945-que-es-importante-que-tu-pagina-web-cuente-certificado-ssl.png?itok=Zl5hvC58">
</p>

Para este proyecto se trató de conseguir un certificado mediante **Certbot**  que es un cliente ACME automático y fácil de utilizar, que obtiene certificados SSL/TLS gratis para tu sitio Web, provistos por **Let's Encrypt**.

<p align="center">
<img src="https://certbot.eff.org/images/certbot-logo-1A.svg">
</p>
