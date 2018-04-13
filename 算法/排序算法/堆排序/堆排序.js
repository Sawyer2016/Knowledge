function buildHeap(arr,n){
  for(var i=Math.floor(n/2-1);i>=0;i--){
    heapify(arr,i,n)
  }
}
function swap(arr,a,b){
  var tmp=arr[a];
  arr[a]=arr[b];
  arr[b]=tmp;
}
function heapify(arr,i,n){
  var left=i*2+1;
  var right=i*2+2;
  var max=i;
  if(left<n&&arr[left]>arr[max])
    max=left;
  if(right<n&&arr[right]>arr[max])
    max=right;
  if(max!=i){
    swap(arr,i,max);
    heapify(arr,max,n);
  }
}
function heapSort(arr){
  buildHeap(arr,arr.length);
  let i=arr.length-1;
  while(i>0){
    swap(arr,0,i);
    heapify(arr,0,--i);
  }
  return arr
}
var arr=[5,14,8];
console.log(heapSort(arr))