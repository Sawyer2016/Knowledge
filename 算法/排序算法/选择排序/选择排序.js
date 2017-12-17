var array=[65,5,32,1,83,27,23,4];
function swap(arr,index1,index2){
    var tmp=arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=tmp;
}
function selectionSort(arr){
    for(var i=0;i<arr.length-1;i++){
        var min=i;
        for(var j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min])
                min=j;
        }
        swap(arr,i,min)
    }
    return arr;
}
console.log(selectionSort(array))