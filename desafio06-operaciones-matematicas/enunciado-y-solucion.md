# Descripción del reto
> Encuentra la lógica en las siguientes operaciones y números:
> - 3 + 2 = 91
> - 5 + 4 = 251
> - 9 + 3 = 366
> - 8 + 6 = 562

## ¿Qué esperamos de ti?
Se requiere dar solución al desafío de más arriba, toma en cuenta que este es un tipo de ejercicio **<u>totalmente lógico</u>, razón por la que nos olvidaremos del código en este desafío.**

Para completarlo aplica los siguientes pasos:

1. *Identifica posibles soluciones:* piensa en como solucionarías este problema, en ocasiones puedes tener más de una solución, por lo que te invito a que no te limites y desarrolles todas las soluciones que identifiques.

2. *Socializa tus hallazgos con la comunidad:* te invito a que compartas en la zona de comentario todas las soluciones identificadas.

3. *Toma el Quiz:* en el quiz encontrarás las posibles respuestas a este problema, entre ellas la respuesta correcta, recuerda que después del quiz encontrarás una nueva clase con la explicación del problema y su solución.

### Cursos para reforzar
- Curso de Fundamentos de Matemáticas
- Curso de Pensamiento Lógico: Algoritmos y Diagramas de Flujo
- Curso de Pensamiento Lógico: Lenguajes de Programación
- Curso de Pensamiento Lógico: Manejo de Datos, Estructuras y Funciones

<br>

---

<br>

# **<u>Solución:</u>**

Se trata de una serie numérica bastante sencilla. El número resultante sale de dos operaciones entre los valores de entrada:

<br>

- El/los primer/or dígito/s es/son **<u>la multiplicación de los de operandos sumada al primer operando</u>**.
    - _(Op1 * Op2 + Op1)_

<br>

- El/los segundo/s dígito/s es/son **<u>la resta entre los operandos</u>**.
    - _(Op1 - Op2)_

<br>

## Si comprobamos con los ejemplos:

> ### 3 + 2 = **_9 1_**
> - 3 * 2 + 3 = **9**
> - 3 - 2 = **1**

> ### 5 + 4 = **_25 1_**
> - 5 * 4 + 5 = **25**
> - 5 - 4 = **1**

> ### 9 + 3 = **_36 6_**
> - 9 * 3 + 9 = **36**
> - 9 - 3 = **6**

> ### 8 + 6 = **_56 2_**
> - 8 * 6 + 8 = **56**
> - 8 - 6 = **2**
