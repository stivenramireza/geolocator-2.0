# Proyecto 4 - Geolocalizador 2.0

## Integrantes 

- Stiven Ramírez Arango - sramir70@eafit.edu.co
- Sebastián Ospina Cabarcas - sospin26@eafit.edu.co
- Camilo Suaza Gallego - csuazag@eafit.edu.co

# Análisis y Diseño de la Disponibilidad

## 1. MongoDB Atlas

### 1.1 ¿Qué ofrece?

MongoDB Atlas ofrece la base de datos líder en el mundo para aplicaciones modernas como un servicio en la nube totalmente automatizado diseñado y administrado por el mismo equipo que construye la base de datos. Se incluyen prácticas de seguridad y operativas comprobadas que automatizan las tareas de administración que consumen tiempo, como el aprovisionamiento de la infraestructura, la configuración de la base de datos, la disponibilidad, la distribución global, las copias de seguridad y más. 

<p align="center">
<img src="https://webassets.mongodb.com/_com_assets/cms/pause-resume-r0ukvlj9tt.png">
</p>

La interfaz de usuario y la API fáciles de usar le permiten dedicar más tiempo a crear sus aplicaciones y menos a administrar su base de datos.

La flexibilidad y la escalabilidad de una base de datos de documentos con la facilidad y la automatización de un servicio totalmente administrado en su nube preferida.

### 1.2 Arquitectura

La arquitectura de MongoDB Atlas está basada en el uso de **clusters** con varios nodos **primarios** y **secundarios**:

<p align="center">
<img src="https://storage.googleapis.com/gweb-cloudblog-publish/images/mongodb-3iqa3.max-700x700.PNG">
</p>

Además, contiene un importante aspecto de **escalabilidad** tanto **vertical** como **horizontal**:

#### 1.2.1 Escalabilidad Vertical

<p align="center">
<img src="http://s3.amazonaws.com/info-mongodb-com/_com_assets/media/Architecture%20v4.png">
</p>

#### 1.2.1 Escalabilidad Horizontal

<p align="center">
<img src="http://corpsite-blog.s3.amazonaws.com/blog/wp-content/uploads/2014/03/MongoDB-Request-Diagram.png">
</p>

Esto aseguro en gran medida una **alta disponibilidad** en nuestras aplicaciones cuando se de el caso en el que se caiga un servidor, automáticamente éste continuará realizando el proceso de lectura mientras se replica el que se había caído. Mongo Atlas es la solución a todos estos problemas.
