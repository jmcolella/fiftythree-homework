function duplicate ( array ) {
  let returnArray = [];

  for ( let i = 0; i < array.length; i++ ) {
    let j = array.length - 1 - i;
    returnArray.unshift( array[j] );
    returnArray.push( array[i] );
  }

  return returnArray;
}

console.log( duplicate( [1,2,3,4,5] ) );
