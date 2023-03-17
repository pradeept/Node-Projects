
function findFibo(n) { 
    let n1 = 0;
    let n2 = 1;
    let n3;
    let series = [n1,n2];
    
    for(let i=0;i<n;i++){
        n3 = n1 + n2;
        series.push(n3);
        let temp = n2;
        n2 = n3;
        n1 = temp;
    }

    return series;
}

module.exports =findFibo;


function findPrime(n) { 
    let series = [];

    if(n === 1){
        // console.log(1);
    }
    else if(n === 2){
        console.log(2);
    }
    else{
        series.push(2);
        for(let i =2;i<n;i++){
            let flag = false;
            for(let j=2; j<i; j++){
                if(i%j === 0){
                    break;
                }
                flag = true;
            }
            if(flag)
                series.push(i);
        }
        return series;
    }   
}




function findArmStrong(n){
    const inputN = parseInt(n);
    let count = 0;
    let result =0 ;

    if(n === 0 || n === 1){
        console.log("Armstrong Number");
    }
    else{
        count=1;
        for(let i=1;i<n.length;i++){
            count ++;
        }
        let temp = inputN;
        for(let i=0;i<n;i++){
            result = result + Math.pow(Math.floor(temp%10),count);
            temp = temp/10;
        }
         
        if(result === inputN){
            return "<h1>The number is Armstrong</h1>";
        }
        else{
            return "<h1>The number is not Armstrong</h1"; 
        }
    }
    
}

module.exports = {
    findFibo,
    findPrime,
    findArmStrong
};