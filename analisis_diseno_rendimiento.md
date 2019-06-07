# Proyecto 4 - Geolocalizador 2.0

## Integrantes 

- Stiven Ramírez Arango - sramir70@eafit.edu.co
- Sebastián Ospina Cabarcas - sospin26@eafit.edu.co
- Camilo Suaza Gallego - csuazag@eafit.edu.co

# Análisis y Diseño del Rendimiento

## 1. Análisis

1. Establecer el Acuerdo de Nivel de Servicio (SLA) de rendimiento y los objetivos
2. Modelación del rendimiento, evaluación de escenarios y análisis de procesos críticos para el negocio y transacciones.
3. Establecimiento de directrices de diseño de rendimiento
4. Aplicación de directrices de diseño de rendimiento
5. Identificar, analizar y eliminar cuellos de botella en varios componentes
6. Establecer una infraestructura continua de monitoreo y alerta
7. Establecer una gobernanza del desempeño consistente en procesos y equipos bien definidos para mantener los SLA de rendimiento.

## 2. Diseño

- **Mantenerse liviano:** los componentes páginas clave deben mantenerse ligeros reduciendo su tamaño general y minimizando el número de viajes de ida y vuelta del servidor.

- **Diseño para el fracaso:** Evaluar todas las posibilidades de fracaso y su probabilidad probable. Algunos eventos comunes de falla pueden ser fallos de hardware, fallos de seguridad, desastres naturales, repunte repentino del tráfico de usuarios, fallos de red, fallos de operaciones, etc.

- **Cargas no bloqueadas usando la solicitud de datos asincrónicos:** Sean componentes del lado del cliente o para comunicarse con el servidor o para la agregación de datos, intente aprovechar el enfoque basado en AJAX. Esto mejora drásticamente el tiempo de carga de la página percibida y proporciona una carga no bloqueante de la página.

- **Usar la política de carga bajo demanda:** Cargue los datos y el componente sólo cuando sea necesario.

## 3. Pruebas con jMeter

<p align="center">
<img src="http://jmeter.apache.org/images/jmeter.png">
</p>

### 3.1 ¿Qué es?

Es una herramienta de carga para llevar acabo simulaciones sobre cualquier recurso de software.

Además, posee la capacidad de realizar desde una solicitud sencilla hasta secuencias de requisiciones que permiten diagnosticar el comportamiento de una aplicación en condiciones de producción.

En este sentido, simula todas las funcionalidades de un Navegador ("Browser"), o de cualquier otro cliente, siendo capaz de manipular resultados en determinada requisición y reutilizarlos para ser empleados en una nueva secuencia.

### 3.2 Arquitectura

La arquitectura de este sistema es **cliente-servidor** y permite saturar de peticiones con tal de verificar la calidad del servidor en cuanto a su escalabilidad.

<p align="center">
<img src="https://www.deviqa.com/static/images/posts/QualityAssuranceJMeterForPerformanceTesting/tematical.jpg">
</p>

Se trata de una herramienta que somete a los servidores a **pruebas de estrés** y si salen bien librados, significa que éstos cumplen con los estándares adecuados de escalabilidad.
