# MongoDB Zoo

Este proyecto tiene como objetivo desarrollar un sistema de administración de un zoologico usando temas tales como:

1. Consultas MongoDb Avanzadas
2. Autenticacion/Autorizacion con JWT 
3. Validacion de colecciones
4. Validacion con DTO
5. Endpoints como servicios

## Diagrama MER
![](./img/img.png)


## Funcionalidades principales

El sistema de administración de las bodegas cuenta con 

**1. Gestión de Animales**


**2. Gestión de Habitats**
 
**3. Gestión de Servicios:**

**4.Gestion de staff (Empleados)**

**5. Gestion de Emergencias**

**6. Gestion de taquilleria**


     
## Tecnologías utilizadas

El proyecto  utilizará las siguientes tecnologías:

- Lenguaje de programación: [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- Framework Backend: [Node.js](https://nodejs.org/)
- Base de datos: [MongoDB](https://www.mongodb.com/es)
- Framework: [Express.js](https://expressjs.com/)


## Configuración

### Instalación

1. Clona este repositorio en tu máquina local:

   ```shell
   git clone https://github.com/tu-usuario/nombre-del-proyecto.git
   ```

2. Navega hasta el directorio del proyecto:

   ```shell
   cd backend
   ```
3. Instala las dependencias del proyecto:

   ```shell
   npm i
   ```

4. Crea las colecciones Mongo usando la extension MongoDB for VSCO
    - En este caso de que desee manejar la base de datos de manera local.
    Dirijase a la ruta ./backend/db/zoo.mongodb, ahí encontrará el archivo llamado zoo.mongodb.
    Para ejecutar este archivo instale la extensión de visual studio code "MongoDB". Una vez instalada la extensión tiene que realizar todo el proceso de creación y conexión con una cuenta MongoAtlas. Para más información referente a este tema recomendamos leer la documentación oficial

Para la facilidad del evaluador las variables de entorno se dejaron especificadas en el archivo .env.example tal y como están en el .env. Por lo que en caso de querer utilizar el proyecto de forma correcta, unicamente es renombrar el archivo

Cuando ya tenga la base de datos localmente se dirigirá nuevamente a la terminal que había abierto anteriormente y levantará el servidor de manera local usando el siguiente comando:
```shell
    npm run dev
   ```

### ENV
Antes de ejecutar la aplicación, asegúrate de crear y configurar el archivo de entorno (`.env`) con la siguiente estructura y reemplazar los valores por los adecuados:
```plaintext 
1. Configuración general server
SERVER = {"hostname": "localhost", "port": 8090}

2. Conexión a la base de datos
ATLAS_USER = "pruebas"
ATLAS_PASSWORD = "miguel"
ATLAS_DB = "zoo_db"

3.Clave privada 
JWT_SECRET = "campus"
```


## Endpoints Principales

## Gen Token
- Método: **POST**
- URL: `http://localhost:8090/login`


> ⚠️ **Importante:**
> Una vez generado el token, copia y peguelo en un header de tipo authorization con un prefijo ``Bearer``




## CRUD 
###  `obtener Habitats`
Obtendremos un habitat especifico

- Método: **GET**
- URL: `http://localhost:8090/api/use/habitats/?id=2`

###  `crear Habitats`
Podremos crear una habitat nuevo

- Método: **POST**
- URL: `http://localhost:8090/api/use/habitats`
-  Cuerpo de la solicitud
  ```json
   {
        "name": "MultiCultural",
        "description": "Very diferent habitat",
        "weather": "Sunny",
        "residents": ["Lion", "Zebra", "Monkey"],
        "assigned_personnel": 4,
        "next_maintenance": new Date("2023-09-15")
    }
  ```


###  `actualizar Habitats`
- Método: **PUT**
- URL: `http://localhost:8090/api/use/habitats/?=2`
-  Cuerpo de la solicitud
  ```json
   {
        "name": "SingleCultural",
        "description": "Normal habitat",
        "weather": "Cloudy",
        "residents": ["Lion", "Zebra", "Leopard"],
        "assigned_personnel": 4,
        "next_maintenance": new Date("2023-09-16")
    }
  ```
###  `eliminar Habitats`

- Método: **DELETE**
- URL: `http://localhost:8090/api/use/habitats/?=2`



### Consultas especificas

### 1. obtener los animales ingresados en un año específico
- Método: **GET**
- URL: `http://localhost:8090/api/use/animalsByEntryY`

### 2. traer todos los animales que han fallecido.
- Método: **GET**
- URL: `http://localhost:8090/api/use/animalsDeath`

### 3. obtener todos los animales bajo el cargo de un cuidador en específico. (el id es el id del cuidador)
- Método: **GET**
- URL: `http://localhost:8090/api/use/staffAnimals`

### 4. obtener los animales que están actualmente viviendo en un habitat en específico. (el id de entrada es el id del habitat)
- Método: **GET**
- URL: `http://localhost:8090/api/use/habitatAnimals`

### //5. Traer todos los animales que no tienen vacunas.(si el animal ya murió simplemente no lo muestra)

- Método: **GET**
- URL: `http://localhost:8090/api/use/animalsNoVacunes`

### 6. 6. Traer todos las registros de servicio que tuvieron un rembolso y la razón

- Método: **GET**
- URL: `http://localhost:8090/api/use/devolutions`

### / 7. Calcular cuanto dinero en total en un mes específico se “perdió” en los refounds amount*price - refund. (el parámetro month debe ser un numero entero de 1 a 12)
- Método: **GET**
- URL: `http://localhost:8090/api/use/lossMoney`

### 8. Calcular el total de ingresos de un día específico por taquillería.
- Método: **GET**
- URL: `http://localhost:8090/api/use/balanceDay`

### 9. Calcular el total de ingresos en un mes específico en taquillería y servicios.
- Método: **GET**
- URL: `http://localhost:8090/api/use/sellsMonth`

### 10. // 10. Mirar cual el empleado con más ventas. con info del empleado y sus ventas.
- Método: **GET**
- URL: `http://localhost:8090/api/use/bestSeller`

### 11. // 11. obtener los empleados por salario.

- Método: **GET**
- URL: `http://localhost:8090/api/use/staffBySalary`

### // 12. Traer el empleado con mayor antiguedad que sigua trabajando.

- Método: **GET**
- URL: `http://localhost:8090/api/use/staffOlder`

### // 13. ordenar por tipo de ticket y la cantidad total.
- Método: **GET**
- URL: `http://localhost:8090/api/use/tacoInOrder`

### // 14. Identificar cual fue el mes en que mas se vendieron cosas.


- Método: **GET**
- URL: `http://localhost:8090/api/use/bestMonth`

### // 15. traer todas los registros de emergencias que ha atendido un veterinario en específico

- Método: **GET**
- URL: `http://localhost:8090/api/use/emergenciesByVet`

### // 16. traer todos los incidentes que ha tenido un animal en su historia.


- Método: **GET**
- URL: `http://localhost:8090/api/use/incidentsByAnimal`

### 17. traer todas las emergencias ocurridas en un determinado plazo de fechas .
- Método: **GET**
- URL: `http://localhost:8090/api/use/betweenDates`


## Licencia

Este proyecto está bajo la Licencia ISC. 


## Autores

**Angel David Velasco** 

**David Andres Rueda**

