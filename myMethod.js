  // Randomize Array List
var numArray=[1,2,3,4,5,6,7,8,9];
 var createRandomNumArray = randomizeArray(array);
 function randomizeArray(arr){
    var temp = 0;
    var randomIndex= 0;
    var currentIndex = arr.length;
    while (0 !== currentIndex){
        randomIndex = Math.floor(Math.random()* currentIndex);
        currentIndex -=1;
        temp= arr[currentIndex];
        arr[currentIndex]=arr[randomIndex];
        arr[randomIndex]= temp;
    }
    return arr;
 }
console.log("Num Random Array is ", createRandomNumArray);

//Random Alpha Array

var alphaArray= ['a','b','c','d','e'];
var createRandomAlphaArray = randomArray2(alphaArray);
function randomAlphaArray(arr){
    var temp = 0;
    var randomVal= 0;
    var currentIndex= arr.length;
    while(0 !==currentIndex){
        randomVal = Math.floor(Math.random()* currentIndex);
        currentIndex -=1;
        temp=arr[currentIndex];
        arr[currentIndex]=arr[randomVal];
        arr[randomVal] =temp;
    }
    return arr;
}
console.log("Alpha randomizer is ", createRandomAlphaArray);
//Create an array that iterates forward and backwards
var array = [1,2,3,4,5];

    for(var i = 0, j = array.length -1; i<array.length,  j>=0 ; i++, j--){
        console.log("number array at i", array[i]);
        console.log("number array at j", array[j]);
    }


