/* 
Question 1: curry
crea una funcion que me permita multiplicar cada uno de los numeros de un arreglo por 3 y me entregue
el resultado total. Ejemplo multiply([1,2,3])(3) -> resultado 18
*/

function multiply(a) {
  console.log('a',a)
  return (b) => {
    console.log('b',b)
    let result = 0;
    for (let i = 0; i < a.length; i++){
      result += b * a[i]
    }
    return result
  }
}

const curry = multiply([1,2,3])(3)


/*

console.lo(1);

setTimeout(() => console.log(2), 0);

  const promise = new Promise((resolve, reject) => {
    console.log(3);
    reject();
  })
    .then(
      () => console.log(4),
      () => console.log(5),
    )
    .then(() => console.log(6))
    .catch(() => console.log(7));

  console.log(8);

  setTimeout(() => console.log(9), 0);

  promise.then(() => console.log(10));

import React, { useState } from 'react';

cuantos re-renders provoca cada boton

const item = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 2);
          setNumber(number + 3);
        }}
      >
        +3
      </button>

      <button
        onClick={() => {
          setNumber((prev) => prev + 1);
          setNumber((prev) => prev + 2);
          setNumber((prev) => prev + 3);
        }}
      >
        +3
      </button>
    </>
  );
};

export default item;e.log(otherFruit)


que imprime esto:

fn()
function fn(){console.log(1)
fn()
function fn(){console.log(2)
fn()
function fn(){console.log(3)
fn()
              
              
*/