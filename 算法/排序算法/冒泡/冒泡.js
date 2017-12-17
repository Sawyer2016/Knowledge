var array=[65,5,32,1,83,27,23,4];
function swap(arr,index1,index2){
    var tmp=arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=tmp;
}
function bubbleSort(arr){
    for (var num=arr.length-2;num>=0;num--){
        for(var i=0;i<=num;i++){
            if(arr[i]>arr[i+1])
            {
                swap(arr,i,i+1)
            }
        }
    }
    return arr;
}
console.log(bubbleSort(array))