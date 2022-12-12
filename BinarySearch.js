//Enter code here
function check(arr,n,k){
    // console.log(arr,n,k)
    let low=0;
    let high=arr.length-1;
    while(low<=high){
        let mid=Math.floor((high+low)/2);
        if(arr[mid]==k){
            console.log(1);
            return;
        }else if(arr[mid]>k){
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    console.log(-1)
}
function runProgram(input){
    input=input.split("\n");
    let a=input[0].trim().split(" ").map(Number)
    let arr=input[1].trim().split(" ").map(Number);
    check(arr,a[0],a[1]);
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input){
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read)
});