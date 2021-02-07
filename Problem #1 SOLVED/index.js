
/*
This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
*/


let numberList = [10, 15, 3, 7];
let number = 17;
let isSummand;

function findSummand(list, checkNum){
	
  numberList.forEach(numb => {
  	for(i=0;i<numberList.length;i++){
    		let testnumber;
        testnumber = numb + numberList[i];
        if(testnumber==checkNum){
        	isSummand=true;
          break;
        }else{
        	isSummand=false;
        }
    }
  });
	
	return console.log(isSummand);
}

findSummand(numberList, number);