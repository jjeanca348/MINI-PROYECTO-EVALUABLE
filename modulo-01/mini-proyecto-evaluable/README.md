# Conversor de Unidades de Temperatura y Longitud

## 1. Descripción del proyecto

El **Conversor de Unidades de Temperatura y Longitud** es una aplicación desarrollada en JavaScript utilizando Node.js. Su objetivo es realizar conversiones entre diferentes unidades de temperatura y longitud mediante un menú interactivo en la consola.

El programa permite al usuario seleccionar el tipo de conversión, ingresar un valor numérico y visualizar el resultado junto con sus respectivas unidades de medida.

Este proyecto se desarrolla como actividad práctica del módulo de JavaScript.

## 2. Funcionalidades

El programa cuenta con las siguientes opciones:

- Convertir grados Celsius a Fahrenheit.
- Convertir grados Fahrenheit a Celsius.
- Convertir metros a kilómetros.
- Convertir kilómetros a metros.
- Validar que los valores ingresados sean numéricos.
- Evitar entradas vacías.
- Permitir temperaturas negativas.
- Rechazar longitudes negativas.
- Mostrar el valor original y el resultado de la conversión.
- Repetir el menú hasta que el usuario seleccione la opción de salir.

## 3. Tecnologías utilizadas

- **JavaScript:** lenguaje de programación utilizado para desarrollar la aplicación.
- **Node.js:** entorno de ejecución para ejecutar JavaScript fuera del navegador.
- **Readline/Promises:** módulo integrado de Node.js utilizado para recibir datos desde la consola.
- **Visual Studio Code:** editor de código utilizado durante el desarrollo.

## 4. Requisitos previos

Para ejecutar el proyecto se necesita:

- Tener instalado Node.js.
- Contar con Visual Studio Code o una terminal de comandos.
- Tener el archivo `app.js` del proyecto.

Se recomienda utilizar Node.js 18 o una versión posterior.

## 5. Estructura del proyecto

```text
conversor-unidades/
│
├── app.js
│   Archivo principal que contiene las funciones,
│   validaciones y el menú interactivo.
│
└── README.md
    Archivo con la descripción e instrucciones
    de ejecución del proyecto.
```

## 6. Instrucciones de ejecución

**Paso 1.** Abrir Visual Studio Code.

**Paso 2.** Seleccionar la opción Archivo → Abrir carpeta y buscar la carpeta donde se encuentra el proyecto.

**Paso 3.** Abrir una terminal desde Visual Studio Code mediante el menú Terminal → Nueva terminal.

**Paso 4.** Verificar que Node.js esté instalado ejecutando el siguiente comando:

```bash
node -v
```

Si aparece el número de versión de Node.js, significa que está instalado correctamente.

**Paso 5.** Ejecutar el programa escribiendo:

```bash
node app.js
```

**Paso 6.** Presionar Enter y esperar a que aparezca el menú principal.

## 7. Uso del programa

Al iniciar la aplicación, se mostrará el siguiente menú:

```text
========== CONVERSOR DE UNIDADES ==========
1. Celsius a Fahrenheit
2. Fahrenheit a Celsius
3. Metros a Kilometros
4. Kilometros a Metros
5. Salir
===========================================

Seleccione una opcion (1-5):
```

El usuario debe seleccionar una opción del 1 al 5.

Después, el programa solicitará el valor que desea convertir y mostrará el resultado correspondiente.

### Ejemplo de ejecución

**Conversión de Celsius a Fahrenheit:**

```text
Seleccione una opcion (1-5): 1

Ingrese el valor en grados Celsius: 25

========== RESULTADO ==========
Valor original: 25 grados Celsius
Conversion: Celsius a Fahrenheit
Resultado: 77 grados Fahrenheit
===============================
```

Para finalizar el programa, el usuario debe seleccionar la opción 5.

## 8. Fórmulas utilizadas

| Conversión | Fórmula |
|---|---|
| Celsius a Fahrenheit | (°C × 9/5) + 32 |
| Fahrenheit a Celsius | (°F - 32) × 5/9 |
| Metros a kilómetros | metros / 1000 |
| Kilómetros a metros | kilómetros × 1000 |

## 9. Validaciones del sistema

El programa implementa diferentes validaciones para garantizar el ingreso correcto de información:

- **Campo vacío:** solicita nuevamente el valor cuando no se ingresa información.
- **Valor no numérico:** rechaza letras y datos que no representen números válidos.
- **Temperaturas negativas:** permite ingresar valores negativos porque son válidos para las conversiones de temperatura.
- **Longitudes negativas:** impide ingresar valores negativos en las conversiones de metros y kilómetros.
- **Opciones incorrectas:** muestra un mensaje de error cuando se selecciona una opción diferente de las disponibles.

## 10. Autor

Proyecto académico desarrollado como actividad práctica de JavaScript.

**Área de formación:** Análisis y Desarrollo de Software.

**Lenguaje de programación:** JavaScript.

**Entorno de ejecución:** Node.js.