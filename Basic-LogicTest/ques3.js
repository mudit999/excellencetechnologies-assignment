const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,18];
let repeatedEle = null;

for(let i = 0; i< arr.length; i++){
    if(arr[i] === arr[i+1]){
        repeatedEle = arr[i];
        break;
    }
}

console.log(repeatedEle);