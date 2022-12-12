//Enter code here
function lower(arr,n,k){
    let low=0;
    let high=n-1;
    let ans=-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2)
        if(arr[mid]==k){
            ans=mid;
            high=mid-1;
            
        }else if(arr[mid]<k){
            low=mid+1;
            // upper=mid;
        }else{
            high=mid-1;
        }
    }
    return ans;
        
}
function upper(arr,n,k){
    let low=0;
    let high=n-1;
    let ans=-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2)
        if(arr[mid]<=k){
            ans=mid;
            low=mid+1;
            
        }else if(arr[mid]>k){
            high=mid-1;
            // upper=mid;
        }else{
            low=mid+1;
        }
    }
    return ans+1;
}
function check(arr,n,k){
    // console.log(arr,n,k)
    let low=0;
    let high=n-1;
    let count=0;
    // let lower=0;
    // let upper=0;
    console.log(upper(arr,n,k)-lower(arr,n,k))
    // console.log()
    // while(low<=high){
    //     let mid=Math.floor((low+high)/2)
    //     if(arr[mid]==k){
    //         lower=mid;
    //         high=mid-1;
            
    //     }else if(arr[mid]<=k){
    //         low=mid+1;
    //         upper=mid;
    //     }else{
    //         high=mid-1;
    //     }
        
    //     //  if(arr[mid]<=k){
        //     ans=mid;
        //     low=mid+1;
        // }
        // else if(arr[mid]>k){
        //     high=mid-1;
        // }else if(arr[mid]<k){
        //     low=mid+1;
        // }
    // console.log(lower,upper)
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