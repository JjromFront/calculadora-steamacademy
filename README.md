# Operaciones Matemáticas

Este módulo proporciona funciones para realizar diversas operaciones matemáticas, incluyendo cálculo de áreas, operaciones básicas, fórmula general, cálculo de hipotenusa y perímetro.

## Instalación

Para utilizar este módulo, asegúrate de tener instalado [Node.js](https://nodejs.org/). Luego, puedes instalar el módulo utilizando npm:

```shell
npm install calculadora-steamacademy

```
## Uso

Para utilizar las funciones del módulo, primero importa el módulo en tu archivo JavaScript:

```javascript
const operations = require('calculadora-steamacademy');
```

Luego de esto podras usar cada funcion respectivamente, aqui te muestro las funcions que el paquetes soporta y como usarlas.

### Calculo de areas


Area del triangulo


```javascript
const areaTriangulo = operations.areaTriangle(base, altura);
console.log("Área del triángulo:", areaTriangulo);
```


Area del cuadrado


```javascript
const areaCuadrado = operations.areaSquare(ladoX, ladoY);
console.log("Área del cuadrado:", areaCuadrado);
```

### Calculo de perimetro


Perimetro del triangulo


```javascript
const perimetroTriangulo = operations.perimeterTriangle(lado1, lado2, lado3);
console.log("Perímetro del triángulo:", perimetroTriangulo);
```

Perimetro del cuadrado


```javascript
const perimetroCuadrado = operations.perimeterSquare(lado);
console.log("Perímetro del cuadrado:", perimetroCuadrado);
```


### Formula general o del estudiante

Lo puedes usar de esta forma:


```javascript
const raices = operations.general(a, b, c);
console.log("Raíces:", raices);
```


### Hipotenusa


Puedes calcular hipotenusa con el siguiente codigo:

```javascript
const hipotenusa = operations.calcHipotenusa(cateto1, cateto2);
console.log("Hipotenusa:", hipotenusa);
```


### Operaciones basicas


Suma:

```javascript
const hipotenusa = operations.calcHipotenusa(cateto1, cateto2);
console.log("Hipotenusa:", hipotenusa);
```


Resta:


```javascript
const resta = operations.rest(numero1, numero2);
console.log("Resta:", resta);
```


Multiplicacion:


```javascript
const multiplicacion = operations.multiply(numero1, numero2);
console.log("Multiplicación:", multiplicacion);
```


Division:


```javascript
const division = operations.divide(numero1, numero2);
console.log("División:", division);
```

## Contribución


Si deseas contribuir a este proyecto, puedes hacerlo creando un fork del repositorio, realizando tus cambios y enviando una solicitud de pull request. Agradecemos tu contribución.


## Licencia


Este módulo se distribuye bajo la licencia MIT. Para más detalles, consulta el archivo LICENSE.
