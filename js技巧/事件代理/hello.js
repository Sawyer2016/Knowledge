var node=document.querySelector('.box')


//函数的第一个参数代表该事件
//第一种，第三个参数为false时在事件冒泡阶段时触发函数，true时在事件捕获阶段触发
node.addEventListener('click',(event, value=2)=>{
	switch(event.target.id){
		case '1':
			console.log(event.target.value,'aaaa',value)
			break;
		case '2':
			console.log(event.target.value,'bbbbb',value)
			break;
	}
})

//第二种
node.onclick = (e)=>{
	switch(e.target.id){
		case '1':
			console.log(e.target.value,'aaaa')
			break;
		case '2':
			console.log(e.target.value,'bbbbb')
			break;
	}
}