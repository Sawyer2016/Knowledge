var flag=1
function change(){
  var left=document.getElementById("left")
  var right=document.getElementById("right")
  if(flag==1)
  {
  left.style.backgroundColor="white";
  left.style.color="gray";
  right.style.backgroundColor="blue";
  right.style.color="white";
  flag=0;
  }else{
  right.style.backgroundColor="white";
  right.style.color="gray";
  left.style.backgroundColor="blue";
  left.style.color="white";
  flag=1;
  }
  
}