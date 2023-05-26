function findEvenIndex(arr){
  const totalSum = arr.reduce((a, b) => a + b, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const rightSum = totalSum - leftSum - arr[i];

    if (leftSum === rightSum) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1;
 
}

console.log(findEvenIndex([1,2,3,4,3,2,1]));