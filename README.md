
## ¿En qué consiste este proyecto?

Este proyecto es una aplicación web desarrollada en React que utiliza la API de OpenFDA para permitir la búsqueda de medicamentos registrados en los Estados Unidos. El objetivo es proporcionar una interfaz intuitiva y eficiente para que los usuarios puedan buscar y obtener información detallada sobre medicamentos específicos.
En este caso, se puede realizar búsqueda de medicamentos por principio activo y por marca comercial.

## Requisitos mínimos :
- **Debe haber un campo de búsqueda para introducir el texto.**
- **Se deben mostrar los resultados concordantes tras la introducción de texto en el mismo.**
- **Al pinchar en un resultado, se debe mostrar la máxima información posible del medicamento en una página independiente.**
- **Uso de materialUI.**


## FRONTEND:
 
- **Framework JavaScript:** React V18
- **Librería de estilos:** [materialUI](https://mui.com/)
- **Gestión de solicitudes HTTP:** Axios
- **Librería de ventanas emergentes:** SweetAlert2
- **API consumida para este proyecto:** [OpenFDA](https://open.fda.gov/apis/drug/drugsfda/how-to-use-the-endpoint/)


## Estructura de proyecto :

El proyecto está organizado en varias capas para promover la reutilización de componentes y la separación de responsabilidades. 
A continuación se describen las principales capas y sus funciones:

- **Components:** 
  - Elementos reutilizables de la interfaz de usuario.
- **Layout:**
  - Plantillas que definen la estructura y disposición general de las páginas.
- **Pages:** 
  - Vistas específicas que representan diferentes rutas de la aplicación, como la página de búsqueda y la página de detalles del medicamento.
- **Services:**
  -  Gestión de llamadas HTTP.
- **Handler:**
  -   Funciones que manejan la lógica de negocio asociada a las solicitudes HTTP, abstraen la lógica de negocio fuera de los componentes.
- **Context:**
  - Proporciona un mecanismo centralizado para compartir estados y funcionalidades entre componentes sin necesidad de pasar props manualmente.
- **Models:**
  - Definición de los modelos de datos utilizados en la aplicación para la manipulación de los mismos.
- **Router:**
  -  Configuración de las rutas de la aplicación para la navegación, asignando componentes a rutas específicas.

 ## Arraque de proyecto :
Para instalar las dependencias necesarias en este proyecto localmente nos situaremos dentro de la carpeta `pruebaTecnica/pruebaTecnica/`.
Una vez dentro de la carpeta ejecutamos el comando :
```
npm install
```
Finalmente arrancamos el proyecto :
```
npm run dev
```
