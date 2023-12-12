# Página para la Actualización y Asignación de Materias 📚

_El sistema web o página para la actualización y asignación de materias, busca ayudar a editar archivos excel que contienen información relacionada con la cantidad de materias asignada a cada profesor de la facultad de informática_

## Comenzando 🚀

_Para obtener el proyecto en local y que se permita la edición, mejora e innovación, se debe clonar en la máquina local para poder acceder a estos archivos, este proyecto fue realizado con el apoyo de ```Centro de Desarrollo```_

Mira **Despliegue** para conocer como desplegar el proyecto.

### Pre-requisitos ✏️

_Antes de inicializar el proyecto y ejecutarlo, debes tener en cuenta los siguientes puntos_

- El sistema web hace uso de almacenamiento de datos local, por ende, cada computadora que almacene el sistema contendrá sus propios datos

## Construido con 🛠️

_Herramientas, lenguajes de programación y demás recursos usados para su construcción_

* [Node.js](https://nodejs.org/en/download/) – (16.6.2 o superior) Entorno de ejecución utilizado para la construcción del entorno virtual

## Despliegue 📦

_Se demuestra cómo se debe desplegar el proyecto para su correcto funcionamiento_

1. Descarga o clona el proyecto localmente

2. Una vez instalado ```Node.js``` se debe navegar entre los directorios para llegar al directorio raíz del proyecto desde consola

3. Antes de inicializar el proyecto se deben instalar las dependencias utilizadas para el desarrollo del proyecto, para esto ejecutamos el siguiente comando en el directorio raíz
```javascript
npm install
```
con esto se busca instalar todas las dependencias establecidas en el ```package.json```

En caso de que alguna dependencia por el paso del tiempo y/o actualizaciones ya no sea compatible con el proyecto, se debe forzar su instalación con una ```flag```
```javascript
npm install --force
```

4. Para incializar el sistema se debe ejecutar el siguiente comando, desde el directorio raiz, para el sistema web
```javascript
npm start
```

5. Una vez ocurrido lo anterior se debería abrir una pestaña del navegador donde se cargue el sistema web, en caso contrario de que no ocurriese, tú puedes abrir la pestaña y abrir
```
http://localhost:3000/
```

6. Una vez el programa se encuentre corriendo se podrá interactuar y llevar a cabo su funcionalidad

### Notas Adicionales 📋

_Se colocan notas que son de utilidad para la manipulación del proyecto y/o sistema_

- Para ingresar por primera vez al sistema, puedes usar las credenciales almacenadas en ```IndexedDB```, a partir de ahí cada usuario podrá generar sus propias credenciales para usar el sistema localmente

## Recursos Adicionales 💥

_Documentos, enlaces y más información referente a la construcción del proyecto, sistema o aplicación_

* [Figma](https://www.figma.com/file/GBdMtLftkXzBfnh5o34VDz/Asignacion-Materias?type=design&node-id=0%3A1&mode=design&t=nWpCwEFzbrhvSUTs-1) – Modelos y prototipos creados para el sistema web
* [Vercel](https://alta-materias.vercel.app/login) – Sistema web montado en un servidor

## Autores ✒️

_Las personas implicadas en el desarrollo del proyecto_

* **Michell García** - [AleGV258](https://github.com/AleGV258)
* **Daniel León** - [DanielLeonP](https://github.com/DanielLeonP)