function ifEqual(arr1,arr2){
    if(arr1.length!=arr2.length)
        return false;
    for(var i=0;i<arr1.length;i++){
        if(arr2.indexOf(arr1[i])==-1)
            return false;
    }
    return true;
}