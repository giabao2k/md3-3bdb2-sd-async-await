async function getSum(arr){
    if(Array.isArray(arr)){
        let sum = 0;
        arr.forEach(element => {
            sum += element
        });
        return sum;
    }
    return new Error('Input data is incorrect')
}

async function f(){
    try{
        let result = await getSum([1,2,3]);
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}
// let arr = [1,3];
// console.log(getSum(arr));

f();