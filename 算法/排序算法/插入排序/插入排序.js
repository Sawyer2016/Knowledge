var array=[65,5,32,1,83,27,23,4];

function InsertSort(arr){
    for(var i=1;i<arr.length;i++){
        for(var j=0;j<i;j++){
            if(arr[j]>arr[i]){
                var tmp=arr[i]
                arr.splice(i,1);
                arr.splice(j,0,tmp);
                break;
            }
        }
    }
    return arr;
}
console.log(InsertSort(array))