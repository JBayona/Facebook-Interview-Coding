/*Generar números aleatorios en base a una probabilidad
http://www.geeksforgeeks.org/random-number-generator-in-arbitrary-probability-distribution-fashion/
*/
/*A(1), B(1), C(2) es lo mismo que [A,B,C,C] con numeros 
de frecuencia muy altos es costoso porque necesitamos mucho espacio*/


//O(logN)
function generateRandom(arr, freq){
  let n = arr.length;
  //Create prefix
  let prefix = new Array(n).fill(0);
  let sum = 0;
  for(let i = 0; i < n; i++){
    sum += freq[i];
    prefix[i] = sum;
  }
  /*Los prefix denotan el punto maximo de cada valor para
  que el aleatorio entre en ese rango ejemplo si tenemos el
  array como [1,2,3,4] y el prefix [10,15,75,175] y 
  llega un 45 de random, el valor entra dentro del 3*/
  console.log(prefix);
  /*prefix[n-1] es la suma de todas las frecuencias. Generamos
  un numero random de 1 a este numero*/
  let random = Math.floor(Math.random() * prefix[n-1]);
  console.log(random);
  
  //Buscamos el index de random en el prefix array
  let index = findCeil(prefix, random, 0, n-1);
  return arr[index];
}

function findCeil(prefix, random, start, end){
  let mid;
  //Binary Search
  while(start < end){
    mid = Math.floor((start + end)/2);
    if(random > prefix[mid]){
      start = mid + 1;
    }else{
      end = mid;
    }
  }
  /*Start contiene el index en donde cae el numero que
  se mostrara en el arreglo principal*/
  return prefix[start] >= random ? start : -1;
}

function main(arr, freq){
  for(let i = 0; i < arr.length; i++){
    console.log(generateRandom(arr,freq));
  }
}

var arr  = [1, 2, 3, 4];
var freq = [10, 5, 60, 100];
main(arr, freq);

