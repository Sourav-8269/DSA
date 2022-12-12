//Enter code here
function check(arr,n,k){
    // console.log(arr,n,k)
    let high=n-1;
    let low=0;
    let ans=-1;
    while(low<=high){
        let mid=Math.floor((high+low)/2);
        // if(arr[mid]>=k){
        //     // ans=mid;
        //     high=mid-1;
        // }else{
        //     low=mid+1;
        // }
        // if(arr[mid]==k){
        //     ans=mid;
        
        // }
         if(arr[mid]==k){
            ans=mid;
            high=mid-1;//to go left 
            
        }else if(arr[mid]<k){
            low=mid+1;//to go right
        }else{
            high=mid-1;
        }
    }
    console.log(ans)
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