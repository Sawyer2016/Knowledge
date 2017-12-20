function swap(arr,a,b){
  var tmp=arr[a]
  arr[a]=arr[b]
  arr[b]=tmp
}
function partition(arr,left,right){
  var pivot=arr[right];
  var tail=left-1;
  for(var i=left;i<right;i++){
    if(arr[i]<pivot)
    {
      swap(arr,i,++tail)
    }
  }
  swap(arr,tail+1,right)
  
  return tail+1
}

function quickSort(arr,left,right){
  if(left>=right)
    return;
  let pivot=partition(arr,left,right);
  quickSort(arr,left,pivot-1);
  quickSort(arr,pivot+1,right);
}
var arr=[5,18,6,78,45,23]
quickSort(arr,0,arr.length-1)
console.log(arr)