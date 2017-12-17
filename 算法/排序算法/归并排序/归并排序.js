var array=[65,5,32,1,83,27,23,4];

function merge(arr,left,mid,right){
    var i=left,j=mid+1;
    while(i<=mid&&j<=right){
        if(arr[i]<=arr[j]){
            i++;
        }else{
            var tmp=arr[j];
            arr.splice(j,1);
            arr.splice(i,0,tmp);
            i++;
            mid++;
            j++; 
        }
    }

}
function mergeRecursion(arr,left,right){
    if(left==right)
        return;
    var mid=Math.floor((left+right)/2);
    mergeRecursion(arr,left,mid);
    mergeRecursion(arr,mid+1,right);
    merge(arr,left,mid,right);
}

mergeRecursion(array,0,array.length-1)
console.log(array)