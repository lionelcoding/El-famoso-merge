const fs = require('fs');

const fileName = process.argv[2];

// Open & read the file 'fs'
fs.readFile(fileName, 'utf8', (error, data) => {
  
  // Gestion errors
  if (error) {
    console.error(error.message);
    return ;
  }

  // File empty?
  if(data == null || data == undefined || data == '' ) return console.error('ERROR: Empty file');

  // split & parse all data in integer
  const list = (data.split(` `)).map(numb=>{
    return parseInt(numb)
  });

  // Check if it's a number
  if(list.includes(NaN)) return console.error('ERROR: Not A Number in file');


  // Run Sorting Programms
  new MergeSort(list)

});

//Function Sort
class MergeSort{
  constructor(list){
    this.list  = [...list]
    this.count = 0
    this.mergeSort(this.list)
    this.viewResult()
  }

  mergeSort(list) {
    // No need to sort the array if the array only has one element or empty
    if (list.length <= 1) {
      return list;
    }
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(list.length / 2);
  
    // This is where we will be dividing the array into left and right
    const left  = list.slice(0, middle);
    const right = list.slice(middle);
  
    // Using recursion to combine the left and right
    return this.list = this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  // Merge the two arrays: left and right
  merge(left, right){
    let resultArray = []
    let leftIndex   = 0
    let rightIndex  = 0;

    // Concatenation
    while (leftIndex < left.length && rightIndex < right.length) {
      this.count++
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; // array left
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; // array right
      }
    }

//concat method
    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }

  viewResult(){
    console.log(`Tri fusion: ${this.count} comparaisons - [${this.list}]`)
  }
}