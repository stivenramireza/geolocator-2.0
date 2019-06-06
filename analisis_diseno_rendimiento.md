# Proyecto 4 - Geolocalizador 2.0

## Integrantes 

- Stiven Ramírez Arango - sramir70@eafit.edu.co
- Sebastián Ospina Cabarcas - sospin26@eafit.edu.co
- Camilo Suaza Gallego - csuazag@eafit.edu.co

# Análisis y Diseño del Rendimiento

## Balanceo de Cargas

Para configurar un balanceador de cargas en Compute Engine, es necesario que las instancias estén dentro de un grupo de instancias. Esto distribuye tus recursos de procesamiento con cargas balanceadas en una o varias regiones, cerca de los usuarios que solicitan y para satisfacer los requisitos de alta disponibilidad. 

Cloud Load Balancing puede ubicar tus recursos en una IP Anycast única y aumentar o disminuir la escala de los recursos en forma inteligente y automática. Cloud Load Balancing ofrece varias opciones y está integrado con Google Cloud CDN para una entrega de aplicaciones y contenido óptima.

<p align="center">
<img src="https://cloud.google.com/images/products/load-balancing/worldwide-autoscaling.png?hl=es">
</p>

## IP Anycast

Con Cloud Load Balancing, una IP Anycast única hace de frontend para todas las instancias de backend en regiones de todo el mundo. Proporciona un balanceo de cargas entre regiones con conmutación por error multirregional, que traslada el tráfico cuidadosamente en fracciones si el backend se encuentra en mal estado. A diferencia de las soluciones de balanceo de cargas mundial basadas en DNS, Cloud Load Balancing reacciona inmediatamente ante los cambios en los usuarios, el tráfico, la red, el estado del backend y otras condiciones relacionadas, es instancias en Compute Engine que no estén dentro de un grupo de instancias, sigue estos pasos para agregarlas a un grupo.

<p align="center">
<img src="https://cloud.google.com/images/products/load-balancing/software-defined-load-balance.png?hl=es-419">
</p>

## Balanceo de cargas de HTTP

El balanceo de cargas de HTTP(S) puede balancear tráfico HTTP y HTTPS en diferentes instancias de backend, en diversas regiones. Toda la app está disponible a través de una sola dirección IP estática a nivel  mundial, por lo que la configuración de DNS es más simple. El balanceo de cargas de HTTP es escalable, tolerante a errores, no necesita preparación previa y permite el balanceo de cargas basado en contenido.

<p align="center">
<img src="https://user-images.githubusercontent.com/31974084/59069066-ac9f8080-887b-11e9-9ffd-2a706adbc790.png">
</p>

## Criterio por petición / criterio por CPU

cada instancia tiene un template de inicialización, load balancer, no puedo ir al https por load balancer porque no tenemos certificados.  ip estática

