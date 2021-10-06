array = [3,8,6,9,5,1]

//?----------------
//$ ---- MERGE ----
//?----------------
function merge(start, end) {
  let sortedArr = []

  while (start.length && end.length) {
    // comparer les premier élement de chaque tableau
    // Insérer le plus petit elem dans la sortedArr
    if (start[0] > end[0] ) {
      sortedArr.push(end.shift())
    } else {
      sortedArr.push(start.shift())
    }
  }

  // Retourne les 3 array combine (... = Spread operator)
  // si nos tableau était d'une lengt différente
  // ça évite de laisser des valeur dans start ou end 
  return [...sortedArr, ...start, ...end]
}

function mergeSort(array) {
  if (array.length <= 1) return array
  
  const half = array.length / 2
  const start = array.splice(0, half)
  //à la position 0, détruis half éléments (2)
  const end = array
  
  return merge(mergeSort(start), mergeSort(end));
}

/*
function mergeSort(array){
  const half = array.length / 2

  if (array.length <= 1)
    return array;

  let left = [];
  for(let i = 0; i < half; i++) {
    left.push(array.shift())
    // je rajoute à la fin de left le premier élément de array
  }
  let right = [];
  for(let i = array.length; i > 1; i--) {
    right.push(array.shift())
    // je rajoute à la fin de right le premier élément de array
  }
  console.log(left)
  console.log(right)

  if (array.length >= 1){
    mergeSort(array)
  }
}

console.log(mergeSort(array))

// const computeFactorialRec = (n) => {
//   if (n === 0) return 1;
//   else return n * computeFactorialRec(n - 1);

*/


