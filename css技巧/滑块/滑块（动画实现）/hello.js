let status=false
var node=document.querySelector('.switch')
function changeStatus(){
	if(status==true){
		status=false
		node.style.animationName='moveBack';		
	}
	else{
		status=true
		node.style.animationName='moveSwitch';
		
	}
}
