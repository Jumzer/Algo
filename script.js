array = [10, 15, 3, 7]
k = 10
array2 = [3, 7, 8, 3, 6, 1]
array3 = [1, 4, 5, 8]

const exercice1 = (array, k) => {
  for (let i = 1; i < array.length; i++){
		for (let j = 0; j < (array.length - i); j++){
			if (array[i-1] + array[j+i] === k){
			  return console.log(true);
			}
		}
	}
	return console.log(false);
}

exercice1(array, k);



const exercice2 = (array) => {
  let count = 1;
  let n = array.length;
  let max = array[n-1];
  
  for (let i = n-1; i >= 1; i--){
    for (let j = i-1; j >= 0; j--){
      if (array[j] > max){
        max = array[j];
        count ++;
      }
    }
  }
	console.log(count);
}

exercice2(array3);



const exercice3 = (array, k) => {
  for (let i = 1; i < array.length; i++){
		if (array[0] + array[i] === k){
      return console.log(true);
		}
	}
	return console.log(false);
}

exercice3(array2, k);