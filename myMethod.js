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

//Create a timer 
function startTimer(){
    var sec=60;
    timer=setTimer(function(){
        $('timer').text(sec);
        sec--;
        if(sec===0){
            stopTimer();
            clearInterval(timer);
        }
    }, 1000);
}
//stop Timer
function stopTimer(){
    $('timer').text('OO');
    clearInterval(timer);
}

//Anagrams
function validAnagrams(first,second){
    if(first.length != second.length){
        return false;
    }
    const lookup ={};
    for(let i= 0; i<first.length;i++){
        let letter = first[i];
        if(lookup[letter]){
            lookup[letter]++
        }
        else{
            lookup[letter]=1;
        }
        for(let i=0; i <second.length; i++){
            let letter=second[i];
            if(!lookup[letter]){
                return false;
            } else {
                lookup[letter]-=1;
            }
        }
    }
    return true;
}