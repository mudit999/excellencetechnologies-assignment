const arr = [1,0,0,0,0,0,1,0,0,0,0,1,1];

let count = 0;
let maxiConsecutive = 0;

for(let i = 0 ; i < arr.length ;i++ ){
    if(arr[i] == 0){
        count = 0;
    }else{
        count++;
    }

    if(count > maxiConsecutive){
        maxiConsecutive = count;
    }
}

console.log(maxiConsecutive);